# OSRS Desktop App

Made with MERN and Electron. This app allows the user to search the Old School RuneScape Wiki and Hi-Score API for an item or player. The frontend can optionally be compiled to a windows nsis type installer using the package "electron-builder".

# IMPORTANT

The functionality of this is currently being reworked to move away from mongoDB and has no guarantee that it will work in its current state.

# Download

```
git clone https://github.com/daniel-j-crewe/osrs_desktop_app.git
```

# Install And Setup

**Note:** This is currently setup for local testing, although it could be changed to being externally hosted.

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
