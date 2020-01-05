import React from 'react';
import Create from '../public/create.svg';
import Upload from '../public/upload.svg';
import Search from '../public/search.svg';


function Header() {
  return (
    <div className="header">
        <span className='input-container'>
            <span>
                <img src={Search} className='search-icon' alt='Search'/>
            </span>
            <input  type='text' placeholder='Search your photos' className='input-box' />
        </span>
      <span>
          <img src={Create} className='header-icons' alt='create' />
      </span>
      <span className='header__icon-name'>Create</span>
      <span>
          <img src={Upload} className='header-icons' alt='upload'/>
      </span>
      <span className='header__icon-name'>Upload</span>
    </div>
  );
}

export default Header;