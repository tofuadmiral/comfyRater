// SPECIFIY our new variable for making requests
var ourRequest = new XMLHttpRequest();

// can specify arguments for the open, in our case we want to GET data, not POST data
ourRequest.open('GET', "https://learnwebcode.github.io/json-example/animals-1.json") 
// SECOND argument is the URL that we want to get from i.e. our data

// now do something with our data

ourRequest.onload = function (){
    // this is the function we want to perform when we load our stuff
    console.log(ourRequest.responseText);
}

ourRequest.send(); // this should send our AJAX request, specified by the request variable at the top
