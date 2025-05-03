import { useState } from 'react';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import Record from './components/Record';
import RecordList from './components/RecordList';

function App() {
  const [currentTab, setCurrentTab] = useState('mining');

  return (
    <div>
      <Navbar></Navbar>
      <nav>
        <button onClick={() => setCurrentTab('UserForm')}>UserForm</button>
        <button onClick={() => setCurrentTab('Record')}>Record</button>
        <button onClick={() => setCurrentTab('RecordList')}>Record List</button>          
      </nav>

      <div>
        {currentTab === 'UserForm' && <UserForm />}
        {currentTab === 'Record' && <Record />}
        {currentTab === 'RecordList' && <RecordList />}
      </div>
    </div>
  );
}

export default App;
