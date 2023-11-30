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
    console.debug('done 2');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <button onClick={create}></button>
    </div>
  );
}

export default App;
