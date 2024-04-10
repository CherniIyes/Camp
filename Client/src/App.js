import './App.css';
import Home from './Components/Home.jsx';
import { useState } from 'react';
import "./Components/nav.css"
import test from "../src/pics/logoo.png";
import logo2 from "../src/pics/logo2.png";

import AddCard from './Components/AddCard.jsx';
function App() {
  const [view, setView] = useState('home')

  const switchView = (option) => {
    setView(option)
  }

  return (
    <div className="App">
      <div className='stic'>
        <div className='Header'>
          <div className='logoo'>
            <img className='picc' src={logo2} alt="Logo" />
          </div>
          <div>
            <div className='nav'>
              <p onClick={() => switchView('home')} className='lii'>Home</p>
              {/* <p onClick={() => switchView('posts')} className='lii'>Add</p> */}
            </div>
          </div>
        </div>
      </div>
      {view === 'home' && <Home />}
      {view === 'posts' && <AddCard />}
    </div>
  );
}

export default App;