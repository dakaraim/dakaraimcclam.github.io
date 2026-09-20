const exercise1Link = document.getElementById("exercise1-link");
const exercise2Link = document.getElementById("exercise2-link");

const exercise1 = document.getElementById("exercise1");
const exercise2 = document.getElementById("exercise2");

const daysMissedInput = document.getElementById("days-missed");
const attendanceResult = document.getElementById("attendance-result");

const semesterResult = document.getElementById("semester-result");

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const arrow = document.getElementById("arrow");


const calculateAttendance = () => {
    const daysMissed = Number(daysMissedInput.value);
    const totalClasses = 25;
    const attendanceWorth = 7;

   if(daysMissedInput.value === "") {
    attendanceResult.innerHTML = "";
    return;
   } 

   if(daysMissed < 0 || daysMissed > 25){
    attendanceResult.innerHTML =
    "<p> Please enter a number between 0 and 25.</p>";
    return;
   }
   const pointsLost = (daysMissed / totalClasses) * attendanceWorth;
let message = "";

if (daysMissed === 0){

    message = "Perfect Attendance!"
   
}else if (daysMissed <= 3){
    message  = "Good attandance! Keep showing up."

} else if (daysMissed <= 7) {
    
    message = " Those missed classes are adding up"

 } else {
    message = "You have have missed way to many classes"
}
   attendanceResult.innerHTML =
        `<p>You will lose ${pointsLost.toFixed(2)}% of your grade.</p>
         <p>${message}</p>`;
      
};

const showSemesterCounter = () => {
    const today= new Date ();

    const lastDay = new Date(today.getFullYear(), 11, 4);

    const difference = lastDay - today;
    
    let daysLeft = Math.ceil(difference/(1000 * 60 * 60 *24));

    if (daysLeft < 0){
        daysLeft = 0;
    }

    let message = "";

    if (daysLeft > 100) {
        message = "Don't start counting down yet.";

    }else if (daysLeft > 50){
        message = "The semester is is dwendeling"

    }else if (daysLeft > 25){
        message =" The end of the semester is getting close!"

    }else if (daysLeft > 0){
        message = "Almost there!"
        
    }else{
        message = "The Semester is Over!!!"
    }
    semesterResult.innerHTML =
        `<p>You have ${daysLeft} days left in the semester</p>
         <p>${message}</p>`;


};


const showExercise1 = () => {
    exercise1.classList.remove("hidden");
    exercise2.classList.add("hidden");

};


const showExercise2 = () => {

    exercise1.classList.add("hidden");
    exercise2.classList.remove("hidden");

    showSemesterCounter();

};

const toggleMenu = () => {

    mainNav.classList.toggle("show");

    if (mainNav.classList.contains("show")) {
        arrow.innerHTML = "▲";
    } else {
        arrow.innerHTML = "▼";
    }

};

exercise1Link.onclick = showExercise1;
exercise2Link.onclick = showExercise2;
daysMissedInput.onchange = calculateAttendance;
menuToggle.onclick = toggleMenu;