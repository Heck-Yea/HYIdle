import { useState } from 'react';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import Record from './components/Record';

function App() {
  const [currentTab, setCurrentTab] = useState('mining');

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentTab('Navbar')}>Navbar</button>
        <button onClick={() => setCurrentTab('UserForm')}>UserForm</button>
        <button onClick={() => setCurrentTab('Record')}>Record</button>      
      </nav>

      <div>
        {currentTab === 'Navbar' && <Navbar />}
        {currentTab === 'UserForm' && <UserForm />}
        {currentTab === 'Record' && <Record />}
      </div>
    </div>
  );
}

export default App;
