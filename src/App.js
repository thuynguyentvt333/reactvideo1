
import './App.scss';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom';
const App =() =>{

  return ( 
    <div className="App-container">
  <Header/>
  <div>
    test link
  </div>
  <div> 
    <button>
      <Link to ="/users">
      Goto Userpage
      </Link>
      </button>
    <button>
    <Link to ="/admins">
    Goto Adminpage
      </Link></button>
  </div>
    </div>

  );
}

export default App;
