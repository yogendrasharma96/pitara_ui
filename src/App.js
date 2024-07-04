import { Outlet } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './modules/header/ResponsiveAppBar';
import SideBar from './modules/header/SideBar';
import { useSelector } from 'react-redux';


function App() {
  const showSideBar = useSelector((store) => store.sideBar);
  return (

    <div>
        <ResponsiveAppBar />
        <div className='flex'>
         <SideBar/>
         {/* <div
          className={`transition-all duration-300 flex-grow ${
            showSideBar ? 'ml-0' : 'ml-0'
          }`}
        > */}
          <div className="p-4">
            <Outlet />
          </div>
          </div>
        {/* </div> */}
    </div>
  );
}

export default App;
