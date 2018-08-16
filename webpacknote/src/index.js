import _ from 'lodash';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  element.innerHTML = _.join(['htttttttello', 'webpack'], ' ')
  btn.innerHTML = 'click me';
  btn.onclick = printMe;
  element.appendChild(btn)
  return element;
}
document.body.appendChild(component());
if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('accept the updated print');
    printMe()
  })
}