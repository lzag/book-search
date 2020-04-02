import ReactDom from 'react-dom';
import React from 'react';
import Header from './js/components/Header';

alert('Hey this is loaded');
ReactDom.render(<Header />, document.getElementById('form'));
console.log('executed');
