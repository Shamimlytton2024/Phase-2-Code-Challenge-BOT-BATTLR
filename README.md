# Bot Battlr

Bot Battlr is a React application that allows users to browse a collection of bots, enlist bots into their army, release bots from their army, and delete bots permanently.

## Features

- View all available bots fetched from a local JSON server.
- Enlist bots into your army by clicking on them.
- Release bots from your army.
- Delete bots permanently from both the backend and frontend.

## Setup Instructions

1. Clone the repository and navigate to the project directory:

```bash
cd bot-battlr
```

2. Install dependencies:

```bash
npm install
```

3. Create a `db.json` file in the project root with the following structure:

```json
{
  "bots": [
    {
      "id": 101,
      "name": "wHz-93",
      "health": 94,
      "damage": 20,
      "armor": 63,
      "bot_class": "Support",
      "catchphrase": "1010010101001101100011000111101",
      "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
      "created_at": "2018-10-02T19:55:10.800Z",
      "updated_at": "2018-10-02T19:55:10.800Z"
    },
    {
      "id": 102,
      "name": "RyM-66",
      "health": 86,
      "damage": 36,
      "armor": 77,
      "bot_class": "Medic",
      "catchphrase": "0110011100000100011110100110011000011001",
      "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
      "created_at": "2018-10-02T19:55:10.827Z",
      "updated_at": "2018-10-02T19:55:10.827Z"
    }
  ]
}
```

4. Start the JSON server:

```bash
npx json-server --watch db.json --port 8001
```

5. Start the React app:

```bash
npm start
```

6. Open your browser and navigate to `http://localhost:3000` to use the app.

## Usage

- Click "Enlist" on a bot card to add it to your army.
- Click "Release" on a bot card in your army to remove it.
- Click the red "x" button on a bot card to delete it permanently.

## Notes

- Bots can only be enlisted once.
- Deleting a bot removes it from both the backend and frontend.
