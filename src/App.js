
import './App.scss';
import Header from './components/Header/Header';
import { Outlet, Link } from 'react-router-dom';
const App =() =>{

  return ( 
    <div className="app-container">
      <div className='header-container'>
      <Header/>
      </div>
      <div className='sidenav-container'>

      </div>
<div className='app-content'></div>

 {/* Note */}
 <Outlet></Outlet> 

  {/* <div> 
    <button>
      <Link to ="/users">
      Goto Userpage
      </Link>
      </button>
    <button>
    <Link to ="/admins">
    Goto Adminpage
      </Link></button>
  </div> */}
    </div>

  );
}

export default App;
