import React from 'react';

  const Action = (props) => (
    <div>
      <button
      className="big-button"
        disabled={!props.hasOptions}
      >
        Please refresh the site after using remove all and then using Initial Dictionaries
      </button>
    </div>
  );
  

  export default Action;