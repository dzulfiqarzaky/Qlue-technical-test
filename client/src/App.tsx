
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Profiles from './views/Profiles';
import AddNewProfile from './views/AddNewProfile';
import Profile from './views/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/create" element={<AddNewProfile />} />
      </Routes>
    </div>
  );
}

export default App;
