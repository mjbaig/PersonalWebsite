interface Person{
    firstname:string;
    lastname:string;
}

function helloWorld(person:Person){
    return "Hello "+person.firstname+" "+person.lastname+". You're an idiot";
}

var user = {firstname:"Taco", lastname:"Charlton"};

console.log(helloWorld(user));