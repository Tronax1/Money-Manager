import fire from "../Config/Fire";
import {FETCH_USER, FETCH_DATA} from "./types"

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

export const fetchData = () => async dispatch => {
    let userKey = fire.auth().currentUser.uid;
    let database = fire.database().ref().child('Users').child(userKey).child('Expenses');
    database.on('child_added', snap=>{
        dispatch({
            type: FETCH_DATA,
            payload:{
                id: snap.key,
                name: snap.val().name,
                ammount: snap.val().ammount,
                notes: snap.val().notes
            }
        })
    })
};

export const addExpenseDatabase = (name, expense, note) => dispatch=>{
    let userKey = fire.auth().currentUser.uid;
    let database = fire.database().ref().child('Users').child(userKey).child('Expenses');
    database.push().set({
        name: name,
        ammount: expense,
        notes: note
    })
};

export const removeExpenseDatabase = (noteId) => dispatch=>{
    let userKey = fire.auth().currentUser.uid;
    let database = fire.database().ref().child('Users').child(userKey).child('Expenses');
    database.child(noteId).remove();
}

export const signIn = (user, pass) => dispatch => {
    fire.auth().signInWithEmailAndPassword(user, pass).then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log("error on this shit");
    });
    
};

export const signUp = (user, pass) => dispatch =>{
    let ref = fire.database().ref().child('Users')
    fire.auth().createUserWithEmailAndPassword(user, pass).then(data=>{
        console.log(data);
        ref.push().set({
            user: user,
            password: pass
        })
    }).catch(err=>{
        console.log("error in this shit");
    });
}

export const signOut = () => dispatch => {
    fire.auth().signOut();
};