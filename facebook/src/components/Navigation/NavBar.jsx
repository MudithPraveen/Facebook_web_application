import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SearchIcon from '@mui/icons-material/Search';

export default function NavBar() {
  return (
    <div className="navBarBox">
        <div className="navBarLeft">
            <div className="logo">
                <FacebookRoundedIcon className='FbIcon'/>
            </div>
            <div className="searchBarBox">
                <SearchIcon className='serchIcon'/>
            </div>
        </div>
        <div className="navBarCenter"></div>
        <div className="navBarRight"></div>
    </div>
  )
}
