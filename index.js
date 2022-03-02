
let courseEl = document.getElementById("input-el")
let buttonEl = document.getElementById("input-btn")
let containerEl = document.getElementById("container-el")
// let scoreEl = document.getElementById("score").value
// let unitEl = document.getElementById("unit") 
let scores = []
let units = []



function renderCourses() {
    let courseLength = courseEl.value
    // console.log(courseLength);
    let listItems = "" 
    
    
    for (let i = 0; i < courseLength; i++) {      
        listItems += "<table id = 'tables'><tr><td><input type='text'></td><td><input type = 'number' id='score'></td><td><input type = 'number' id = 'unit'></td></tr></table>"

     }
    containerEl.innerHTML = "<h2>List of Courses</h2><table><tr><th>Course Code</th><th>Score</th><th>Unit</th></tr></table>" + listItems  +"<button id = 'calc' onClick='handleCalcSubmit()'> CALCULATE </button>"
}

function handleCalcSubmit () {
    let scoreEl = parseInt(document.getElementById("score").value)
    let unitEl = parseInt(document.getElementById("unit").value)
    // let table = document.querySelector("mytab1");
    // let table = document.querySelector("th");  
    let table = document.querySelector("tr");  
console.log(table);

    for (let i = 0; i < table.length; i++){
        if (scoreEl < 40){
            return 0
        }
        else if (scoreEl < 45){
            scoreEl = 1
        }
        else if (scoreEl < 50){
            scoreEl = 2
        }
        else if (scoreEl <60){
            scoreEl = 3
        }
        else if (scoreEl < 70){
            scoreEl = 4
        }
        else{
            scoreEl = 5
        }
        console.log(scoreEl[i]);
        console.log(unitEl);
        grade = scoreEl * unitEl
        scores.push(grade)
        units.push(unitEl)
        console.log(scores);
    }
    console.log(scores);
    console.log(units);

 
    let sum = scores.reduce(function(a, b){
        return a + b;
    }, 0)
    let gp = sum/unitEl 

    console.log(gp)
}

let calcEl = document.querySelector("#calc")



console.log('from cacl id', calcEl);

buttonEl.addEventListener("click", function(){
    renderCourses()
})
