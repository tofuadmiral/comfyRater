
// cat object definition

var myCat = {
    "name": "catting", 
    "species:": "cat",
    "favFood": "catfood"
}

myCat.favFood // gives you the value "catfood"


// now exploring arrays
var myFavColors = ["blue", "black", "white"];

myFavColors[1]; // access "black"

// now array of objects THIS IS A JSON
var thePets = [
    {
        "name": "catting", 
        "species:": "cat",              // JSON is javascript object notation  
        "favFood": "catfood"            // so we have arrays nested in objects & vice versa
    },
    {
        "name": "dogting", 
        "species:": "dog",
        "favFood": "chocochipcookies"
    }
]


// now we can find specific animal in array's fav food
thePets[1].favFood;


// Now, let's learn about AJAX
