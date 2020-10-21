//STEP 1
var movies = ["Captain America", "Iron Man", "Hulk", "Spiderman", "Black Panther"];
window.console.log(movies[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "Captain America";
movies[1] = "Iron Man";
movies[2] = "Hulk";
movies[3] = "Spiderman";
movies[4] = "Black Panther";
window.console.log(movies[0]);

//STEP 3
var movies = new Array(5);
movies[0] = "Captain America";
movies[1] = "Iron Man";
movies[2] = "Hulk";
movies[3] = "Spiderman";
movies[4] = "Black Panther";
movies.splice(2, 0, "Avengers");
window.console.log(movies.length);

//STEP 4
var movies = new Array(5);
movies[0] = "Captain America";
movies[1] = "Iron Man";
movies[2] = "Hulk";
movies[3] = "Spiderman";
movies[4] = "Black Panther";
delete movies[0];
window.console.log(movies);

//STEP 5
movies = [];
movies[0] = "Captain America";
movies[1] = "Iron Man";
movies[2] = "Hulk";
movies[3] = "Spiderman";
movies[4] = "Black Panther";
movies[5] = "Doctor Strange";
movies[6] = "Thor";
for (var i= 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}

//STEP 6
movies = [];
movies[0] = "Captain America";
movies[1] = "Iron Man";
movies[2] = "Hulk";
movies[3] = "Spiderman";
movies[4] = "Black Panther";
movies[5] = "Doctor Strange";
movies[6] = "Thor";
for (var i in movies) {
    window.console.log(movies[i]);
}

//STEP 7
movies = [];
movies[0] = "Captain America";
movies[1] = "Iron Man";
movies[2] = "Hulk";
movies[3] = "Spiderman";
movies[4] = "Black Panther";
movies[5] = "Doctor Strange";
movies[6] = "Thor";
movies.sort();
for (var i in movies) {
    window.console.log(movies[i]);
}

//STEP 8
movies = [];
movies[0] = "Captain America";
movies[1] = "Iron Man";
movies[2] = "Ant Man";
movies[3] = "Spiderman";
movies[4] = "Black Panther";
movies[5] = "Doctor Strange";
movies[6] = "Thor";

leastFavMovies = [];
leastFavMovies[0]="The Room";
leastFavMovies[1]="Maniac";
leastFavMovies[2]="Hostel"

window.console.log("Movies I like: \n\n");
for (var movie in movies) {
    window.console.log(movies[movie]);
}

window.console.log("\nMovies I regret watching:\n\n");
for (var movie in leastFavMovies) {
        window.console.log(leastFavMovies[movie]);
}
window.console.log("\n");

//STEP 9
movies = [];
movies[0] = "Captain America";
movies[1] = "Iron Man";
movies[2] = "Ant Man";
movies[3] = "Spiderman";
movies[4] = "Black Panther";
movies[5] = "Doctor Strange";
movies[6] = "Thor";

leastFavMovies = [];
leastFavMovies[0]="The Room";
leastFavMovies[1]="Maniac";
leastFavMovies[2]="Hostel"

var allMovies = movies.concat(leastFavMovies);
allMovies.reverse();
for (var i = 0; i < allMovies.length; i++) {
    window.console.log(allMovies[i]);
}

//STEP 10
movies = [];
movies[0] = "Captain America";
movies[1] = "Iron Man";
movies[2] = "Ant Man";
movies[3] = "Spiderman";
movies[4] = "Black Panther";
movies[5] = "Doctor Strange";
movies[6] = "Thor";

leastFavMovies = [];
leastFavMovies[0]="The Room";
leastFavMovies[1]="Maniac";
leastFavMovies[2]="Hostel"

var allMovies = movies.concat(leastFavMovies);
window.console.log(allMovies.pop());
