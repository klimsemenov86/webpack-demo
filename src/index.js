import _ from 'lodash';
import printMe from './print.js';
import styles from './style.scss';
// import './style.scss';
import Img from './image.png';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add(styles.hello);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
  
    const myImg = new Image();
    myImg.src = Img;

    // element.appendChild(myImg);

    return element;
  }
  
  document.body.appendChild(component());