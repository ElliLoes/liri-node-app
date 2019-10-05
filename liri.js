require("dotenv").config();
var keys = require("./keys.js");
let Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
let axios = require("axios");
let moment = require("moment");
let fs = require("fs");

let command = process.argv[2];
let search = process.argv.slice(3).join(" ");

function searchBand (search) {
    axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp")
        .then(function (response) {
            if (response.data.length === 0) {
                console.log("There are no upcoming shows! Sorry.");
                return;
            }
            for (var i = 0; i < Math.min(response.data.length, 5); i++) {
                let resultConcert = "\nVenue Name: " + response.data[i].venue.name +
                    "\nVenue Location: " + response.data[i].venue.city +
                    "\nDate of the event: " + moment(response.data[i].datetime).format("MM/DD/YYYY");
                console.log(resultConcert);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

function searchSpotify (search) {
    if (!search) {
        search = "The Sign: Ace of Base";
    }
    spotify.search({
        type: 'artist,track',
        query: search
    }, function (err, response) {
        if (err) {
            return console.log("Error occurred: " + err);
        }
        if (response.tracks.items.length ===0) {
            console.log("Sorry, there is no result. Try again!");
            return;
        }
        let resultSong = "\nArtist(s): " + response.tracks.items[0].artists[0].name +
            "\nSong name: " + response.tracks.items[0].name +
            "\nAlbum name: " + response.tracks.items[0].album.name +
            "\nPreview link: " + response.tracks.items[0].external_urls.spotify;
        console.log(resultSong);
    });
}


function searchMovie (search) {
    if (!search) {
        search = "Mr. Nobody"
    }
    axios.get("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&tomatoes=true&apikey=trilogy")
        .then(function (response) {
            let resultMovie = "\nTitle: " + response.data.Title +
                "\nYear: " + response.data.Year +
                "\nRating IMDB: " + response.data.Ratings[0].Value +

                // Rotten Tomatoes Rating will always be N/A as the Rotten Tomatoes data was removed to comply with a legal request from Fandango (who owns Rotten Tomatoes).

                "\nRotten Tomatoes Rating: " + response.data.tomatoRating +
                "\nCountry: " + response.data.Country +
                "\nLanguage: " + response.data.Language +
                "\nPlot: " + response.data.Plot +
                "\nActors: " + response.data.Actors;
            console.log(resultMovie);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function doWhatItSays () {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        let dataArray = data.split(",");
        searchSpotify(dataArray[1])
    })
}

switch (command) {
    case "concert-this":
        searchBand(search);
        break;
    case "spotify-this-song":
        searchSpotify(search);
        break;
    case "movie-this":
        searchMovie(search);
        break;
    case "do-what-it-says":
        doWhatItSays();
}




