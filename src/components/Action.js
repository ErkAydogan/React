import React from 'react';

  const Action = (props) => (
    <div>
      <button
      className="big-button"
        disabled={!props.hasOptions}
      >
       Welcome
      </button>
    </div>
  );
  

  export default Action;