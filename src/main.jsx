import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ControlledInputs } from './ControlledInputs.jsx';
import { UseRefEx } from './UseRefEx.jsx';
import AppContext from '../context.jsx';
import Reviews from './reviews/Review.jsx';
import Accordion from './common/accordion/Accordion.jsx';
import accData from './data/accordion-data.js';
import Tab from './common/tabs/Tab.jsx';
import Carousel from './common/carousel/Carousel.jsx';
import GroceryBud from './examples/groceryBud/GroceryBud.jsx';
import Navbar from './common/navbar/Navbar.jsx';
import MenuComp from './common/menu/MenuComp.jsx';
import CarouselTest from './examples/slideEx/CarouselTest.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='main'>
    <Navbar />
    <div className='container'>
      <AppContext>
        <Carousel />
        <Tab />
        <ControlledInputs />
        <Reviews />
        <UseRefEx />
        <MenuComp />
        <Accordion data={accData} />
        <CarouselTest />
        <GroceryBud />
        {/* <App /> */}
      </AppContext>
    </div>
  </div>
);
