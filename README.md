# Restaurant App


* NOTES :

```
  
  * JSX: const element = <h1>Hello, world!</h1>;
  * const element = (
  	<h1 classname="greeting">Hello,world!</h1>
  	);

  * const element = React.createElement(
  	'h1',
  	{className: 'greeting'},
  	'Hello, world!'
  	);

  * const element = {
  	type: 'h1',
  	props: {
  		className: 'greeting',
  		children: 'Hello, world!'
  	}

  };



```

# Embedding Expressions in JSX :

```
  
  * const dish = { id: 0, name:'Uthapizza',...};
  * return (
  	<div key={dish.id} className="col-12 mt-5">
  	  <Media tag="li">
  	   <Media body className="ml-5">
  	    <Media heading>
  	       {dish.name}
  	  </Media> 
  	</Media> 
   </Media> 
   	</div>
  	);




```

# Working on project :

```
   
   * Configure your React Project to use Reactstrap: yarn add bootstrap@4.0.0 / yarn add reactstrap@5.0.0 / yarn add react-popper@0.9.2 ;

   * Configure to use Bootstrap 4, Next, open index.js file in the src folder and add the following line into the imports: import 'bootstrap/dist/css/bootstrap.min.css'; 
   
   * Run yarn start and then check the browser ;
   * Browserslist: caniuse-lite is outdated. Please run the following command: `npx browserslist --update-db` ;

   * Working on React Components Types.
   * React router: (Using Font Awesome Icons and Bootstrap-Social): yarn add font-awesome@4.7.0 / yarn add bootstrap-social@5.1.1 ;
   * Installing and Configuring React Router: yarn add react-router-dom@4.2.2 ;
   * 


```

# React Components: State and Props :

```
    
    * State declared within the constructor :
        class Menu extends Component {

    	constructor(props) {
    		super(props);

    		this.state = {
    			selectedDish: null
    		}
    	}
    	......
    }

    * State should only be modified using setState() :

       onDishSelect(dish) {
       	 this.setState({
       	 	selectedDish: dish
       	 	});
       }

    * Never do the following: this.state.selectedDish = dish;
    


```

# The Redux Flux Architecture:

```
  * ACTION ----> DISPATCHER ----> STORE -----> VIEW
  * ACTION -----> DISPATCHER ---> VIEW
  * New actions propagated through the system in response to user interactions(UI);
  * Uni directional data flow:
  Action ----> STORE [ Dispatch ----> Reducer + State -----> View] 
  * yarn add redux-thunk@2.2.0
  * yarn add redux-logger@3.0.6

  
```

# Client-Server Communication:

```
  * Installation json-server : sudo npm install json-server -g;
  * json-server --watch db.json -p 3001 -d 2000;
  * View on the browser: http://localhost:3001/dishes
   http://localhost:3001/promotions
   http://localhost:3001/leaders
   http://localhost:3001/feedback

  * http://localhost:3001/
  * http://localhost:3001/images/<image name>.png

```

# Fetch:

```
  * yarn add cross-fetch@2.1.0;
  * Reacr animations;

```
