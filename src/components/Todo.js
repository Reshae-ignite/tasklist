import React, { useState } from 'react'
import db from '../firebase/firebase';
import { Button, List, ListItem, ListItemText, ListItemAvatar, makeStyles, Input } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    
    },
}));

function Todo(props) {

    const classes = useStyles();
    const [input, setInput] = useState();
    const [open, setOpen] = useState(false);

    const updateTodo = () => {

        db.collection('todos').doc(props.todo.id).set({
           
            todo: input,

        }, {merge: true})

        setOpen(false);
    }

    return (
        <>
            <Modal open={open} onClose={e => setOpen(false)} >
                <div className="editModal">
                <div className={classes.paper}>
                    <h1>Edit this item</h1>
                    <Input placeholder={props.todo.todo}  type="text" value={input} onChange={event => setInput(event.target.value)}/>
                    <Button variant= "contained" color= "primary" onClick={updateTodo}> Update Todo</Button>
                </div>
                </div>
            </Modal>

            <List className="list">
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} />
                </ListItem>
                <Button variant="contained" className="editbtn" onClick={e => setOpen(true)}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete</Button>
            </List>

        </>
    )
}

export default Todo
