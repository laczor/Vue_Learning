import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
//We import and create a Vuex store object.
export const store = new Vuex.Store({
    state: {
        counter:0,
        value: 0
    },
    getters: {
        doubleCounter: state =>{
            return state.counter *2;
        },
        stringCounter:state =>{
            return state.counter + "clicks";
        }
    },
    //So the mutatations will recieve a payload, with which the variables will be changed
    mutations:{
        increment:(state,payload) =>{
            state.counter +=payload;
        },
        decrement:(state,payload) =>{
            state.counter -=payload;
        }
    },
    // context is passed in by vuex
    //Actions will call the mutations
    actions:{
        increment:(contex,payload) =>{
            context.commit("increment",payload);
        },
        //destructuring 1 property of an object
        decrement:({commit},payload) =>{
            commit("decrement",payload);
        },
        //It will recieve an object which will call a mutation
        asyncIncrement:(context,payload)=>{
            setTimeout(() => {
                context.commit('increment',payload.by);
            }, payload.duration);
        }

    }
});