import { Link } from 'react-router-dom';
//import { useAuthLogin } from "../Context/AuthProvider";
import imageLogo from '../assets/koala_tree.png';
import '../StyleComponents/NavBar.scss';


export const NavBar:React.FC = () => {
  /*const { switchLogin, usrEmail, toggle, eraseAll } = useAuthLogin();

  const handleChange = () => {
    toggle()
    eraseAll()
  };*/
  return(
    <nav className="bg-gray-800" id="mytweeks--navtag">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

          </div>
          <div className="flex flex-1 items-center justify-around sm:items-stretch sm:justify-start">

            <div className="div--img">
              <img
                className="img--tag"
                src={imageLogo} alt="logo_koala"
              />
            </div>

            <div className="hidden sm:ml-10 sm:block">
              <div className="flex space-x-8">

                <li className="bg-gray-900 text-white px-3 py-2 rounded-md text-lg font-medium" aria-current="page">
                  <Link className="tag--link" to='/' >
                    Dashboard
                  </Link>
                </li>
                <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                  <Link className="tag--link" to='/carousel' >
                    Carousel
                  </Link>
                </li>
                <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                  <Link className="tag--link" to='/animation' >
                    Animation
                  </Link>
                </li>
                <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                  <Link className="tag--link" to='/about' >
                    About
                  </Link>
                </li>

              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="sr-only">View notifications</span>

              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>

            <div className="relative ml-3">
              <div>
                <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                
                </button>
              </div>

              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">

                <li className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">
                  <Link className="tag--link" to='/profile' >
                    Your Profile
                  </Link>
                </li>
                <li className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">
                  <Link className="tag--link" to='/settings' >
                    Settings
                  </Link>
                </li>
                <li className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">
                  <Link className="tag--link" to='/signout' >
                    Sign out
                  </Link>
                </li>
                <li className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">
                  <Link className="tag--link" to='/' >
                    Login
                  </Link>
                </li>
                <li className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">
                  <Link className="tag--link" to='/carousel' >
                    Carousel
                  </Link>
                </li>
                <li className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">
                  <Link className="tag--link" to='/animation' >
                    Animation
                  </Link>
                </li>
                <li className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-3">
                  <Link className="tag--link" to='/about' >
                    About
                  </Link>
                </li>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">

          <li className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
            <Link className="tag--link" to='/' >
              Login
            </Link>
          </li>
          <li className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
            <Link className="tag--link" to='/carousel' >
              Carousel
            </Link>
          </li>
          <li className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
            <Link className="tag--link" to='/animation' >
              Animation
            </Link>
          </li>
          <li className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
            <Link className="tag--link" to='/about' >
              About
            </Link>
          </li>

        </div>
      </div>
    </nav>
  )
}

        /*<div className="navbar--div">

      <div className="subnavbar">

        <div className="nav--div">
          <img
            className="img--tag"
            width="60px" height="60px"
            src={imageLogo} alt="logo_koala"
          />
        </div>

        <nav className="middlenav--div">
          <li>
            <Link className="tag--link" to='/' >
              Login
            </Link>
          </li>
          <li>
            <Link className="tag--link" to='/carousel' >
              Carousel
            </Link>
          </li>
          <li>
            <Link className="tag--link" to='/animation' >
              Animation
            </Link>
          </li>
          <li>
            <Link className="tag--link" to='/about' >
              About
            </Link>
          </li>
        </nav>

      </div>
    </div>
        {usrEmail ? (
          <span 
            style={{
              margin: "0px 20px",
              padding: "10px",
              fontFamily: "Consolas",
              background: "#3b3c47",
              border: "1px dashed grey",
              borderRadius: "5px",
              color: "whitesmoke"
            }}
          >
            {usrEmail}
          </span>

          ) : (
          
          <span
            style={{
              margin: "0px 20px",
              padding: "10px",
              background: "red",
              borderRadius: "10px",
              color: "white"
            }}> &#8614; </span>
          )}

        {switchLogin ? (
          <Link
            to="/"
            style={{
              marginRight: "20px",
              width: "50px", 
              height: "50px", 
              position: "relative", 
              display: "flex", 
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Consolas",
              fontSize: "0.8rem",
              background: "lightblue",
              textDecoration: "none",
              color: "black", 
              border: "1px solid grey",
              borderRadius: "50%"
            }}

          >
            Login
          </Link>

          ) : (
          
          <Link
            to="/"
            onClick={() => handleChange()}
            style={{
              marginRight: "20px",
              padding: "2px 4px",
              width: "40px", 
              height: "40px",  
              display: "flex", 
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Consolas",
              fontSize: "0.9rem",
              textDecoration: "none",
              color: "#31dddd",
              background: "dimgrey",
              boxShadow: "0px 0px 0px lightblue",
              borderRadius: "50%",
            }}

          >
            <GiPowerButton size={16} />
          </Link>
        )}*/