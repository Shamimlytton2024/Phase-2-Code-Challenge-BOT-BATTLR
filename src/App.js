import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [armyBots, setArmyBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => setBots(data))
      .catch(err => console.error('Error fetching bots:', err));
  }, []);

  const enlistBot = (bot) => {
    if (!armyBots.find(b => b.id === bot.id)) {
      setArmyBots([...armyBots, bot]);
    }
  };

  const releaseBot = (botId) => {
    setArmyBots(armyBots.filter(bot => bot.id !== botId));
  };

  const deleteBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setBots(bots.filter(bot => bot.id !== botId));
        setArmyBots(armyBots.filter(bot => bot.id !== botId));
      })
      .catch(err => console.error('Error deleting bot:', err));
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <BotCollection bots={bots} onEnlist={enlistBot} onDelete={deleteBot} />
      <YourBotArmy armyBots={armyBots} onRelease={releaseBot} />
    </div>
  );
}

export default App;
