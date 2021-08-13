import React from 'react';
import Button from './components/Button';
import './App.less';

import { ButtonSize, ButtonType } from './components/Button/type';

function App() {
  return (
    <div className="app">
      <Button autoFocus onClick={() => alert(111)}>最普通</Button>
      <Button className="test">Today</Button>
      <Button disabled>disabled</Button>
      <Button size={ButtonSize.Large}>Large</Button>
      <Button size={ButtonSize.Small}>Small</Button>
      <Button btnType={ButtonType.Primary}>Primary</Button>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button btnType={ButtonType.Default}>Default</Button>
      <Button btnType={ButtonType.Link} href="http://www.google.com">Google</Button>
      <Button btnType={ButtonType.Link} disabled href="http://www.google.com">Google</Button>
    </div>);
}

export default App
