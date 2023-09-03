import React from "react";
import "./Message.css";
import Avatar from '@mui/material/Avatar';
import {deepPurple } from '@mui/material/colors';
import uuid from "react-uuid";

const Message = ({ message ,sender,descname}) => {
  console.log()

  
  return (
  

    <>
    {
      sender===true?    <div className="sender mostly-customized-scrollbar" style={{backgroundColor:'transparent'}}>
      <div className="d-flex flex-row">
        <div className="d-flex" style={{flex:1,backgroundColor:''}}>
        <div className="d-flex flex-column pt-2" style={{backgroundColor:''}} >
        <div className="d-flex row pr-3" style={{backgroundColor:'',color:'white',justifyContent:'flex-end'}}>
          <div className="d-flex flex-column pr-2"style={{color:"#B7B2DC",fontSize:'12px',justifyContent:'flex-end'}}>
          {new Date(message.date.toDate()).toLocaleTimeString('en-IN', {hour: 'numeric', minute: 'numeric', hour12: true})}
          </div>
          <div className="d-flex flex-column" style={{color:"#969696",fontSize:'15px',justifyContent:'flex-end'}}>
        
          You
          </div>
       
       </div>
       

       <div className="d-flex text1" style={{backgroundColor:'#CDD8DD',color:'black',flex:1}} key={uuid()}>{message.inputValue}
      
       
       </div>
      
      
       </div>

        </div>
        <div className="d-flex">

        </div>
    
      <div className="d-flex flex-column" style={{backgroundColor:'',justifyContent:'flex-start',marginLeft:'12px'}}>
      <Avatar sx={{ bgcolor: deepPurple[500], width: 46, height: 46 }}  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1678994453~exp=1678995053~hmac=d2710921626e1f50d2bc064ce0f480e7088c2eb7c1b9e1ad0c281abaf69fe49d"
                        alt="google"/>
      </div>
    </div>
    </div>:    <div className="reciever mostly-customized-scrollbar" style={{backgroundColor:'',marginTop:"1vh"}}>
    <div className="d-flex flex-row">
        <div className="d-flex" style={{flex:1,backgroundColor:''}}>
      
        <div className="d-flex flex-column" style={{backgroundColor:'',justifyContent:'flex-start',marginLeft:'2vh'}}>
          <div className="d-flex d-flex-row">
            <div className="d-flex mr-2" style={{marginLeft:'1vh'}}>

           
          <Avatar sx={{ bgcolor: deepPurple[500], width: 46, height: 46 }}  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1678994453~exp=1678995053~hmac=d2710921626e1f50d2bc064ce0f480e7088c2eb7c1b9e1ad0c281abaf69fe49d"
                        alt="google"/>
                         </div>

    
     
          
        <div className="d-flex flex-column pb-3" style={{backgroundColor:'',color:'white',justifyContent:''}}>
          
          <div className="d-flex flex-row ml">
          <div className="d-flex flex-column mr-2" style={{color:"#969696",fontSize:'15px',justifyContent:''}}>
        
        {descname}
        </div>
          <div className="d-flex flex-column "style={{color:"#B7B2DC",fontSize:'12px',justifyContent:'flex-end'}}>
          {new Date(message.date.toDate()).toLocaleTimeString('en-IN', {hour: 'numeric', minute: 'numeric', hour12: true})}
          </div>
          </div>
      
          <div className="d-flex text2" style={{backgroundColor:'#1F2029',color:'whitesmoke',flex:1}} key={uuid()}>{message.inputValue}
      
       
      </div>
          </div>
          
          </div>
         
       


     
      
      
       </div>

        </div>
        
    
     
    </div>
    
     
    </div>

    }
    </>

  );
};

export default Message;
