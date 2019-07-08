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

export const fetchData = () =>  dispatch => {
    let userKey = fire.auth().currentUser.uid;
    let database = fire.database().ref().child('Users').child(userKey).child('Expenses');
    let allExpenses = [];
    database.on('child_added', snap=>{
        allExpenses.push({
            id: snap.key,
            name: snap.val().name,
            ammount: snap.val().ammount,
            notes: snap.val().notes,
            date: snap.val().date
        })
        dispatch({
            type: FETCH_DATA,
            payload: allExpenses
        })
    })
    database.on('child_removed', snap=>{
        console.log("You are deleting me");
        for(let i =0; i< allExpenses.length; i++){
            if (allExpenses[i].id == snap.key){
                allExpenses.splice(i, 1);
            }
        }
        dispatch({
            type: FETCH_DATA,
            payload: allExpenses
        })
    })
    
};

export const addExpenseDatabase = (name, expense, date, note) => dispatch=>{
    let userKey = fire.auth().currentUser.uid;
    let database = fire.database().ref().child('Users').child(userKey).child('Expenses');
    database.push().set({
        name: name,
        ammount: expense,
        notes: note,
        date: date
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