import React from 'react';
import './App.css';
import { Menu } from './component/Menu';
import { MyRouter } from './router/MyRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
        <MyRouter/>
      </BrowserRouter>
    </div>
  );
}
export default App;
