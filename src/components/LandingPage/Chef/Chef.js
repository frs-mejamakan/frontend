import React from 'react';
import { ChefContainer } from './Chef.styles';
import image from '../../../assets/auntiear.png';

const Chef = () => {
  return (
    <>
      <ChefContainer>
        <h1>Meet our chef, Auntie Ari</h1>
        <img src={image} alt="Auntie Arie's Memakan Special Lauk" />
        <p>
          Auntie Ari's lauks are based on her mother's recipes, which were
          handed down to her through the generations. She has been cooking her
          special lauk for friends and family for years and is more than happy
          to serve you some of her favorites.
        </p>
      </ChefContainer>
    </>
  );
};

export default Chef;
