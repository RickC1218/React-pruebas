import {useEffect, useState} from 'react';
import './App.css';
import List from './components/List';

interface Sub {
  nick: string;
  subMonths: number;
  avatar?: string;
  description?: string;
}

interface AppState{
  subs: Array<Sub>;
  newSubsNumber: number;
}

const INITIAL_STATE= [
  {
    nick: 'Nick',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=Nick',
    description: 'Dapelu hace de moderador para el canal de Twitch de Nick'
  },
  {
    nick: 'sergiogc9',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=sergiogc9'
  }
]

function App() {
  const [subs, setsubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);

  useEffect(() => {
    setsubs(INITIAL_STATE);
  }, [])

  return (
    <div className="App">
      <h1>React App with Typescript</h1>
      <List subs = {subs}/>
    </div>
  )
}

export default App;
