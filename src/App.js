import logo from './logo.svg';
import './App.scss';
import Mycomponent from './components/Mycomponent';
import React from 'react';

class App extends React.Component{

  render(){
    return(
      <div> hello world!
      <Mycomponent></Mycomponent>
    </div>
    )
  }
}
// function App() {
//   return (
//     <div> hello world!
//       <Mycomponent></Mycomponent>
//     </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Xin Chao Viet Nam
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
//   );
// }

export default App;
