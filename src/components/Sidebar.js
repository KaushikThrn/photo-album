
import React, { useState, useEffect } from 'react';
import Album from '../public/album-icon.svg'
import Photo from '../public/photo-icon.svg'
import Share from '../public/share-icon.svg'

function Sidebar() {

  return (
    <div className="sidebar">
      <span>
          <img src={Photo} className='sidebar-icons'/>
      </span>
      <span className='sidebar__icon-name'>Photos</span>
      <span>
          <img src={Album} className='sidebar-icons' />
      </span>
      <span className='sidebar__icon-name'>Albums</span>
      <span>
          <img src={Share} className='sidebar-icons' />
      </span>
      <span className='sidebar__icon-name'>Share</span>
    </div>
  );
}

export default Sidebar;