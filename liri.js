require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
let Spotify = require("node-spotify-api");
let axios = require("axios");
let moment = require("moment");
let fs = require("fs");

let command = process.argv[2];
let search = process.argv.slice(3).join(" ");

let searchBand = function (search) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function (response) {
            for (var i = 0; i < 5; i++) {
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

let searchSpotify = function (search) {
    if (!search) {
        search = "The Sign: Ace of Base";
    }
    sportify.search({
        type: 'artist,track',
        query: search
    }, function (err, response) {
        if (err) {
            return console.log("Error occurred: " + err);
        }
        let resultSong = "\nArtist(s): " + response.tracks.items[0].artists[0].name +
            "\nSong name: " + response.tracks.items[0].name +
            "\nAlbum name: " + response.tracks.items[0].album.name +
            "\nPreview link: " + response.tracks.items[0].external_urls.spotify;
        console.log(resultSong);
    });
}


let searchMovie = function () {
    if (!search) {
        search = "Mr. Nobody"
    }
    axios.get("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy")
        .then(function (response) {
            let resultMovie = "\nTitle: " + response.data.Title +
                "\nYear: " + response.data.Year +
                "\nRating IMDB: " + response.data.Ratings[0].Value +
                "\nCountry: " + response.data.Country +
                "\nLanguage: " + response.data.Language +
                "\nPlot: " + response.data.Plot +
                "\nActors: " + reponse.data.Actors;
            console.log(resultMovie);
        })
        .catch(function (error) {
            console.log(error);
        });
}

let doWhatItSays = function () {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
            }
        let dataArray = data.split(",");
        spotifySearch(dataArray[1])
    })                                                                         
}

    
