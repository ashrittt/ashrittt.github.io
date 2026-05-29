
setTimeout(() => {
  document.getElementById("popup").classList.add("show");
}, 3000);

// On click, show envelopes
document.getElementById("popup").addEventListener("click", () => {
  document.getElementById("envelopes").style.display = "flex";
});

// Toggle envelopes back-to-back
document.querySelectorAll(".envelope").forEach(env => {
  env.addEventListener("click", () => {
    env.classList.toggle("toggle");
  });
});
