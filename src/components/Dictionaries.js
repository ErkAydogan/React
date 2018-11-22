import React from 'react';
import Dictionary from './Dictionary';

const Dictionaries = (props) => (
  <div>
  <div className="widget-header">
  <h3 className="widget-header__title">Your Dictionary</h3>
  <button className="button button--link"onClick={props.handleGetData}>Show Dictionaries</button>
    <button className="button button--link"onClick={props.handleDeleteOptions}>Remove All</button>
       
   </div>
   {props.domains.length === 0 && <p className="widget__message">Please click show Dictionaries to get started!</p>}
   
  {
      props.domains.map((domain,index) => (
<div key ={domain}>
<Dictionary

      domainText={domain}      
      rangeText = {props.range[index]}
      count= {index + 1}
      
    />
   
    </div> 
      ))
      
    }
  
  
  </div>
);

  export default Dictionaries;


    /* <Option
          key={option}
          optionText={option}      
          count= {index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
*/