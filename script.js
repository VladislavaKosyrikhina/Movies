var number = + prompt ('Сколько фильмов вы смотрели?', '');

if (number == null && number.length >= 50){
    return;
}
if (number <= 10){
    prompt ('Просмотрено довольно мало фильмов');
}
if (number > 10 && number < 30){
    prompt ('Вы классический кинозритель');
}
if (number >= 30){
    prompt ('Вы киноман');
}