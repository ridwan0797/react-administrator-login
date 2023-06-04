import { useNavigate } from "react-router";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/userActions';

const Layout = ({ children }) => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');

    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                <svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <svg id="toggleSidebarMobileClose" className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="text-xl font-bold flex items-center lg:ml-2.5">
                {/* <img src="https://demo.themesberg.com/windster/images/logo.svg" className="h-6 mr-2" alt="Windster Logo" /> */}
                <div className="bg-indigo-600 w-4 h-4"></div>
                <span className="self-center whitespace-nowrap ml-2">Dromeda</span>
              </div>
              <form action="#" method="GET" className="hidden lg:block lg:pl-32">
                <label htmlFor="topbar-search" className="sr-only">Search</label>
                <div className="mt-1 relative lg:w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input type="text" name="email" id="topbar-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5" placeholder="Search" />
                </div>
              </form>
            </div>
            <div className="flex items-center">
              <button id="toggleSidebarMobileSearch" type="button" className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg">
                <span className="sr-only">Search</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
              <div class="flex flex-row px-2 mx-3">
                  <div class="w-auto h-auto rounded-full">
                      <img class="w-8 h-8 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src="https://images.pexels.com/photos/1855582/pexels-photo-1855582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  </div>
                  <div class="flex flex-col mb-2 ml-4 mt-1">
                      <div class="text-gray-600 text-sm font-semibold"> { user?.user?.firstName || 'Nina'} {user?.user?.lastName || 'Nina'}</div>
                  </div>
              </div>
              <div className="hidden cursor-pointer sm:inline-flex ml-5 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2 text-center items-center mr-3" onClick={handleLogout}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M18 15h-5v2h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-5v2h5v2zm-7-3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm4.71-7.71L12 2.58l-.71-.71a1 1 0 0 0-1.42 0l-6 6a1 1 0 0 0 0 1.41l6 6a1 1 0 0 0 1.42 0l.71-.71L8.41 12l6.3-6.29a1 1 0 0 0-1.41-1.42z"/>
                </svg>
                Logout
              </div>
            </div>
          </div>
        </div>
      </nav>
    
      <div className="flex overflow-hidden bg-white pt-16">
        <SideBar />

        <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop" />

        <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">{children}</div>
      </div>
    </div>
  )
}

export default Layout;
