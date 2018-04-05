//
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const removeOne = () => {
//   count--;
//   renderCounterApp();
// };
//
// const resetButton = () =>{
//   count = 0;
//   renderCounterApp();
// }
//
//
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={removeOne}>-1</button>
//       <button onClick={addOne}>+1</button>
//       <button onClick={resetButton}>Reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };
//
// renderCounterApp();

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {

      const storeCount = parseInt(localStorage.getItem('count'), 10);
      if(!isNaN(storeCount)){
        this.setState(() => {
          return {
            count: storeCount
          }
        });
      } else{
        this.setState(() => {
          return {
            count: 0
          }
        });
      }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count){
      localStorage.setItem('count', this.state.count);
    }

  }
  componentWillUnmount(){
    console.log('umounted');
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: (prevState.count + 1)
      }
    });
  }
  handleMinus() {
    this.setState((prevState) => {
      return {
        count: (prevState.count - 1)
      }
    });
  }
  handleReset() {
    this.setState((prevState) => {
      return {
        count: 0
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>

    )
  }
};

ReactDOM.render(<Counter />, document.getElementById('app'));
