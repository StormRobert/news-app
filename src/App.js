
import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';

function App() {
  const [category, setCategory ] = useState("")
  return (
    <div className="App">
    <Navbar setCategory={setCategory}/>
    <NewsBoard category={category}/>
    </div>
  );
}

export default App;
