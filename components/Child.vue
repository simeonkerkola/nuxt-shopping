<template>
  <div>
    <div class="item">
      <h2 class="item-header"><span>{{ item }}</span> <span>{{ price }}€</span></h2>
      <img 
        :src="url" 
        width="235" 
        height="300">
      <div class="quantity">
        <button 
          class="btn-inc" 
          @click="quantity > 0 ? quantity -= 1 : 0">-</button>
        <span class="quant-text">Quantity: {{ quantity }}</span>
        <button 
          class="btn-inc" 
          @click="quantity += 1">+</button>
      </div>
      <button 
        class="btn" 
        @click="addItemToCart({item, id, quantity, price})">Submit</button>
    </div>
  </div>
</template>


<script>
import { mapActions } from 'vuex';
export default {
  props: ['item', 'url', 'price', 'id'],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    addItemToCart(item) {
      this.$store.dispatch('addItemToCart', item).then(() => {
        this.$store.dispatch('peekSnackbar', {
          message: `item added to <a href="/cart">cart</a>`
        });
      });
    }
  }
};
</script>

<style>
.item-header {
  align-self: center;
  display: flex;
  width: 235px;
  justify-content: space-between;
}
</style>
