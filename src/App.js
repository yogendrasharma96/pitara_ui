import './App.css';
import AddProduct from './modules/body/AddProduct';
import ResponsiveAppBar from './modules/header/ResponsiveAppBar';

function App() {
  return (
      <div>
        <ResponsiveAppBar></ResponsiveAppBar>
        <AddProduct></AddProduct>
      </div>
   
  );
}

export default App;
