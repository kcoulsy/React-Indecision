import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
//
// class OldSyntax {
//   constructor(){
//     this.name = 'kristian';
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting(){
//     return `Hi my name is ${this.name}`;
//   }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());
//
// //----------------
//
// class NewSyntax {
//   name = 'me';
//   getGreeting = () => {
//     return `Hi my name is ${this.name}`;
//   }
// }
// const newSyntax = new NewSyntax();
// const newGG = newSyntax.getGreeting;
// console.log(newGG());
// console.log(newSyntax);
