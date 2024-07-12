import logo from './logo.svg';
import './App.css';
import AdminPanel from './component/AdminPanel';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './component/pages/Dashboard';
import Successfull from './component/pages/Successfull'; 
import FailedList from './component/pages/Failedlist';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <AdminPanel>
      <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/successfull" element={<Successfull />} />
          <Route path="/failedlist" element={<FailedList />} />
      </Routes>
      </AdminPanel>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
