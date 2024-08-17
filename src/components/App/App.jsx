// import {useState} from 'react';
import { useEffect, useState } from 'react';
// We can import axios now!
// No more yellow squiggles!!!
import axios from 'axios';






function App() {

        const [name, setNewName] = useState('');
        const [quanity, setNewQuanity] = useState();
        const [unit, setNewUnit] = useState('');
        const [ShoppingList, SetNewShoppingList] = useState([]);
      
        useEffect(() => {
          fetchNew();
        }, [])
      
        let fetchNew = () => {
          axios.get('/api/shopping')
            .then((response) => {
              console.log(response.data);
      
              SetNewShoppingList(response.data);
            })
            .catch((error) => {
              console.log(error);
            })}
      
      
      
            const addItem = (event) => {
      
              event.preventDefault();
      
      
              const newItem = {
                name: name,
                quanity: quanity,
                unit: unit
              }
      
      
              axios.post('/api/shopping', newItem)
                .then((response) => {
                  console.log(response);
      
      
                  setNewName(' ');
                  setNewQuanity(' ');
                  setNewUnit(' ');
      
      
                  fetchNew();
                })
                .catch((error) => {
                  console.log(error);
                })
            }

            function deleteID(id) {
              axios.delete(`/api/shopping/${id}`)
              .then(response => {
                console.log('DELTE call successful!');
                fetchNew();
              })
              .catch(error => {
                console.log('something went wrong with our DELTE call');
              })
          
              
              }

              function Changer(id) {
                axios.put(`/api/shopping/toggle/${id}`)
                .then(response => {
                  console.log('put call successful!');
                  fetchNew();
                  
                })
                .catch(error => {
                  console.log('something went wrong with our put call');
                })
            
                
                }

                function resetData() {
                ShoppingList.map( item => {
                  axios.delete(`/api/shopping/${item.id}`)
                  .then(() => {
                    SetNewShoppingList([]);
                    
                  })
                  .catch(error => {
                    console.log('something went wrong with our DELTE call');
                  })})}
               

        return (
          <div>
        
            <h1>Shopping List</h1>
          <form onSubmit={addItem}>
      
              <label htmlFor="name">Name:</label>
      
      
              <input id="name" onChange={(event) => setNewName(event.target.value)} value={name} />
      

              <label htmlFor="quanity">Quanity:</label>
              <input id="quanity" onChange={(event) => setNewQuanity(event.target.value)} value={quanity} />





              <label htmlFor="unit">Unit:</label>
              <input id="unit" onChange={(event) => setNewUnit(event.target.value)} value={unit} />
      
              <button type="submit">Add New Items</button>
              <br />
              <button classname="Reset"  onClick={() => {resetData()}}>reset</button>

            </form>
      
            {/* <ul> */}
              {ShoppingList.map(
                function (groceries) {
      
                  return (<p key={groceries.id} className={groceries.purchase ? "True" : "False"} >{groceries.name} <br />  {groceries.quanity}  {groceries.unit} <br/> <button className={groceries.purchase ? "Bought" : "notBought"} onClick={() => Changer(groceries.id)}>buy</button> <button className={groceries.purchase ? "Boughtt" : "NotBoughtt"} onClick={() => deleteID(groceries.id)}>🗑️</button>  </p>);
                }
              )}
            {/* </ul> */}
          </div>
      
        );

    
      
}

export default App;
