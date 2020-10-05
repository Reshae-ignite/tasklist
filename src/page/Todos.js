import React, { useState, useEffect } from 'react';

import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Todo from '../components/Todo';
import db from '../firebase/firebase';


export default function Todos() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
  
    useEffect(() => {
      
      // Fetch and add.
      db.collection('todos').onSnapshot(snapshot => {
  
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo : doc.data().todo})))
        
      });
  
    }, [])
  
    const addTodo = (event) => {
  
      event.preventDefault();
      
      // Firebase addition.
      db.collection('todos').add({
  
        todo: input,
    
  
      })
      
      setInput('');
  
    }
    return (
        <div>
            
      <h1>Shae's ToDo App </h1>
      <form  className="form">
        <FormControl>
          <InputLabel>What to do..</InputLabel>
          <Input type="text" value={input} onChange={event => setInput(event.target.value)} placeholder="What to do.." />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} color="primary" variant="contained">Add Task</Button>
      </form>

      <div className="list">
      <List>
        <ListItem>
        <ListItemText primary={todos.map(todo => (
          <Todo todo={todo} />
        ))}/>
        </ListItem>
        </List>
      </div>
        </div>
    )
}
