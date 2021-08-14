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
      <Button size="large">Large</Button>
      <Button size="small">Small</Button>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="default">Default</Button>
      <Button type="link" href="http://www.google.com">Google</Button>
      <Button type="link" disabled href="http://www.google.com">Google</Button>
    </div>);
}

export default App
