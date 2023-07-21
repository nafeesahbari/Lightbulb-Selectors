// Write your code here
const div1 = document.querySelector(".lightbulb1");
const div2 = document.querySelector(".lightbulb2");
const div3 = document.querySelector(".lightbulb3");
const h3 = document.querySelector("#subtitle");
let count = 0;

div1.addEventListener("click", function() {
    count++;
    subtitle.innerHTML = `You've clicked the lights ${count} times`;
    this.classList.toggle("active");
})

div2.addEventListener("click", function() {
    count++;
    subtitle.innerHTML = `You've clicked the lights ${count} times`;
    this.classList.toggle("active");
})

div3.addEventListener("click", function() {
    count++;
    subtitle.innerHTML = `You've clicked the lights ${count} times`;
    this.classList.toggle("active");
})

h3.addEventListener("click", function() {
    count++;
    subtitle.innerHTML = `You've clicked the lights ${count} times`;
    this.classList.toggle("active");
})