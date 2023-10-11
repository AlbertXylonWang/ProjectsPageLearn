
import './App.css';
import React from 'react';
import {Typography, Button, Box, TextField} from '@mui/material';

import { useState } from 'react';
export default App;
function App() {
  return (
    <>
    <Projects />
    </>
  );
}

function Projects(){
  return(
    <>
   <div className = "boxLayout">
      <Typography variant = "h1" color = "white" marginLeft = "20px">Projects</Typography>
      <div>
          <ProjectCard projectName={"Project 1"}/>
          <ProjectCard projectName={"Project 2"}/>
          <ProjectCard projectName={"Project 3"}/>
      </div>
   </div> 
   
   </>
  );
}

const JoinLeaveButton = ({ isJoined, onClick }) => {
  return (
    <Button
      variant="filled"
      style={{ 
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
        height: '100%', 
        bordercolor: 'white',
        backgroundColor: isJoined ? 'green' : '#282c34',
        position: 'relative',
        zIndex: 1
      }}
      onClick={onClick}
      
    >
      {isJoined ? 'Leave' : 'Join'}
    </Button>
  );
};


function ProjectCard({projectName}){
  const [isJoined, setIsJoined] = useState(false);
  
  const handleToggleJoinLeave = () => {
    setIsJoined((prevIsJoined) => !prevIsJoined);
  };
  const sectionStyle = {
    flex: 1,
    p: 2,
    borderColor: 'white',
    border: 1,
    color: 'white',
    backgroundColor: isJoined ? 'green' : ''
  }
  return(
    <>
      <Box display="flex">
        <Box {...sectionStyle} flex = {0.5}>
          {projectName}
        </Box>
        <Box {...sectionStyle } flex = {0.5}>
          <p>User List</p>
        </Box>
        <Box {...sectionStyle}>
          <HWSet {...sectionStyle} borderColor =  {'white'} border = {1} color = {'white'}  isJoined = {isJoined}  HWSet = {'HWSet1'}/>
          <HWSet {...sectionStyle} isJoined = {isJoined} HWSet = {'HWSet2'}/>
        </Box>
        <Box flex = {0.3} p = {2} borderColor =  {'white'} border = {1} color = {'white'} backgroundColor = {isJoined ? 'green' : ''}>
         <JoinLeaveButton isJoined={isJoined} onClick={handleToggleJoinLeave} />
        </Box>
    </Box>
  </>
  )
}
function HWSet({isJoined, HWSet}){
  const sectionStyle = {
    flex: 1,
    p: 2,
    borderColor: 'white',
    border: 0,
    backgroundColor: isJoined ? 'green' : '#282c34',
    color: 'white'
  }

  const [count, setCount] = useState(0);

  const [inputValue, setInputValue] = useState('');

  const checkIn = () => {
    const integerValue = parseInt(inputValue);
    if(!Number.isInteger(integerValue) || count + integerValue < 0){

      return
    }
    if((count + integerValue) > 100){
      setCount(100);
    }else{
      setCount(count + integerValue);
    }
    
  };

  const checkOut = () => {
    const integerValue = parseInt(inputValue);
    if(!Number.isInteger(integerValue) || count - integerValue > 100){
      
      return
    }
    if((count - integerValue) < 0){
      setCount(0);
    }else{
      setCount(count - integerValue);
    }
    
    
  };



  return(
    <>
    <Box display="flex" color='white'>
      <Box {...sectionStyle}>
        {HWSet}: {count}/100
      </Box>
      <Box {...sectionStyle}>
        
        <TextField 
          variant = 'outlined' 
          label ='Enter qty' 
          onChange={(e) => setInputValue(e.target.value)} 
          className = 'textFieldClass'
          style = {{backgroundColor: 'white', borderColor: 'white', color: 'white'}}
         
        
          >

        </TextField>
        
      </Box>
      <Box {...sectionStyle}>
        <Button variant = 'outlined' style={{ 
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
        height: '100%', 
        bordercolor: 'white',
        backgroundColor: isJoined ? 'green' : '#282c34',
        position: 'relative',
        zIndex: 1,
        
      }} onClick = {checkIn}>
          Check In
        </Button>
      </Box>
      <Box {...sectionStyle}>
      <Button variant = 'outlined' style={{ 
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
        height: '100%', 
        bordercolor: 'white',
        backgroundColor: isJoined ? 'green' : '#282c34',
        position: 'relative',
        zIndex: 1,
        
      }}  onClick={checkOut}>
          Check Out
        </Button>
      </Box>
    </Box>
    </>



  )
}
