
import './App.css';
import CookieStorage from './components/Cookie';
import LocalStorage from './components/LocalStorage';
import SessionStorage from './components/SessionStorage';
import IndexedDB from './components/Indexeddb';

function App() {
  return (
    <div className="App">
      <CookieStorage />
      <LocalStorage />
      <SessionStorage />
      <IndexedDB />
    </div>
  );
}

export default App;
