import { NavLink } from "react-router-dom"
import './style.css'
export const Menu=()=>{
    return(<div>
        <div className="menu">
            <NavLink to='/'>Home</NavLink>
          <NavLink to='/addNewFood'>Add New Food</NavLink>
            <NavLink to='/addNewSet'>Add New Set</NavLink>
        </div>
    </div>)
}