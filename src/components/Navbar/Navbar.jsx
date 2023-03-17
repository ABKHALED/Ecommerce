import "./nacbar.css"
import { NavLink  , Link} from "react-router-dom"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useEffect, useState , useContext } from "react";
import { Context } from "../../Provider";

function Navbar() {
    const [bur , setBur] = useState(false)
    const {favedta , car} = useContext(Context)
    const [lin , setLin] = useState(0)
    const [carLin , setCarLin] = useState(0)
    useEffect(() =>{
      const length = favedta.length
      setLin(length)
    }, [favedta] )
    useEffect(() =>{
      const length = car.length
      setCarLin(length)
    }, [car] )
  return (
    <nav className="nav">
      <div className="container">
        <Link to='/' className="logo">
            <h1>Z</h1>
            <p>Shop</p>
        </Link>
        <div className={`inks ${bur ? 'active' : ''}`}>
        <div className="midel">
            <ul className="first">
                <li>
                    <NavLink
                    onClick={() =>setBur(false)}
                    className={({ isActive }) =>
                    isActive ? 'active' : ''
                  }
                     to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink
                    onClick={() =>setBur(false)}
                    className={({ isActive }) =>
                    isActive ? 'active' : ''
                  }
                    to="shop">Shop</NavLink>
                </li>
                <li>
                    <NavLink
                    onClick={() =>setBur(false)}
                    className={({ isActive }) =>
                    isActive ? 'active' : ''
                  }
                     to="about">About</NavLink>
                </li>
                <li>
                    <NavLink
                    onClick={() =>setBur(false)}
                    className={({ isActive }) =>
                    isActive ? 'active' : ''
                  }
                     to="contact">Contact</NavLink>
                </li>
            </ul>
        </div>
        <div className="right">
            <ul>
           
                <li className="fav">
                <span>{carLin}</span>
                    <NavLink
                    onClick={() =>setBur(false)}
                    className={({ isActive }) =>
                    isActive ? 'active' : ''
                  }
                     to="cart">
                        <ShoppingCartOutlinedIcon />
                    </NavLink>
                </li>
                <li className="fav">
                  <span>{lin}</span>
                    <NavLink 
                    onClick={() =>setBur(false)}
                    className={({ isActive }) =>
                    isActive ? 'active' : ''
                  }
                    to="favorit">
                        <FavoriteBorderOutlinedIcon />
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    onClick={() =>setBur(false)}
                    className={({ isActive }) =>
                    isActive ? 'active' : ''
                  }
                     to='location'>
                        <LocationOnOutlinedIcon />
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink 
                    onClick={() =>setBur(false)}
                    className={({ isActive }) =>
                    isActive ? 'active' : ''
                  }
                    to="user">
                        <PersonOutlineOutlinedIcon />
                    </NavLink>
                </li> */}
            </ul>
        </div>
        </div>
        <div className="tag" onClick={() => setBur(prev => !prev)}>
            {bur ? <CloseOutlinedIcon  /> : <MenuOutlinedIcon /> }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
