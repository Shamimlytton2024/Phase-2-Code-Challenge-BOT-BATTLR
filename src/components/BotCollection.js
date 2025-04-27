import React from 'react';

function BotCollection({ bots, onEnlist, onDelete }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {bots.map(bot => (
          <div key={bot.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px', width: '200px' }}>
            <img src={bot.avatar_url} alt={bot.name} style={{ width: '100%' }} />
            <h3>{bot.name}</h3>
            <p>{bot.catchphrase}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <button onClick={() => onEnlist(bot)}>Enlist</button>
            <button onClick={() => onDelete(bot.id)} style={{ marginLeft: '10px', color: 'red' }}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
