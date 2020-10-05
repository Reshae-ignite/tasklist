import React from 'react'
import {Nav, Navbar} from "react-bootstrap";

import firebase from 'firebase';
import db from '../firebase/firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function NavBar() {

    

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                <Nav.Link onClick={()=> firebase.auth().signOut()}>Sign out</Nav.Link>
                </Nav>
        </Navbar> 
        </div>
    )
}
