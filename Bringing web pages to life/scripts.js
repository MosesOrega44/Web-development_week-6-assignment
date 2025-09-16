// Part 2: Functions with parameters, return values, and scope
function randomColor() {
    const colors = ["red", "blue", "green", "purple", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  function setTextColor(element, color) {
    element.style.color = color;
  }
  
  // Local vs global scope demo
  let globalCount = 0;
  
  function increaseCount() {
    let localMessage = "Button clicked!";
    globalCount++;
    console.log(localMessage, "Total:", globalCount);
  }
  
  // Part 3: Combine JS + CSS animations
  const box = document.getElementById("box");
  const animateBtn = document.getElementById("animateBtn");
  const colorBtn = document.getElementById("colorBtn");
  const colorText = document.getElementById("colorText");
  
  animateBtn.addEventListener("click", () => {
    box.classList.toggle("animate"); // Toggle CSS animation class
    increaseCount();
  });
  
  colorBtn.addEventListener("click", () => {
    const newColor = randomColor();
    setTextColor(colorText, newColor);
    colorText.classList.add("animate");
  
    // Stop animation after 2s
    setTimeout(() => colorText.classList.remove("animate"), 2000);
  });
  