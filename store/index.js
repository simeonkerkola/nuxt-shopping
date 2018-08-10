import Vue from 'vue';
import Vuex from 'vuex';
import { log } from 'util';

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    state: {
      manifest: [
        {
          id: 1,
          price: 420,
          item: 'backpack',
          url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/backpack.jpg'
        },
        {
          id: 2,
          price: 120,
          item: 'tshirt',
          url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/tshirt.jpg'
        },
        {
          id: 3,
          price: 200,
          item: 'sweatshirt',
          url:
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/sweatshirt.jpg'
        }
      ],
      cart: [],
      snackbar: { show: false, message: '' }
    },
    actions: {
      addItemToCart({ state, commit }, product) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (product.quantity > 0) {
              const cartItem = state.cart.find(item => item.id === product.id);
              console.log('item', cartItem);
              if (cartItem) {
                commit('incrementQuantity', cartItem);
              } else {
                commit('pushItemToCart', product);
              }
              resolve(product);
            } else reject('Quantity was 0');
          }, 500);
        });
      },
      peekSnackbar({ commit, state }, { message }) {
        commit('showSnackbar', { message });
        setTimeout(() => {
          commit('hideSnackbar');
        }, 3000);
      }
    },
    getters: {
      cartItems: state => {
        return state.cart;
      },
      cartTotal: state => {
        const total = state.cart.reduce((a, b) => a + b.quantity * b.price, 0);
        console.log('reduced', total);
        return total;
      }
    },
    mutations: {
      pushItemToCart(state, { ...product }) {
        state.cart.push({ ...product });
      },
      showSnackbar(state, { message }) {
        state.snackbar.message = message;
        state.snackbar.show = true;
      },
      hideSnackbar(state) {
        state.snackbar.show = false;
      },
      incrementQuantity(state, { id, quantity }) {
        const cartItem = state.cart.find(item => item.id === id);
        cartItem.quantity += quantity;
      }
    }
  });
};

export default createStore;
