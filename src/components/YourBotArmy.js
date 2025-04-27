import React from 'react';

function YourBotArmy({ armyBots, onRelease }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {armyBots.length === 0 ? (
        <p>No bots enlisted yet.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {armyBots.map(bot => (
            <div key={bot.id} style={{ border: '1px solid green', margin: '10px', padding: '10px', width: '200px' }}>
              <img src={bot.avatar_url} alt={bot.name} style={{ width: '100%' }} />
              <h3>{bot.name}</h3>
              <p>{bot.catchphrase}</p>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Class: {bot.bot_class}</p>
              <button onClick={() => onRelease(bot.id)}>Release</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;
