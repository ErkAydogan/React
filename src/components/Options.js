import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
  <div className="widget-header">
  <h3 className="widget-header__title">Your Dictionaries</h3>
    <button className="button button--link"onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
    {props.options.length === 0 && <p className="widget__message">Please add a Product to get started!</p>}
    {
      props.options.map((option, index) => (
        <Option
          key={option}
          optionText={option}      
          count= {index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />

        
      ))
      
    }
    {
      props.colors.map((color, index) => (
        <Option
          
          colorText = {color}
             
          count= {index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
      
    }

    {
      props.prices.map((price, index) => (
        <Option
         
          priceText = {price}
             
          count= {index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
      
    }

  </div>
);

  export default Options;