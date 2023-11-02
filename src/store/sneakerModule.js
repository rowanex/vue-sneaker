import axios from 'axios';

export const sneakersModule = {
  state: () => ({
    sneakers: [],
    isSneakersLoading: true,

    cartSneakers: [],
    isCartSneakersLoading: true,

    orders: [],
    isOrdersLoading: true,

    favorites: [],
    isFavoritesLoading: true,

    isShowSideCart: false,

    orderAmount: 0,

    isFinishedOrder: false,
    orderId: 0,

    searchQuery: "",

  }),
  getters: {
    searchedSneakers: (state) => {
      return state.sneakers.filter((sneaker) =>
        sneaker.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    orderTotalAmount: (state) => {
      return state.cartSneakers.reduce((total, sneaker) => total + sneaker.price, 0);
    }
  },
  mutations: {
    setSneakers(state, sneakers) {
      state.sneakers = sneakers;
    },
    setIsSneakersLoading(state, bool) {
      state.isSneakersLoading = bool;
    },
    setCartSneakers(state, cartSneakers) {
      state.cartSneakers = cartSneakers;
    },
    setIsCartSneakersLoading(state, bool) {
      state.isCartSneakersLoading = bool;
    },
    setOrders(state, orders){
      state.orders = orders;
    },
    setIsOrdersLoading(state, bool){
      state.isOrdersLoading = bool;
    },
    setFavorites(state, favorites){
      state.favorites = favorites;
    },
    setIsFavoritesLoading(state, bool){
      state.isFavoritesLoading = bool;
    },
    setIsShowSideCart(state, bool) {
      state.isShowSideCart = bool;
    },
    setOrderAmount(state, value) {
      state.orderAmount = value;
    },
    setOrderId(state, value) {
      state.orderId = value;
    },
    setIsFinishedOrder(state, bool) {
      state.isFinishedOrder = bool;
    },
    setSearchQuery(state, searchQuery) {
        state.searchQuery = searchQuery;
    },
  },
  actions: {
    async getSellingSneakers({ commit }) {
      try {
        const response = await axios.get('https://65214c6ba4199548356d0717.mockapi.io/sneaker');
        commit('setSneakers', response.data);
        commit('setIsSneakersLoading', false);
      } catch (error) {
        console.error('Error fetching data:', error);
        commit('setIsSneakersLoading', false);
      }
    },
    async getPurchasedSneakers({ commit }) {
      try {
        const response = await axios.get('https://65214c6ba4199548356d0717.mockapi.io/cart_sneakers');
        commit('setCartSneakers', response.data);
        commit('setIsCartSneakersLoading', false);
      } catch (error) {
        console.error('Error fetching data:', error);
        commit('setIsCartSneakersLoading', false);
      }
    },
    
    async getOrderedSneakers({commit}){
      try{
        const response = await axios.get('https://653235724d4c2e3f333dc5c1.mockapi.io/orders');
        commit('setOrders', response.data);
        commit('setIsOrdersLoading', false);
      } catch (error) {
        console.error('Error fetching data:', error);
        commit('setIsOrdersLoading', false);
      }
    },

    async getFavoritesSneakers({commit}){
      try{
        const response = await axios.get('https://653235724d4c2e3f333dc5c1.mockapi.io/favorites');
        commit('setFavorites', response.data);
        commit('setIsFavoritesLoading', false);
      } catch (error) {
        console.error('Error fetching data:', error);
        commit('setIsFavoritesLoading', false);
      }
    },

    async addToCart({ commit, state }, sneaker) {
      try {
        await axios.post('https://65214c6ba4199548356d0717.mockapi.io/cart_sneakers', sneaker);
        commit('setOrderAmount', state.orderAmount + sneaker.price);
        await this.dispatch('sneakers/getPurchasedSneakers');
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    },

    async deleteFromCart({ commit, state }, { sneakerId, sneakerPrice }) {
        try {
          await axios.delete(`https://65214c6ba4199548356d0717.mockapi.io/cart_sneakers/${sneakerId}`)      
          .then(res => {
            console.log(res); //mockapi отдает 200, а по факту не удаляет товар из корзины. Случается при отправлении большого кол-ва запросов за короткий промежуток времени.
          });
          commit('setOrderAmount', state.orderAmount - sneakerPrice);
          await this.dispatch('sneakers/getPurchasedSneakers');
        } catch (error) {
          console.error('Error deleting from cart:', error);
        }
    },

    async deleteFromCartFromCatalog({ state }, sneaker){
      try{
        const itemId = sneaker.itemId;
        const removableSneaker = [...state.cartSneakers.filter((sneaker) => sneaker.itemId === itemId )];
        const sneakerId = removableSneaker[0].id;
        const sneakerPrice = removableSneaker[0].price;
        await this.dispatch('sneakers/deleteFromCart', {sneakerId, sneakerPrice});
      } catch (error) {
        console.error('Error deleting from cart:', error);
      }
    },

    async addToFavorite(context, sneaker) {
      try {
        await axios.post('https://653235724d4c2e3f333dc5c1.mockapi.io/favorites', sneaker);
        await this.dispatch('sneakers/getFavoritesSneakers');
      } catch (error) {
        console.error('Error adding to favorites:', error);
      }
    },

    async deleteFromFavorites({ state }, sneaker){
      try{
        const itemId = sneaker.itemId;
        const removableSneaker = [...state.favorites.filter((sneaker) => sneaker.itemId === itemId )];
        const sneakerId = removableSneaker[0].id;
        await axios.delete(`https://653235724d4c2e3f333dc5c1.mockapi.io/favorites/${sneakerId}`)      
          .then(res => {
            console.log(res);
          });
        await this.dispatch('sneakers/getFavoritesSneakers');
      } catch (error) {
        console.error('Error deleting from favorites:', error);
      }
    },

    async makeAnOrder({ commit, state}, sneakers) {
      try {
        const orderResponse = await axios.post('https://653235724d4c2e3f333dc5c1.mockapi.io/orders', { items: sneakers });
        commit('setOrderId', orderResponse.data.id);
        commit('setIsFinishedOrder', true)
        const delayAndDelete = async (sneaker) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          await this.dispatch('sneakers/deleteFromCart', {
            sneakerId: sneaker.id,
            sneakerPrice: sneaker.price,
          });
        };
    
        const deletePromises = state.cartSneakers.map(delayAndDelete);
        await Promise.all(deletePromises);
        commit('setCartSneakers', []);
      } catch (error) {
        console.error('Error ordering:', error);
      }
    },
    
  },
  namespaced: true
};
