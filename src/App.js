import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Seg1 from './Components/Component1/Seg1';
import Seg2 from './Components/Component2/Seg2';
import Seg3 from './Components/Component3/Seg3';
import Seg4 from './Components/Component4/Seg4.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Seg1 />
      <Seg2/>
      <Seg3/>
      <Seg4/>
    </div>
  );
}

export default App;
