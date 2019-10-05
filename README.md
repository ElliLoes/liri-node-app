# Liri-Node-Application

## What is it?

Liri Bot is a Language Interpretation and Recognition Interface. It is a command line node application that takes in parameters, for example song or movie names and gives back a curated list of related data. You can view a demonstration of the app here: 

![Demo](liri_demo.gif)

## How is the app organized?

* The main javascript file of the application is liri.js which contains the main code for the functionlaity of the                application.
* The package.json file contains information about the npm packages that were utilized in this application.
* The package-lock.json describes the exact tree that was generated, such that subsequent installs are able to generate         identical trees, regardless of intermediate dependency updates.
* The random.txt file contains a single string of text that serves as the input for one of the application commands.
* The keys.js file contains the API key for the command Song Search on Spotify.

## Which languages, tools and technologies were used to build this app?
* JavaScript
* Node.js
* NPM
* API, Spotify, OMDB, Bands In Town
* Axios
* Moment

## How can you use the app?

1. Clone this repository onto your local machine.

1. Open your terminal/bash window and type `npm i` or `npm install`. All related packages as well as their dependencies will be installed.

1. Create a `.env` file in your root folder by typing touch .env in your terminal/bash window.

1. In the .env file, add the following to it, replacing the values with your API keys (no quotes) once you have them:

```
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
```
  * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in     order to generate a client id and client secret:

  * Step One: Visit https://developer.spotify.com/my-applications/#!/

  * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

  * Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

  * Step Four: On the next screen, scroll down to where you see your client id and client secret

5. After setting everything up, go back to the command terminal/bash window and choose one of the four following commands and type them into your command line, replacing the search targets:

```
node liri.js concert-this <artist/band name here>
node liri.js spotify-this-song '<song name here>'
node liri.js movie-this '<movie name here>'
node liri.js do-what-it-says
```

## My Role in the development of the app?

Developer (Who would have thought?)

You can find a link to the deplyed version of the app here: https://github.com/ElliLoes/liri-node-app.git

Have fun!


