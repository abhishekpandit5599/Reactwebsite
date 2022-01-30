import './App.css';
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';

function App() {
  return (
    (window.innerWidth<800)?(<Mobile/>):(<Desktop/>)
  );
}

export default App;
