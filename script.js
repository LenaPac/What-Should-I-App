// Declare your arrays here
let longAnimes = [
    "https://m.media-amazon.com/images/M/MV5BOGZmYjdjN2UtNjAwZi00YmEyLWFhNTEtNjM1OTc5ODg0MGEyXkEyXkFqcGdeQXVyMTA1NjQyNjkw._V1_.jpg",
"https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
"https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
];

let midAnimes = [
"https://m.media-amazon.com/images/M/MV5BNTYyYmFkMGMtN2YwNi00MDVjLWFmNWUtMTRjYWNhZmY4NGI0XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
"https://m.media-amazon.com/images/M/MV5BZWNiY2IwMGUtYTk1NC00NmE5LWE4NTItYmQyNDJmMGU2MDMwXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
"https://m.media-amazon.com/images/M/MV5BNTdiNTJmMzktZmE2MC00OWUxLWE1MjktMTdhN2Q1OWNlODY1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
];

let shortAnimes = [
"https://m.media-amazon.com/images/M/MV5BMzkyYWY3NTEtYzBkNC00Zjc3LThmY2UtZWU3MTRkMTgwODU5XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
"https://m.media-amazon.com/images/M/MV5BMmIxNWFjYzgtM2NkMy00NTdkLWE4ZTEtMmY3NzU2MjA5MjAxXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
"https://m.media-amazon.com/images/M/MV5BMjdiMTAzZjItMWQ3MS00Y2FiLWFkOTYtZmQ1MTE1YzJjOGRhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
];

let list;

// Make sure to declare your HTML elements as variables! 
let imageContainer=document.querySelector("#imageContainer");
// Submit Button 
let submitButton = document.querySelector("button");


submitButton.addEventListener("click", function() {
let span= document.querySelector(".span").value;

let list;

if (span === "Long")
{
        list = longAnimes;
        console.log(span);
}
else if (span==="Mid")

{list=midAnimes;


}
else if(span==="Short")

{list=shortAnimes;};
console.log(span)

});






// 3. Selecting the imageUrls array, create a forEach loop.
let anime;
list.forEach(function(a){
    anime = document.createElement("img");
    anime.src = a;
    imageContainer.appendChild(anime);

});