const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    starts: function start () {
        personalMovieDB.count = +prompt ('Сколько фильмов вы уже посмотрели?');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt ('Сколько фильмов вы уже посмотрели?');
        }
    
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log ('Вы посмотрели мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log ('Вы типичный киноман');
        } else {
            console.log ('Вы большой киноман');
        }
    },
    toggleLeVisibleMyDB: function () {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
    showByDB: function (){
        if (personalMovieDB.privat == false) {
            console.log (personalMovieDB);
        } else {
            console.log ('Error');
        }
    },
    writeYourGenres: function () {
        for (i = 1; i < 4; i++) {
            let genre = prompt (`Ваш любимый жанр ${i}`);
    
            if ( genre == '' || genre == null) {
                prompt (`Ваш любимый жанр ${i}`);
                i--;
            } else {
                    personalMovieDB.genres [i-1] = genre;
            }
        }
    
        personalMovieDB.genres.forEach ((item, i) => {
            console.log (`Любимый жанр ${i+1} это ${item}`);
        });
        
    }
};


console.log (personalMovieDB);