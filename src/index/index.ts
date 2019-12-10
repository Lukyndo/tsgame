import "../utils/utils.css";
import "./index.css";
import {buildElement} from '../utils/html';
import {timeoutPromise} from "../utils/utils_module";
import {playArea} from "./play_area";

async function main() {
  console.log('hello sd game!');


  console.table(playArea);

  playArea.forEach(row => {
    row.forEach(item => {
      const box = buildElement('div', {class: 'box'});
      document.body.appendChild(box);
    });
    const br = buildElement('br');
    document.body.appendChild(br);
  });





  const container = buildElement('div', {
    style: 'border: 1px solid red',
    class: 'block big',
    textContent: 'Click me!',
    handlers: {
      onclick: () => container.textContent = 'Clicked!',
    },
  });


  const nestedContainer = buildElement('div', {
    style: 'border: 1px solid red',
    class: 'block',
    textContent: 'Click me!',
    handlers: {
      onclick: () => container.textContent = 'Clicked!',
      onmouseover: () => {
        container.style.width = '200px';
        container.style.height = '200px';
      },
    },
  });


  // container.appendChild(nestedContainer);
  //
  // document.body.appendChild(container);
  // container.remove();
  // document.body.appendChild(container);


  window.addEventListener('keypress', function (e) {
    // you can use "if" blocks to distinguish between pressed keys:
    if (e.key === 'a') {

    }
    else if(e.key === 'b') {

    }
    // you can use "switch" to distinguish between pressed keys:
    switch (e.key) {
      case 'a':
        console.log(`user pressed A key`);
        break;
      case 'b':
        console.log(`user pressed B key`);
        break;
    }
  })

}


main();
