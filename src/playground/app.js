class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handeDeleteOptions = this.handeDeleteOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteSingle = this.handleDeleteSingle.bind(this);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    try {
      //Using try catch, if its not valid json then do nothing
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options){
        this.setState(() => ({options}));
      }
    } catch (e) {
      //Do nothing at all
    }


  }
  componentDidUpdate(prevProps, prevState){

    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('componentDidUpdate');
    }
  }
  componentWillUnmount(){
    console.log('umounted');
  }

  handeDeleteOptions(){
    // this.setState(()=>{
    //   return {
    //     options: []
    //   };
    // });
    this.setState(() => ({
      options:[]
    }));
  }
  handleDeleteSingle(optionToRemove){
    this.setState((prevState)=> ({
      options: prevState.options.filter((option)=>{
        return optionToRemove !== option;
      })
    }));
  }
  handlePickOption() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption (option) {
    if(!option){
      return 'Enter Valid Value to add item';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This is already there!';
    }
    this.setState((prevState) => ({options: prevState.options.concat([option]) }) );
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Let us make your decision';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePickOption={this.handlePickOption}
          />
        {this.state.options.length >0 &&
          <Options
          options={this.state.options}
          handeDeleteOptions={this.handeDeleteOptions}
          handleDeleteSingle={this.handleDeleteSingle}
          />}
        <AddOption
          handleAddOption={this.handleAddOption}
          />
      </div>
    );
  }
};

const Header = (props) => {
  return (<div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </div>);
};

Header.defaultProps = {
  title: 'Indecision'
};
// class Header extends React.Component {
//   render(){
//     return (<div>
//       <h1>{this.props.title}</h1>
//       <h2>{this.props.subtitle}</h2>
//     </div>);
//   }
// }
const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePickOption}
        disabled={!props.hasOptions}
        >
        What should I do?</button>
    </div>
    );
};
// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handlePickOption}
//           disabled={!this.props.hasOptions}
//           >
//           What should I do?</button>
//       </div>
//       );
//   }
// }
const Options = (props) => {
  return (
    <div>
      <ul>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {props.options.map((option)=> (
          <Option
            key={option}
            optionText={option}
            handleDeleteSingle={props.handleDeleteSingle}
          />
        ))
        }
      </ul>
      <button onClick={props.handeDeleteOptions}>Remove All</button>
    </div>
  );
};
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
const Option = (props) => {
  return <li>{props.optionText}
    <button
      onClick={(e)=>{
        props.handleDeleteSingle(props.optionText)
      }}
      >
      Delete</button>
  </li>;
};
// class Option extends React.Component {
//
//   render() {
//     return <li>{this.props.optionText}</li>;
//   }
// }
class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  addOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(()=>({ error }));
    //Reset form
    if(!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addOption}>
          <input type="text" name="option"></input>
          <button >Add Option</button>

        </form>
      </div>
    )
  }
}
// const jsx = (
//   <div>
//     <Header />
//     <Action />
//     <Options />
//     <AddOption />
//   </div>
// );

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
