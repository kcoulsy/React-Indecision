import React from 'react';

import Option from './Option';

const Options = (props) => (
    <div>
      <div className="widget-header">

      <h3 className="widget-header__title">Your Options</h3>
      <button
        onClick={props.handeDeleteOptions}
        disabled={props.options.length === 0}
        className="button button--link"
        >Remove All</button>
      </div>
        {props.options.length === 0 && <p className="widget-message">Please add an option to get started!</p>}
        {props.options.map((option, index)=> (
          <Option
            key={option}
            optionText={option}
            handleDeleteSingle={props.handleDeleteSingle}
            count={index+1}
          />
        ))
        }

    </div>
  );

export default Options;
// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.props.options.map((option)=> <Option key={option} optionText={option} />)}
//         </ul>
//         <button onClick={this.props.handeDeleteOptions}>Remove All</button>
//       </div>
//     );
//   }
// }
