<template>
  <div class="cartunit">
    <h2>Your cart</h2>
    <div 
      v-if="cart.length" 
      class="cart-content">
      <ul class="cart-list">
        <li class="cart-list__item cart-list__item--header">
          <span>Item</span>
          <span>Quantity</span>
          <span>Price</span>
        </li>
        <li 
          v-for="item in cart"
          :key="item.item" 
          class="cart-list__item">
          <span>{{ item.item }}</span> <span>{{ item.quantity }}</span> <span>{{ item.price * item.quantity }}€</span>
        </li>
        <li class="cart-list__item--total">Cart total: {{ total }}</li>
      </ul>
    </div>
    <div v-else>
      <p>Your cart is empty. Why not 
        <nuxt-link 
          exact 
          to="/" 
          class="logo">fill it up with something?
        </nuxt-link>
      </p>
    </div>
    <button 
      v-if="cart.length" 
      class="btn btn-checkout">
      Checkout
    </button>
  </div>
</template>


<script>
import { mapState } from 'vuex';

export default {
  computed: {
    cart() {
      return this.$store.getters.cartItems;
    },
    total() {
      return this.$store.getters.cartTotal;
    }
  }
};
</script>

<style scoped lang="scss">
.cart-list {
  display: flex;
  flex-direction: column;
  padding: 0;
}
.cart-list__item--header {
  color: #000;
  font-weight: bold;
}
.cart-list__item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
.cart-list__item--total {
  align-self: flex-end;
  color: #000;
  font-weight: bold;
}
.cartunit {
  padding-top: 120px;
  width: 600px;
  padding: 120px 0 40px;
  max-width: 900px;
  margin: 0 auto;
}
.cartunit {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2 {
  margin-bottom: 40px;
}

.btn-checkout {
  margin-top: auto;
  align-self: center;
}
</style>
