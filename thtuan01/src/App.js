import logo from './logo.svg';
import './App.css';

function App() {
  const numbers1to10 = []
  for (let index = 1; index <= 10 ; index++) {
    numbers1to10.push(index + " ");
  }

  const numbersodd100 = []
  for (let index = 1; index < 100; index+=2) {
    numbersodd100.push(index + " ")
    
  }

  const tablewith7 = []
  for (let index = 1; index <= 10; index++) {
    tablewith7.push(index*7 + " ")
    
  }

  const multiplicationTables = [];
  for (let i = 1; i <= 10; i++) {
    let table = [];
    for (let j = 1; j <= 10; j++) {
      table.push(i * j + " ");
    }
    multiplicationTables.push(`\nTable for ${i}: ${table.join('')}`);
  }
 

  return (
    <div class = "container">
      <div class = "flex">
      <div class = "label">1. Print numbers from 1 to 10: </div> <div>{numbers1to10}</div>
      </div>

      <div class = "flex">
      <div class = "label">2. Print the odd numbers less than 100: {numbersodd100}</div>
      </div>
      <div class = "label">3. Print the multiplication table with 7: {tablewith7}</div>
      <div class = "label">4. Print all the multiplication tables with numbers from 1 to 10: {multiplicationTables}</div>
      <div class = "label">{multiplicationTables.map((table,index)=>(<div key = {index}>{table}</div>))}</div>
    </div>
  );
}

export default App;
