import "./App.css";

const fruits = [
  {
    name: "Apple",
    units: 3,
    price: 0.25,
  },
  {
    name: "Mango",
    units: 6,
    price: 0.35,
  },
  {
    name: "Banana",
    units: 4,
    price: 0.15,
  },
];

// Maps the fruit into an array on your console log.
// Adding +1 to the index will make the index start from 1 rather than default 0.

const newArrayfruits = fruits.map((fruit, index) => {
  return `${index + 1}. ${fruit.units} units of ${fruit.name} costs $${fruit.price * fruit.units}`
});
console.log(newArrayfruits)

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>

      {/* Use the .map function to display the details of each property  */}

      {fruits.map((fruit, index) => (
        <div key={fruit.name}>
        
        {/* Use the curly brackets to display the properites on your app webpage */}
          <h1>{fruit.name}</h1>
          <h1>{fruit.units}</h1>    
          <h1>{fruit.price}</h1>

        {/* Using the back tick and ${} you can call the properties and write it out as a sentence */}
        {/* The double $$ (before the price) is written so that a dollar sign will be displayed 
        within your sentence before the fruit price */}
        {/* Use the '*' to multiply the fruit price by the amount of fruit units to get the total cost */}
        {/* Use .toFixed() to round up the total cost to the nearest integer after the decimal point. e.g. $2.99999 would become $2.10
        You can specify the amount of numbers you want to display after the decimal point by specifying it within the .toFixed() function
        e.g. .toFixed(3) would change $2.1479999999999997 to $2.148*/}
          <h1>
            {`${index + 1}. ${fruit.units} units of ${fruit.name} costs $${(fruit.price * fruit.units).toFixed(2)}`}
          </h1>

        </div>
      ))}
    </div>
  );
}
export default App;
