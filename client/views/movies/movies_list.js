/**
 * Created by merzoug on 10/2/14.
 */
var votes = [
    {score:7},{score:8},{score:7},{score:6},{score:3},{score:9},{score:8},{score:7},{score:8},{score:7},{score:7},{score:5},{score:5},{score:5},{score:5},{score:7},{score:9}
];
var moviesData = [
    {
        title: 'Jurassic Park',
        releaseYear : 1993,
        director: 'Steven Spielberg',
        excerpt: 'Jurassic Park is a 1993 American science fiction adventure film directed by Steven Spielberg. It is the first installment of the Jurassic Park franchise. It is based on the 1990 novel of the same name by Michael Crichton, with a screenplay written by Crichton and David Koepp. The film centers on the fictional Isla Nublar, an islet located off Costa Rica\'s Pacific Coast, where a billionaire philanthropist and a small team of genetic scientists have created a wildlife park of cloned dinosaurs.',
        trailerUrl : 'https://www.youtube.com/watch?v=lc0UehYemQA',
        posterUrl : "jurassic-park.jpg",
        contentRate: "+R"
    },
    {
        title: 'The Terminator',
        releaseYear : 1984,
        director: 'James Cameron',
        excerpt: 'The Terminator is a 1984 American science fiction action film directed by James Cameron, written by Cameron and the film\'s producer Gale Anne Hurd, and starring Arnold Schwarzenegger, Michael Biehn, Linda Hamilton and Paul Winfield. It was filmed in Los Angeles, produced by Hemdale Film Corporation and distributed by Orion Pictures. Schwarzenegger plays the Terminator, a cyborg assassin sent back in time from the year 2029 to 1984 to kill Sarah Connor, played by Hamilton. Biehn plays Kyle Reese, a soldier from the future sent back in time to protect Sarah.',
        trailerUrl : 'https://www.youtube.com/watch?v=c4Jo8QoOTQ4',
        posterUrl : "terminator.jpg",
        contentRate: "+R"
    }
];

Template.moviesList.helpers({
    movies: moviesData,
    userRatingScore: function(){
        var scoreSum = 0;
        for(var i=0; i<votes.length; i++)
            scoreSum += votes[i].score;
        var number = scoreSum / votes.length;
        console.log("[MONCINE]" + scoreSum);
        return Math.round(number * 100) / 100;
    }
});

