import React from 'react';
import FormNameUser from '../components/Home/FormNameUser';
import pokedex from '../../public/pokedex.png'
import '../components/Home/pokedex/styles/home.css'

const Home = () => {
  return (
    <div className='home-container'>
        <h1>
          <img className='home-img' src={pokedex} alt="" />
        </h1>
        <h2 className='home-h1'>Hi trainer!!</h2>
        <p className='home-p'>Please give us your trainer name to start</p>
        <FormNameUser />
        <footer className='home-footer'>
          <div className='home-footer_circle'>
            <div className='home-footer_circle2'></div>
          </div>
        </footer>
    </div>

  );
}

export default Home;
