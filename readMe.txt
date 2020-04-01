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
  these lifecycle hooks are just functions for example
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


25. To use react router we should install react-router-dom:
        npm install react-router-dom
    Then you have to import them in App.js:
        import {BrowserRouter, Route} from 'react-router-dom';
    Then you have to add your components:
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
          </div>
        </BrowserRouter>

[ATTENTION]
  path="/" means everything that is subset of / so we have to
  add exact prop to remove this default behavior 

[ATTENTION]
  this way of routing request to server every time for index,
  and it is not single page

26. We can import Link or NavLink
          import {Link, NavLink} from 'react-router-dom';
and use them instead of <a> tag to not request to server:
          <li><Link to="/">Home</Link></li>

There is different between Link and NavLink, NavLink add 
  active class to the active element.

[ATTENTION]
27. When we add a component to the Route tag:
  <BrowserRouter>
    <Route exact path="/" component={Home}>
    </Route>
  </BrowserRouter>

The react router automatically add some objects to the props
of that component:[history, location and match object]
  and we can use these properties and functions for example:

    we can use props.history.push("/about"); to go to another
    URL. (Programatic redirect)

28. These additional objects only added to the components That
  used in <Route> but if we want to have these objects in 
  other components we can use one of react router higher order
  components: (withRouter) this is function

  first we have to import it:
    import {withRouter} from 'react-router-dom'
  then wrap the export object in it:
    export default withRouter(Navbar);

29. Higher Order components:
      higher order components are just functions that gives
      additional features to that component, and in the end
      wrap the component in the export defaul:
        (They are just like Vue directives)

import React from 'react';
const Rainbow = (WrappedComponent) => {
  const colours = ['red', 'pink', 'orange', 'blue', 'green'];
  const randomColour = colours[Math.floor(Math.random() * 5)];
  const className = randomColour + '-text';
  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props}/>
      </div>
    )
  } 
}
export default Rainbow;

30. We can use axios to get data from database in the 
componentDidMount life cycle and save it in state of that 
component then show it. install axios first and import it


31. we can use Route param in this way:

    <Route path="/:id"></Route>
  
  To get the route param we can use:
    this.props.match.params.id 

32. There is problem in this way, for example if you load data from param
  this url /5 is also match with /contact and if get the data sooner than
  showing the /contact page, the react will show both of them to combat This
  problem we can use Switch tag: The swtich tag use routes in order

    import {Switch} from 'react-router-dom';

  then:
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/:id" component={Post}></Route>
        </Switch>
    </BrowserRouter>
///////////////////////////////
33. Using Redux: 
  we can make actions and dispatch them in components
  then store will run the reducer for that action,

    const { createStore } = Redux;
    const initState = {
      todos: [],
      posts: []
    }
    // when we pass myreducer to store, we don't have 
    //store, so we have to make initial one for the store.
    function myreducer(state = initState, action) {
      if (action.type === 'ADD_TODO') {
        return {    /// this object is new state
          ...state,
          todos: [...state.todos, action.todo]
        }
      if (action.type === 'ADD_POST') {
        return {    /// this object is new state
          ...state,
          posts: [...state.posts, action.post]
        }
      }
    }
    const store = createStore(myreducer);
    // everytime the store is change this function is
      going to run
    store.subscribe(() => {
      console.log('store is updated')
      console.log(store.getState())
    })
    const todoAction = {
      type: 'ADD_TODO',
      todo: 'buy milk'    // this is optional payload
    }
    
    store.dispatch(todoAction);
    store.dispatch({type: 'ADD_POST', post: 'this is nonsense'});
    

33. Using Redux in react app:
    first you have to install redux and react-redux:
    react-redux allow us to connect store to react components
      
      npm install redux react-redux

    b. then you have to import createStore from redux in
    Index.js file and Provider from react-redux:

      import {createStore} from 'redux;
      import {Provider} from 'react-redux'
      import rootReducer from './reducers/rootReducer';
      
      const store = createStore(rootReducer);
      ReactDOM.render(
        <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </React.StrictMode>,
        document.getElementById('root')
      );

      c. Then you have to create reducer for the store
      and import it Index.js and give it to createStore

        const initState = {
          posts: []
        };
        const rootReducer = (state = initState, action) => {
          return state;
        };
export default rootReducer;      

[ATTENTION]
34. you can make multiple reducers and combine them in
one function in the end.

35. After setting up redux we have to connect components to store:

  in order to do this, we have to map parts that we want to from
  store to component props, for doing this we have to import
  connect from reac-redux: 

      import {connect} from 'react-redux';

  connect is a function that returns high order function,
  connect as a input take another function to specify which 
  data of store we want, so we have to define this function. 
  in the return object we define the data that we want:

      const mapStateToProps = (state, ownProps) => {
        return {
          posts: state.posts
        }
      }
      /// ownProps is the props of component before attaching
          data to it 

  in the end you have to use the higher order function that 
  connect return to add this props to the component:

      export default connect(mapStateToProps)(Home) 

[ATTENTION]
36. how to map dispatch to props:

  const mapDispatchToProps = (dispatch) => {
    return {    // this object will be add to props
      deletePost: (id) => { dispatch({
        type: 'DELETE_POST',
        id: id
      })}
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(POST)