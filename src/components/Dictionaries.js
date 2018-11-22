import React from 'react';
import Dictionary from './Dictionary';

const Dictionaries = (props) => (
  <div>
  <div className="widget-header">
  <button onClick={props.handleShowDictionary} className="button">Show Dictionaries</button>
      
   </div>

  {
      props.domains.map((domain,index) => (
<div key ={domain}>
<Dictionary
      domainText={props.domain[index]}      
      rangeText = {props.range[index]}
      count= {index + 1}
      handleDeleteOption={props.handleDeleteOption}
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