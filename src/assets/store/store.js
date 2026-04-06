

// in react redux toolkit we use store.js file to create the store and also to combine the reducers
// the store is the place where we keep all the state of our application and also we can dispatch actions to update the state
// in store.js file we need to import configureStore from redux toolkit and also we need to import our reducers

// first we need to import configureStore from redux toolkit
import { configureStore } from "@reduxjs/toolkit";

// we also need to import our reducers
import cartslice from "../store/cartSlice"; // we need to import the cart reducer so that we can use it in our store



// create the store with the help of configureStore function


const store =configureStore({
    reducer:{
   
        cart: cartslice // we need to add the cart reducer to the store and this cart will use in all the components


    }
})




// export the store
export default store; // we need to export the store so that we can use it in our application