<template>
  <div id="app">
    <Name></Name>
    <router-view></router-view>
  </div>
</template>

<script>
import Name from '@/components/common/Name.vue';
export default {
  components: {
    Name
  }
}
</script>

<style>
@import './assets/css/reset.css';
@import './assets/css/common.css';
</style>
