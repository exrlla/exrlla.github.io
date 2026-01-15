import React from 'react';
import './HomeSidebar.css';

function HomeSidebar() {
  return (
    <div className="home-sidebar">
      <div className="sidebar-content">
        <img src="https://substackcdn.com/image/fetch/$s_!96Iy!,w_80,h_80,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F24b2e370-81a9-4d5f-97f0-13da21b7ea74_1000x1000.png" alt="Ellie Popoca" className="sidebar-logo" />
        <h2 className="sidebar-title">Recent Substack <br/> Publications</h2>
        <p className="sidebar-description"><a href="https://jelliefish.substack.com/" target="_blank" rel="noopener noreferrer">drinking chocolate caliente</a> is my substack page where I write about my experiences on life, technology, and girlhood.</p>
        
        <div className="sidebar-item">
          <img 
            src="https://substackcdn.com/image/fetch/$s_!3_kz!,w_1280,h_720,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F544be2ee-692e-4df3-9c34-0cd727416876_500x380.jpeg" 
            alt="Publication 1" 
            className="sidebar-image"
          />
          <p className="sidebar-caption">the new year goal of mindset shift</p>
          <a href="https://jelliefish.substack.com/p/the-new-year-goal-of-mindset-shift" target="_blank" rel="noopener noreferrer"><button className="sidebar-button">Read More</button></a>
        </div>
        
        <div className="sidebar-item">
          <img 
            src="https://substackcdn.com/image/fetch/$s_!u1Mq!,w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe27e52a0-3a76-4c7a-9682-92a41c4a2cba_480x270.webp" 
            alt="Publication 2" 
            className="sidebar-image"
          />
          <p className="sidebar-caption">Second publication caption</p>
          <button className="sidebar-button">Read More</button>
        </div>
        
        <div className="sidebar-item">
          <img 
            src="https://substackcdn.com/image/fetch/$s_!3WdG!,w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fca5a0630-edcd-4d97-84e4-239a87ff2f2d_3264x2448.jpeg" 
            alt="Publication 3" 
            className="sidebar-image"
          />
          <p className="sidebar-caption">Third publication caption</p>
          <button className="sidebar-button">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default HomeSidebar;
