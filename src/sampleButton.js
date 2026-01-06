//

const sampleButton = () => {
  const sampleButton = document.createElement("button");
  sampleButton.textContent = "Example element with event: Swap colors!";
  sampleButton.setAttribute("id", "sampleButton");

  sampleButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Clicked button");
    sampleButton.classList.toggle("red");
  });

  document.body.appendChild(sampleButton);
};

export { sampleButton };
