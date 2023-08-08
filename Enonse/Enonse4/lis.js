import React from 'react';

class Lis extends React.Component {
  render() {
    var lis = []; 

    return (
      <div>
        <div>
          {lis.map((eleman) => (
            <p >{eleman}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default Lis;
