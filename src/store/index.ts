import { createStore } from 'vuex';

const store = createStore({
  state: {
    name: 'nagi'
  },
  mutations: {
    setName(state, name) {
      state.name = name
    }
  },
});
export default store;
