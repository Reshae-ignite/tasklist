import React from 'react'
import firebase from 'firebase';
import db from '../../firebase/firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

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
        <div>Signed In!</div>
        <button onClick={()=> firebase.auth().signOut()}>Sign out</button>
        <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
        <img 
          alt='profile picture'
          src={firebase.auth().currentUser.photoURL}
        />
      </span>
      :
      <StyledFirebaseAuth
        uiConfig={this.uiConfig}
        firebaseAuth={firebase.auth()}
        />
   }
    </div>
)
}
    
}

export default Login;