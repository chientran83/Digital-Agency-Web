import React from 'react';
import './App.css';
import Home from './pages/Home'
import {DefaultLayout} from './layouts/DefaultLayout';

function App() {
  return (
    <div>
      <DefaultLayout>
        <Home/>
      </DefaultLayout>
    </div>
  );
}

export default App;
