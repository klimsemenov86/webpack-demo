import _ from 'lodash';
import styles from './style.scss';
// import './style.scss';
import Img from './image.png';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add(styles.hello);
  
    const myImg = new Image();
    myImg.src = Img;

    // element.appendChild(myImg);

    return element;
  }
  
  document.body.appendChild(component());