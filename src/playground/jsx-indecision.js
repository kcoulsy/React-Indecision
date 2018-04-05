
const app = {
  title: 'Indecision',
  subtitle: 'Makes a choice for you',
  options: ['Test option']
}

const addOption = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;


  if(option){ //check that it is not empty
    app.options.push(option); //adds to the options array
    e.target.elements.option.value = ''; // reset the form
  }
  renderApp();
};

const removeAll = () => {
  app.options = [];
  renderApp();
}

const appRoot = document.getElementById('app');

const newOptions = app.options.map((option) => {
  return <li key={option}>{option}</li>
});

//picks the option from the array in options then returns in
const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const renderApp = () => {

  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <button disabled={app.options.length === 0}onClick={makeDecision}>What should I do?</button>
      {app.options.length > 0 ? <button onClick={removeAll}>Remove all</button> : undefined}

      <form onSubmit={addOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
