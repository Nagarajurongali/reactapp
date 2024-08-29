import React from 'react'
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
function Header() {
  return (
    <div className='header'>
      <ul>
        <Link to='/dashboard' ><li><DashboardIcon /> Dashboard</li></Link>
        <Link to='/about' ><li>About</li></Link>
        <Link to='/services'><li>Services</li></Link>
        <Link to='/reactapp'><li>logout</li></Link>
        
      </ul>
    </div>
  )
}

export default Header