import React from 'react';
import Button from './components/Button';
import './App.less';
import { ButtonSize, ButtonType } from './components/Button/type';

function App() {

  return (
    <div className="app">
      <Button>Click me!</Button>
      <Button
        size={ButtonSize.Large}
      >Click me!</Button>
      <Button
        size={ButtonSize.Small}
      >Click me!</Button>
      <Button
        btnType={ButtonType.Primary}
      >Click me!</Button>
      <Button
        btnType={ButtonType.Link}
        href="http://www.google.com"
      >Google</Button>
    </div>
  );
}

export default App
