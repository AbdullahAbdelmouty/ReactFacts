import './App.css';
import MainContant from './components/MainContant';
import Nav from './components/Nav';
import {useState} from 'react'

function App() {
  const [toggle,setToggle] = useState(true);
  function toggleMode(){
    setToggle(prevMode=>!prevMode);
  }
  return (
    <div className="App">
      <Nav 
      mode={toggle}
      changeMode={toggleMode}
      />
      <MainContant mode={toggle}/>
    </div>
  );
}

export default App;
