
import { useState } from 'react';
import {data} from './data.js';

function App() {
  const [search,setSearch] = useState('');
  console.log(search);
  return (
    <div className="App">
      <form >
        <input type="text" placeholder='search' onChange={e => {
          setSearch(e.target.value);
        }}/>
        

      </form>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.filter(item =>{
            return search.toLowerCase() === ''? item : item.first_name.toLowerCase().includes(search);
          }).map(item =>(
            <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>


          ))}

        </tbody>
      </table>
      
    </div>
  );
}

export default App;
