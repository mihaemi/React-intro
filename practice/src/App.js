import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import { Component } from 'react';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Greet name='A' heroName='Batman'> 
          <p>This is children props</p>
        </Greet>
        <Greet name='B' heroName='Superman'> 
          <button>Action</button>
        </Greet>
        <Greet name='C' heroName='Wonder Woman' />
        
        <Welcome name='A' heroName='Batman' />
        <Welcome name='B' heroName='Superman' />
        <Welcome name='C' heroName='Wonder Woman' />
        {/*<Hello/>*/}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Greet/>
//       <Greet/>
//       <Greet/>
//       {/*<Welcome/>*/}
//       {/*<Hello/>*/}
//     </div>
//   );
// }

export default App;
