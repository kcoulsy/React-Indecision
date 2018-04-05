// const app = {
//
// }
//
// let hidden = true;
//
// const buttonClick = () => {
//   if(hidden){
//     hidden = false;
//   } else {
//     hidden = true;
//   }
//   renderApp();
//   console.log(hidden);
// }
//
// const appRoot = document.getElementById('app');
//
// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={buttonClick}>Show/Hide</button>
//       {hidden && <p>This text will hide or show when you click the title</p>}
//     </div>
//
//   );
//
//   ReactDOM.render(template, appRoot);
// };
//
//
// renderApp();

class Vis extends React.Component {
  constructor(props){
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
    this.state = {
      visible: false
    };
  }
  buttonClick(){
    this.setState((prevState)=>{
      return {
        visible: !prevState.visible
      }
    });
  }

  render() {
    return (
      <div>
        <h2>Title</h2>
        <button onClick={this.buttonClick}>Show/Hide</button>
        {this.state.visible && <p>This will be shown or hidden</p>}
      </div>
    );
  }
}

ReactDOM.render(<Vis />, document.getElementById('app'));
