import "./styles/reset.css";
import "./styles/styles.css";
import { functionName } from "./xFuncModTemplate.js";
import { sampleButton } from "./sampleButton.js";

function component() {
  const element = document.createElement("div");
  element.innerHTML = "Here's a dynamic element, rendered by the index.js";
  return element;
}

document.body.appendChild(component());

functionName();
sampleButton();
