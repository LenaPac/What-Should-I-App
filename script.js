// Declare your arrays here
let longAnimes = [
"MHA.jpg", 
"OP.jpg",
"HXH.jpg",
];
// photos are 600x1000
let midAnimes = [
"FB.jpg",
"Hori.jpg",
"FF.jpg",];

let shortAnimes = [
"MDD.jpg",
"ASF.jpg",
"S8.jpg",
];

let list;

// Make sure to declare your HTML elements as variables! 
let imageContainer=document.querySelector("#imageContainer");
// Submit Button 
let submitButton = document.querySelector("button");


submitButton.addEventListener("click", function() {
let span= document.querySelector(".span").value;



if (span === "Long")
{
   imageContainer.innerHTML="";
        list = longAnimes;
        imageContainer.innerHTML="";
        console.log(span);
}
else if (span==="Mid")

{imageContainer.innerHTML="";
    list=midAnimes; 
    imageContainer.innerHTML="";


}
else if(span==="Short")

{imageContainer.innerHTML="";
    list=shortAnimes;
    imageContainer.innerHTML="";
}




let anime;
list.forEach(function(a){
    anime = document.createElement("img");
    anime.src = a;
    imageContainer.appendChild(anime);

});

});






// 3. Selecting the imageUrls array, create a forEach loop.
