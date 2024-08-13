import React from 'react';
// import {useState} from 'react';
import { useEffect, useState } from 'react';
// import Header from '../Header/Header.jsx'
import './App.css';
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
                name: setNewName,
                quanity: setNewQuanity,
                unit: setNewUnit
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
        return (
          <div>
        
            <h1>Shopping List</h1>
          <form onSubmit={addItem}>
      
              <label htmlFor="name">name:</label>
      
      
              <input id="name" onChange={(event) => setNewName(event.target.value)} value={newItem} />
      

              <label htmlFor="quanity">quanity:</label>
              <input id="quanity" onChange={(event) => setNewQuanity(event.target.value)} value={newItem} />





              <label htmlFor="unit">unit:</label>
              <input id="unit" onChange={(event) => setNewUnit(event.target.value)} value={newItem} />
      
              <button type="submit">Add New Items</button>
            </form>
      
            <ul>
              {ShoppingList.map(
                function (groceries) {
      
                  return (<li key={groceries.id}>{groceries.name} amount: {groceries.quanity}{groceries.unit}</li>);
                }
              )}
            </ul>
          </div>
      
        );

    
      
}

export default App;
