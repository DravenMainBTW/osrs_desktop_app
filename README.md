# OSRS Desktop App

Made with MERN and Electron. This app allows the user to search the Old School RuneScape Wiki and Hi-Score API for an item or player. It can optionally be exported to a windows program using the package "electron-builder".

# Download

```
git clone https://github.com/daniel-j-crewe/osrs_desktop_app.git
```

# Pre Install Notes

**Note 1:** This is currently setup for local testing, although it could be quite easily changed to being externally hosted.

**Note 2:** This install assumes you are using yarn, if you are instead using NPM look up their verion of the commands.

# Install And Setup

This app current does not have offline functionality for storing data meaning it requires both the frontend and backend to be running at the same time in order to function correctly.

## Frontend Setup

```
cd app
yarn install
```

To start in dev

```bash
yarn start
# or via electron
yarn start-el
```

To build and create electron app

```
yarn build
```

Once built you can then install the app from `dist/OSRS App Setup 0.1.0.exe`

## Backend Setup

```
cd server
yarn install
```

To start in dev

```
yarn dev
```

To build

```
yarn build
```

To start after being built

```
yarn start
```

# Limitations / Issues

With the Hi-Scores it currently isn't displaying the kill count of bosses, this could quite easily be changed by updating the `get.js` endpoint for `hi_scores`. Also I feel as though the display for the Hi-Scores could be improved, maybe adding icons for the skills / bosses.

Running the `start-el` command in the fronend also opens the browser.
