let numberOfFilms;

function start () {
    numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?');
    }

}

start ();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
    for ( let i = 0; i < 2; i++) {
        var a = prompt ('какой последний фильм вы посмотрели?', '');
        var b = +prompt ('на сколько вы его оцениваете?', '');
    
        if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies [a] = b;
        console.log ('done');
        } else {
        console.log ('error');
        i--;
        }
    }
}

rememberMyFilms ();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log ('Вы посмотрели мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log ('Вы типичный киноман');
    } else {
        console.log ('Вы большой киноман');
    }
}

detectPersonalLevel ();

function showByDB (){
    if (personalMovieDB.privat == false) {
        console.log (personalMovieDB);
    } else {
        console.log ('Error');
    }
}

showByDB ();

function writeYourGenres () {
    for (i = 1; i < 4; i++) {
        personalMovieDB.genres [i-1] = prompt (`Ваш любимый жанр ${i}`);
    }
}

writeYourGenres ();
console.log (personalMovieDB);