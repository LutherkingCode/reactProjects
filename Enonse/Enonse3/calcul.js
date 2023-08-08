import React from 'react';

class Calcul extends React.Component {
  render() {
    var anne = 2023;
    var total = 20;
    
    return (
      <div>
        <div>{anne} + {total}</div>
      </div>
    );
  }
}

export default Calcul;
