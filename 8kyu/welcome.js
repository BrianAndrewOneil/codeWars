//Take a parameter 'language', with a type String, and returns a greeting - if you have it in your database. 
//It should default to English if the language is not in the database, or in the event of an invalid input.

const greet = language => welcomes[language]||'Welcome'

const welcomes =
{ 
    "english": "Welcome"
    , "czech": "Vitejte"
    , "danish": "Velkomst"
    , "dutch": "Welkom"
    , "estonian": "Tere tulemast"
    , "finnish": "Tervetuloa"
    , "flemish": "Welgekomen"
    , "french": "Bienvenue"
    , "german": "Willkommen"
    , "irish": "Failte"
    , "italian": "Benvenuto"
    , "latvian": "Gaidits"
    , "lithuanian": "Laukiamas"
    , "polish": "Witamy"
    , "spanish": "Bienvenido"
    , "swedish": "Valkommen"
    , "welsh": "Croeso"
}

console.log(greet('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
console.log(greet('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
console.log(greet('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");