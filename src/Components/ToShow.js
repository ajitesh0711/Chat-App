import React from 'react'
import './notlog.css'
import {  useNavigate } from 'react-router-dom'

function ToShow() {
    const Navigate=useNavigate();
    return (
        <>
        
      <div className="d-flex flex-row  " style={{
       height:'40rem',
       justifyContent:'center',
       alignItems:'center',
       width:'100vw'
      }}>
        

        <div className="logcontent"style={{height:'32em',minWidth:'23em', width:'65%'}}>
        <img className='image1 image1-contain' src="https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80" alt =""/>
          <div className='d-flex flex-column'>
          <div className='d-flex flex-row headeer'style={{ justifyContent:'space-evenly',alignItems:'center'}}>
            <div className='d-flex flex-row'style={{ justifyContent:'space-evenly',alignItems:'center'}}>
            <div  style={{paddingLeft:'2px',color:'#007bfe',fontSize:'30px'}}>
              Ahoy!
              </div>
              <div className='pl-1' style={{color:'green',fontSize:'30px'}}>
              <div className='hand'>
              👋
                </div>
                </div>
  
              <div className='px-3' style={{color:'white',fontSize:'1.2em'}}>
   
              Welcome to A2R HUB
              </div>
             
          </div>
          </div>
          <div className='d-flex flex-row' style={{height:'23rem' }}>
          {/* <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank">
  <div class="card">
    <div class="wrapper">
      <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" class="cover-image" />
    </div>
    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title" />
    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" class="character" />
  </div>
</a>

<a href="https://www.mythrillfiction.com/force-mage" alt="Mythrill" target="_blank">
  <div class="card">
    <div class="wrapper">
      <img src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg" class="cover-image" />
    </div>
    <img src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png" class="title" />
    <img src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp" class="character" />
  </div>
</a> */}
 
          </div>
          <div className='d-flex flex-column pt-2 mb-4'style={{justifyContent:'center',alignItems:'center'}}>
            <div>
            <button className='btn btn-dark header btttn' style={{width:'max-content',   fontSize:'1.2em'}} onClick={()=>{Navigate('/')}}>Please Login To Continue  ----></button>   
  
            </div>
            
  
          </div>
  
          </div>
          
  
  
        </div>
  
        
      </div>
      </>
    )
  }

export default ToShow