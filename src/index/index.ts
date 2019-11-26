import "../utils/utils.css";
import "./index.css";
import {buildElement} from '../utils/html';

async function main() {
  console.log('hello sd game!');

  const buttonNode = buildElement('div', {
    textContent: 'Click me!',
    handlers: {
      onclick: () => buttonNode.textContent = 'Clicked!',
      onmouseover: () => buttonNode.style.width = '200px',
    },
  });


  document.body.appendChild(buttonNode);

}



main();
