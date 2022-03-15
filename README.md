# Welcome to Floorplan!

## Why?

> The app framework that no one asked for but that we all deserve.

- not Batman

We are going to say some more stuff here eventually.

## Getting Started

### Pre-reqs

You will need Node 16 running and available on your computer.
You should know a bit about React and web developement.

### Get code setup locally

Open up your favorite terminal and got to where you put all of those projects that never get finished.
Then run:

```sh
git clone git@github.com:floorplan/floorplan.git
```

Then change directories to that new folder and install all the dependencies

> All your dependencies are belong to us.

```sh
cd floorplan
npm i
```

### Get firebase going

Now most dev environmenst would be ready to go but first we need to setup a firebase console app so we can do all the things.

> TODO: add url to youtube video that we are making right now.

Once you have it all setup get the service account prive key json file and add it to the root of the project and call the file `firebaseAccess.json`. This file is ignored by git and we will use it to create the .env file.

Then run in your not so favorite terminal.

```sh
npm run setup:env
```

> make sure to change the reference in the .firebaserc from `floorplan-codesagas` to you project_id found in the `firbaseAccess.json`

#### firebase function

This part is necesary to get it going but your app may not need this added complexity.
This section allows us to run updates to our db or create hooks to them from other sources.
You can do this through the app via remix api routes and you can make cron jobs in netlify functions.
But I feel this is easier cuz it is already authed and it used the firebase emulator.

```sh
npm run setup:firebase
```

### Now we can start our engines

so go to a terminal you are indiferrent to and run
> We might need to login into firebase cls `npm run firebase login`

```sh
npm run firebase:dev
```

This will start the firebase emulators!
Wow local dev database and auth with out internet yo!
Go to localhost:4000 to see the admin app portal for all this cool emulator stuff.

Then in you most beloved terminal run

```sh
npm run dev
```

> if you want to connect to you prod data and dev on the actual live firebase client feel free to run `npm run start` but that is not recomended.

go to localhost 3000

oh then you can watch this video that we did right now to learn how some of the data works and how to access the blog engine.

### Now let us delpoy

first sign into netlify with your github account and link this repo


after delpoy you can make sure to add the url and update the db to have looser rules.
