import _ from 'lodash';
import './webpack.css';
import WebpackImg from './wpimg.png';
import Data from './data.xml';
import Note from './data.csv';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myImg = new Image();
  myImg.src = WebpackImg;

  element.appendChild(myImg);

  console.log(Data);
  console.log(Note)

  return element;
};

document.body.appendChild(component());
