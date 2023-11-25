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
import Menu from './common/menu/Menu.jsx';
import Tab from './common/tabs/Tab.jsx';
import Carousel from './common/carousel/Carousel.jsx';
import CarouselTest from './examples/slideEx/CarouselTest.jsx';
import GroceryBud from './examples/groceryBud/GroceryBud.jsx';
import Navbar from './common/navbar/Navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='main'>
    <Navbar />
    <div className='container'>
      <AppContext>
        <Menu />
        <Accordion data={accData} />
        <Tab />
        <Carousel />
        <CarouselTest />
        <GroceryBud />
      </AppContext>
    </div>
  </div>
);
