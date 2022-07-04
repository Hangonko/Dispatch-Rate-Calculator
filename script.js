let typeInfo = document.querySelector('.type');
let button = document.querySelector('.btn');
let finResult = document.querySelector('.result');

button.addEventListener('click', calculate);

function calculate() {
    let result = Math.round(typeInfo.value * 1.5);
    finResult.textContent = `$${result}`
}

document.body.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        let result = Math.round(typeInfo.value * 1.5);
        finResult.textContent = `$${result}` 
    }
  });
function copyFunction() {
    const copyText = document.getElementById("myInput").textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    // k2button.innerText = "Text copied";
      textArea.remove();
  }
  document.getElementById('k2button').addEventListener('click', copyFunction);