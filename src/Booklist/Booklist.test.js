import React from 'react';
import ReactDOM from 'react-dom';
import Booklist from './Booklist';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Booklist />, div);
  ReactDOM.unmountComponentAtNode(div);
});