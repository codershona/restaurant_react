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