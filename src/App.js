import React from 'react';
import './App.css';
import {ProductList} from './components/ProductList';
import {ProductModal} from './modals/ProductModal';


function App() {
  return (
    <div className="App">
      <ProductList></ProductList>
      {/* <ProductModal></ProductModal> */}
    </div>
  );
}

export default App;
