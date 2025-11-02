const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good morning, art lover!";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon, art lover!";
} else {
  greeting.textContent = "Good evening, art lover!";
}
