var todo = ["learn js"];
var input = prompt("what do you want to do?");
while(input !== "quit"){
    if(input === "list"){
    listtodo();} 
    else if(input === "new"){
    addnew();}   
    var input = prompt("what do you want to do?");
}
console.log("Okay, you quit the app but do not quit on your todos:)");

function listtodo(){
    console.log("^-^-^-^-^-^-^-^-^");
        todo.forEach(function(item , i){
        console.log(i + ": " + item);
        console.log("^-^-^-^-^-^-^-^-^");
        })
}
function addnew(){
    var newtodo = prompt("what's new?");
        todo.push(newtodo);
        console.log("To do added");
}