import React from 'react';
import hero from '../assets/images/Hero-site-screenshot.gif'
import noteTaker from '../assets/images/Note-Taker-screenshot.png'
import workday from '../assets/images/workday-scheduler.gif'
import techblog from '../assets/images/Tech-Blog-screenshot.png'

export default function Project() {
  return (
  <div>
    <div className='cards'><h1>Click Links Below To View Projects</h1>
      <div className='row'>
        <div className='col-md-6'>
      {/* <section> */}
        <a href="https://github.com/Marlowchu/Hero-Site" target="_blank" title="click to go to Github repo"><h1>Hero-Scope</h1></a>
        <a href='https://marlowchu.github.io/Hero-Site/index.html' target='_blank' title="click to open new tab to site"><img src={hero} alt="a gif of Hero site"/></a>
        </div>
      
        <div className='col-md-6'>
          {/* <section> */}
          <a href="https://github.com/ymunye1/Note-Taker" target="_blank" title="click to go to Github repo"><h1>Note Taker</h1></a>
          <a href='https://note-taker-022022.herokuapp.com/' target='_blank' title="click to open new tab to site"><img src={noteTaker} alt="Screenshot of note taker"/></a>
      {/* </section> */}
         </div>
      </div>
      <div className='row'>
          <div className='col-md-6'>
      {/* <section> */}
          <a href="https://github.com/ymunye1/Work-Day-Scheduler" target="_blank" title="click to go to Github repo"><h1>Work Scheduler</h1></a>
          <a href='https://ymunye1.github.io/Work-Day-Scheduler/' target='_blank' title="click to open new tab to site"><img src={workday} alt="gif of work day scheduler"/></a>
      {/* </section> */}
          </div>
          <div className='col-md-6'>
      {/* <section> */}
      <a href="https://github.com/ymunye1/Tech-Blogs" target="_blank" title="click to go to Github repo"><h1>Tech Blog</h1></a>
      <a href='https://tech-blog-022022.herokuapp.com/' target='_blank' title="click to open new tab to site"><img src={techblog} alt="screenshot of tech-blog"/></a>
          </div>
      </div>
    </div>
    
  
  </div>    
   
  
     

    
  );
}
