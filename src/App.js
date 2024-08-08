import { Outlet } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './modules/header/ResponsiveAppBar';
import SideBar from './modules/header/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { cancelSideBar } from './modules/redux/sideBarSlice';


function App() {
  const showSideBar = useSelector((store) => store.sideBar);
  const dispatch=useDispatch();
  return (

    <div className='relative'>
      {showSideBar && (
        <>
          <div className='absolute max-h-screen z-50'>
            <SideBar />
          </div>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={()=>dispatch(cancelSideBar())}></div>
        </>
      )}
      <ResponsiveAppBar />
      <div className={`${showSideBar ? 'pointer-events-none' : ''}`}>
        <div className="mx-10 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
