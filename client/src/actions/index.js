import fire from "../Config/Fire";
import {FETCH_USER} from "./types"

export const fetchUser = () => dispatch => {
    fire.auth().onAuthStateChanged(user => {
        if (user) {
            dispatch({
                type: FETCH_USER,
                payload: user
            });
        } else {
            dispatch({
                type: FETCH_USER,
                payload: null
            });
        }
    });
};

export const signIn = (user, pass) => dispatch => {
    fire.auth().signInWithEmailAndPassword(user, pass).then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log("error on this shit");
    });
    
};

export const signUp = (user, pass) => dispatch =>{
    fire.auth().createUserWithEmailAndPassword(user, pass).then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log("error in this shit");
    });
}

export const signOut = () => dispatch => {
    fire.auth().signOut();
};