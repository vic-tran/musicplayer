import React from 'react';
import './sidebar.css';
import SidebarButton from './sidebarButton';
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from 'react-icons/md';

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQFNFgcOGLCiog/profile-displayphoto-shrink_800_800/0/1641408235363?e=1657756800&v=beta&t=amUnpB8550tx4_R_Vuq8C9uz3QxFu9L-KzqmGdt-jhk" 
        className="profile-img" 
        alt="profile"
        />
        <div>
          <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />}/>
          <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />}/> 
          <SidebarButton title="Player" to="/player" icon={<FaPlay />}/>
          <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />}/>
          <SidebarButton title="Library" to="/" icon={<IoLibrary />}/> 
        </div>
        <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />}/>
    </div>
  )
}
