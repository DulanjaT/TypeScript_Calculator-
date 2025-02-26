
let currentInput: string = "0"; 
let previousInput: string = ""; 
let selectedOperation: string | null = null; 
let shouldResetCurrentInput = false;



const operatorButtonClick = (operation: string): void => {
    if (currentInput === "") return;
  
    
    if (previousInput !== "" && selectedOperation !== null) {
      calculateResult();
    }
  
    
    previousInput = currentInput;
    selectedOperation = operation;
  
    
    shouldResetCurrentInput = true;
  };
  
  

const updateDisplay = (): void => {

    const displayElement = document.getElementById("display") as HTMLInputElement;
    displayElement.value = currentInput;


}

const handleNumberClick = (num: string): void => {
    if (num === "." && currentInput.includes(".")) return;
  
    
    if (shouldResetCurrentInput || currentInput === "0") {
      currentInput = num;
      shouldResetCurrentInput = false; 
    } else {
      currentInput += num;
    }
  
    updateDisplay();
  };
  
  
    

  const calculateResult = (): void => {
    if (previousInput === "" || currentInput === "" || selectedOperation === null) return;
  
    
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result: number;
  
    
    switch (selectedOperation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : NaN; 
        break;
      default:
        return;
    }
  
    
    currentInput = result.toString();
    previousInput = "";
    selectedOperation = null;
  
    updateDisplay();
  };
  


  const clearCalculator = (): void => {
    currentInput = "0";
    previousInput = "";
    selectedOperation = null;
    updateDisplay();
  };

  document.addEventListener("DOMContentLoaded", () => {
    
    const buttons = document.querySelectorAll("#calculator button");
  
    buttons.forEach((button) => {
      const buttonText = (button as HTMLButtonElement).innerText;
  
      
      if (!isNaN(parseFloat(buttonText)) || buttonText === ".") {
        button.addEventListener("click", () => handleNumberClick(buttonText));
      }
  
      
      else if (["+", "-", "*", "/"].includes(buttonText)) {
        button.addEventListener("click", () => operatorButtonClick(buttonText));
      }
  
      
      else if (buttonText === "=") {
        button.addEventListener("click", calculateResult);
      }
  
      
      else if (buttonText === "C") {
        button.addEventListener("click", clearCalculator);
      }
    });
  });
  
  














