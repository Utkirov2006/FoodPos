import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className="sidebar d-flex flex-xl-column flex-row">
                <Link to="/" className='menu'><i class="bi bi-shop menu-icon"></i></Link>
                <NavLink to="/" className={({isActive}) => isActive ? "menu_active" : "menu"}><i class="bi bi-house menu-icon"></i></NavLink>
                <NavLink to="/country" className={({isActive}) => isActive ? "menu_active":"menu"}><i class="bi bi-globe"></i></NavLink>
                <NavLink to="/statistic" className={({isActive}) => isActive ? "menu_active":"menu"}><i class="bi bi-pie-chart menu-icon"></i></NavLink>
                <NavLink to="/logout" className={({isActive}) => isActive ? "menu_active":"menu"}><i class="bi bi-box-arrow-right menu-icon"></i></NavLink>
    </div>
  )
}
