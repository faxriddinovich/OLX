// import './App.css';
import { Route,Routes } from 'react-router-dom';
import Advetising from './Components/Advertising/Advetising';
import Favourite from './Components/Favourites/Favourite';
import Help from './Components/Help center/Help';
import Home from './Components/Home/Home';
import Bundle from './Components/Landing Bundles/Bundle';
import Apps from './Components/Mobile Apps/Apps';
import Account from './Components/My Account/Account';
import Support from './Components/Support/Support'
import './style/style.scss'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/myaccount' element={<Account/>}/>
        <Route path='/apps' element={<Apps/>}/>
        <Route path='/hc' element={<Support/>}/>
        <Route path='/favourite' element={<Favourite/>}/>
        <Route path='/advertising' element={<Advetising/>}/>
        <Route path='/hc/articles' element={<Help/>}/>
        <Route path='landingbundles' element={<Bundle/>}/>
      </Routes>
    </div>
  );
}

export default App;
