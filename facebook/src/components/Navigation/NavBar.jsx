import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SearchIcon from '@mui/icons-material/Search';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded';

export default function NavBar() {
  return (
    <div className="navBarBox">
        <div className="navBarLeft">
            <div className="logo">
                <FacebookRoundedIcon className='FbIcon'/>
            </div>
            <div className="searchBarBox">
                <SearchIcon className='serchIcon'/>
                <input type="text" placeholder='Search Facebook'className="searchInput" />
            </div>
        </div>
        <div className="navBarCenter">
            <div className="pages">
                <HomeRoundedIcon/>
                <VideoLibraryIcon/>
                <StoreRoundedIcon/>
                <PeopleAltRoundedIcon/>
                <VideogameAssetRoundedIcon/>
            </div>
        </div>
        <div className="navBarRight"></div>
    </div>
  )
}
