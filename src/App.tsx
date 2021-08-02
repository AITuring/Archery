import React from 'react';
import Button from './components/Button';
import './App.less';
import { ButtonSize, ButtonType } from './components/Button/type';

function App() {

  return (
    <div className="App">
      <Button
        btnType={ButtonType.Primary}
        size={ButtonSize.Large}
      >Click me!</Button>
      <Button
        btnType={ButtonType.Primary}
        size={ButtonSize.Large}
        disabled
      >Click me!</Button>
      <Button
        btnType={ButtonType.Link}
        size={ButtonSize.Large}
        href="http://www.google.com"
      >Google</Button>
    </div>
  );
}

export default App
