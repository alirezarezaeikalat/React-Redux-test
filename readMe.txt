1. When we make a class that extends ReactDom:
    class App extends React.Component {
    
    }
  the only function that is neccessary to be inside this class is:
   render(){
    return (
        <div className="app-content">
        </div>
      )
  }

2. Limitation in JSX :
    a. we need one containing element in render function
    b. we can't use class we should use className

3. After making a react class we have to render it on a special element:
      ReactDOM.render(<App />, document.getElementById('app'));

4. Setting up JSX in order to browsers can compile it:
    a. first go to setup part of babel.io and get it then:
    b. add babel version in two place in index.html (first in the head part
    and then add type=text/babel to the script tag, which it has react class)

5. We can add js codes in JSX in {} 

6. We can have state in react object to have data in the class:
  class App extends React.Component {
    state = {
        name: 'Ryu',
        age: 30
    }
  }

7. We can use state data in render function or other function inside
  react class with this.state

8. We can use react dev tool to see the components of the react site

9. We can attach events to JSX in the render function like this:
  <button onClick={this.handleClick}>Click me</button>

  handleClick is the function in the class 

10. to update a state in function we can use setState function:

    handleClick = (e) => {
        // if we don't use arrow functions we're going to
        // get errors
        this.setState({
          name: 'Yoshi'
        });
      }

11. Two way data binding in React is with Change event:
      we can submit forms in react with Submit event:
    handleSubmit = (e) => {
      e.pre
    }
    handleChange= (e) => {
      this.setState({
        name: e.target.value
      });
    }
    render(){
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange}/>
      </form>
    }

by adding submit to button we can grab with enter keyboard

12. We can use create React app package to make modular app:
          npx create-react-app my-app
          cd my-app
          npm start

[ATTENTION: we can use functional approach for componenets
instead of class approach check the App.js file]

13. We can make new component(class) just like App.js one and
  then import it in App.js and use it in the render function
  of the App.js file:

      render(){
        return(
          <Ninjas />
        );
      }

14. We can use props in React for a child component, and give
  the child component dynamic data:

        render(){
        return(
          <Ninjas name="Ryu" age="25" belt="black"/>
        );
      }
  and get it child component(The react automatically save them
  in this.props as a object):

          render(){
            return (
              <div className="ninja">
                <div>Name: {this.props.Name}</div>
                <div>Age: {this.props.age}</div>
                <div>Belt: {this.props.belt}</div>
              </div>
            );
          }

15. Using destructuring in javascript:

    const {name, age, belt} = this.props (props variables 
    should be the same names as name, age, belt)

16. When we output list of JSX to the dom, the react knows
  to show them sequencially:
      render(){
        const {ninjas} = this.props;
        const ninjasList = ninjas.map(ninja => {
          return (
            <div className="ninja" key={ninja.id}>
              <div>Name: {ninja.name}</div>
            </div>
          );
        });
        return (
          <div className="ninja-list">
            { ninjasList }
          </div>
        );
      }

[ATTENTION]
17. When we output list to the dom in react, we have to
    give surrounding element unique key={} so react know 
    the components uniqely (check above example)

18. Generally we have container(class) component and 
    UI (function) components

    container                  UI
contain state             Don't contain state
contain cycle hooks       Recieve data from props
Not concerned with UI     Only concerned with UI
Use classes to create     Use functions to create
                          The only function is esential is return()

19. We can conditionally output to the DOM with react using 
  if statement or ternary operator:

  const Ninjas = (props) => {
    const ninjas = props.ninjas;
    const ninjaList = ninjas.map(ninja => {
      if(ninja.age > 20){
        return(
          <div>
            <div> {ninja.name} </div>
          </div>
        );
      } else {
        return null;
      }
    })

    return(
      <div className="ninja-list">
        {ninjaList}
      </div>
    );
  }

20. In order to change the data of root element from child
  we can pass function from root to child, and call the
  function and add data that we want to this function.

[ATTENTION]
21. when we set to arrays equall to each other, we are 
  actually do this by reference, if we want to get new
  array we can use spread operator:
  
    let ninjas = [...this.state.ninjas];

22. when we want to pass data to function that is evenhandler
    we can use anonymous functions:

    <button onClick={()=> {deleteNinja(ninja.id)}}>
    </button>

23. We can add css files in react in two ways:

    a. first we can add a css file like Ninja.css and import it
      in that component:

        import "./Ninja.css" when you import this, this css
        file will apply to all components, 

      b. or you can use Index.css and this file will automatically
      will apply to all files


24. React life cycle hooks:
  check the picture for lifecycle hook function:
  these lifecycle hooks are just functions forexample
  render() function is lifecycle hook
  another examples:

    componentDidMount(){
      console.log('component mounted');
    }
    componentDidUpdate(prevProps, prevState){
      console.log('component updated');
      console.log(prevProps, prevState);
    }

[ATTENTION]
component mount lifecycle hook is a good place for getting 
data from database