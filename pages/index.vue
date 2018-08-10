<template>
  <section class="container">
    <div class="flexrow">
      <div 
        v-for="unit in manifest" 
        :key="unit.name"
        class="unit">
        <child 
          :item="unit.item"
          :price="unit.price" 
          :url="unit.url"
          :id="unit.id" />
      </div>
    </div>
  </section>
</template>

<script>
import Child from '~/components/Child.vue';
import { mapState } from 'vuex';

export default {
  components: {
    Child
  },
  computed: mapState({
    manifest: state => state.manifest
  })
};
</script>

<style>
/* Page transition ANIMATION  */
.page-enter-active {
  animation: acrossIn 0.4s ease-out both;
}

.page-leave-active {
  animation: acrossOut 0.4s ease-in both;
}

@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
