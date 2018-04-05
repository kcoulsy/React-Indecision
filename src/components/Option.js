import React from 'react';

const Option = (props) => (
  <div className="option">
  <p className="option__text">{props.count}. {props.optionText} </p>

    <button
      onClick={(e)=>{
        props.handleDeleteSingle(props.optionText)
      }}
      className="button button--link"
      >
      Delete</button>

  </div>
);

// class Option extends React.Component {
//
//   render() {
//     return <li>{this.props.optionText}</li>;
//   }
// }

export default Option;
