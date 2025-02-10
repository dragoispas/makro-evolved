import React from 'react';
import './App.css';
import { FlexBox } from './styledComponents';
import LeftMenu from './Components/LeftMenu';
import { Routes, Route } from 'react-router-dom';
import { Dashboard, Diary, Foods, Profile, Trends } from './Components/Pages'


function App() {
  return (
    <FlexBox>
      <LeftMenu />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Diary' element={<Diary />} />
        <Route path='/Foods' element={<Foods />} />
        <Route path='/Trends' element={<Trends />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
      {/* <FlexBox width='100vw' height='70px' align='center' style={{ borderBottom: "1px solid lightgrey", fontSize: "24px", paddingLeft: "30px" }}>Dashboard</FlexBox> */}
    </FlexBox>
  );
}

export default App;
