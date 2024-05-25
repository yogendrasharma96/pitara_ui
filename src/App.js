import { Provider } from 'react-redux';
import './App.css';
import AddProduct from './modules/body/AddProduct';
import ResponsiveAppBar from './modules/header/ResponsiveAppBar';
import appStore from './modules/redux/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <ResponsiveAppBar></ResponsiveAppBar>
        <AddProduct></AddProduct>
      </div>
      </Provider>
  );
}

export default App;
