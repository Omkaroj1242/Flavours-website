import './App.css';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import Racipes from './Components/Racipes';
import Menu from './Components/Menu';
import FixedImages from './Components/FixedImages';
import AboutUs2 from './Components/AboutUs2';
import Footer from './Components/Footer';
import CopyRight from './Components/CopyRight';
import Menu2 from './Components/Menu2';
import Cards from './Components/Cards';
import { Applications } from './Components/Applications';
import Categories from './Components/Categories';


function App() {


  return (

    <>
      {/* <Navbar/>
      <AboutUs/>
      <Applications/>
      <Racipes/>
      <Menu/>
      <Cards/>
      <Menu2/>
      <FixedImages/>
      <AboutUs2/>
      <Footer/>
      <CopyRight/> */}

      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<AboutUs/>, <Applications/>, <Racipes/>, <Menu/>, <Cards/>, 
          <Menu2/>, <FixedImages/>, <AboutUs2/>]} />
          <Route path='/categories' element={<Categories/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
      <CopyRight/>

      {/* <ScriptTag isHydrating={true} type="text/javascript" src="script.js" /> */}
      {/* <Script/> */}
    </>
  );

  

}

export default App;
