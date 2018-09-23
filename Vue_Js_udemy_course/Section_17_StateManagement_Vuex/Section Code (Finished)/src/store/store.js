import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);
//We import and create a Vuex store object.
export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,
    mutations,
    actions,
    modules: {
        counter
    }
});