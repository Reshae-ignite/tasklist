import React from 'react'
import firebase from 'firebase';
import db from '../../firebase/firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import Todo from '../../page/Todos'
import NavBar from '../NavBar';

class Login extends React.Component {

 state = {isSignedIn:false};

 uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks:{
      signSuccess: () => false
    }
  }

 componentDidMount = ()=>{

    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
      console.log("user", user)
    })
    
  }
render(){
  return (
    <div>
        {this.state.isSignedIn ?
      <span> 
        <NavBar/>
        
        <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
        <img className="profilePic"
          alt='profile picture'
          src={firebase.auth().currentUser.photoURL}
        />
        <Todo firebaseAuth={firebase.auth()}/>
      </span>
      :
      <>
      <h1>To do's</h1>
      <p>Sign up or Log in Below!</p>
      <StyledFirebaseAuth
        uiConfig={this.uiConfig}
        firebaseAuth={firebase.auth()}
        className='homeCard'
        />
        </>
   }
    </div>
)
}
    
}

export default Login;