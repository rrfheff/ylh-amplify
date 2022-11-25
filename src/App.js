import { DataStore } from '@aws-amplify/datastore';
import { Post } from './models';
import logo from './logo.svg';
import './App.css';

function App() {
  const create = async () => {
    await DataStore.save(
      new Post({
      "title": "Lorem ipsum dolor sit amet",
      "comments": [],
      "content": "Lorem ipsum dolor sit amet"
    }));
    console.debug('done');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={create}></button>
    </div>
  );
}

export default App;
