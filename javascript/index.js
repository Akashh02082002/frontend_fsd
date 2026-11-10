let tamil = Number(prompt("Enter tamil mark: "));
let english = Number(prompt("Enter english mark: "));
let maths = Number(prompt("Enter maths mark: "));
let science = Number(prompt("Enter science mark: "));
let ss = Number(prompt("Enter ss mark: "));

let total = tamil + english + maths + science + ss;
let avg = (total / 500) * 100;

let flag = true;

if (isNaN(tamil) || !isFinite(tamil) ||isNaN(english) || !isFinite(english) || isNaN(maths) || !isFinite(maths) || isNaN(science) || !isFinite(science) || isNaN(ss) || !isFinite(ss)) {
    alert("Please enter numbers only");
}

if (tamil <= 0 || tamil >= 100 ||english <= 0 || english >= 100 ||maths <= 0 || maths >= 100 ||science <= 0 || science >= 100 ||ss <= 0 || ss >= 100) {
    console.log("Marks must be between 0 to 100");
    flag = false;
}

if (flag) {
    if (avg<=90 || avg>100) {
        console.log("Grade A:Excellent");
    } else if(avg<=80 || avg>90) {
        console.log("Grade B:Very good");
    }
    else if(avg<=70 || avg>80){
        console.log("grade C:good")
    }
    else if(avg<=50 && avg<70){
        console.log("Grade D:Average")
    }
    else{
        console.log("No Grade")
    }
    console.log("Total:", total);
    console.log("Average:", avg);
}