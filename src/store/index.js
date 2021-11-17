import Vue from "vue";
import Vuex from "vuex";
import {
  ADD_TO_CART,
  ADD_TO_CART_COUNT,
  REMOVE_FROM_CART,
  SET_GOODS,
} from "@/store/mutations-types";
import { getRandomValues } from "@/utils/getRandomValues";

Vue.use(Vuex);

export const state = () => ({
  cart: [],
  goods: [],
  isPending: false,
});

export const getters = {
  getTotal: (state) => {
    return state.cart.reduce(
      (total, product) => total + product.price * product.count,
      0
    );
  },
  getCount: (state) => {
    return state.cart.reduce((total, product) => total + product.count, 0);
  },
};

export const actions = {
  async init({ dispatch }) {
    dispatch("fetchGoods");
  },
  async fetchGoods({ commit }) {
    try {
      const response = await fetch(
        "https://random-data-api.com/api/food/random_food?size=30"
      );
      const data = await response.json();
      const goods = data.map((product) => ({
        ...product,
        image: getRandomValues(1, 12),
        price: getRandomValues(150, 400),
        count: 0,
      }));
      commit(SET_GOODS, goods);
    } catch (e) {
      console.log(e, "ошибка получения товаров");
    }
  },
  addToCart({ state, commit }, product) {
    let cartGoods = [...state.cart];
    const productIndex = cartGoods.findIndex(
      (cartProduct) => cartProduct.id === product.id
    );
    if (productIndex !== -1) {
      cartGoods[productIndex].count += 1;
      commit(ADD_TO_CART_COUNT, cartGoods);
    } else {
      commit(ADD_TO_CART, { ...product, count: 1 });
    }
  },
  removeFromCart({ commit }, id) {
    commit(REMOVE_FROM_CART, id);
  },
};

export const mutations = {
  [SET_GOODS](state, goods) {
    state.goods = goods;
  },
  [ADD_TO_CART](state, cartItem) {
    state.cart = [...state.cart, cartItem];
  },
  [ADD_TO_CART_COUNT](state, cart) {
    state.cart = cart;
  },
  [REMOVE_FROM_CART](state, id) {
    state.cart = state.cart.filter((cartItem) => cartItem.id !== id);
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
