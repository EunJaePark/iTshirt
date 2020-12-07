<template>
  <div>
      <SubComponent></SubComponent>
  </div>
</template>

<script>
import SubComponent from '@/components/SubComponent.vue';
export default {
    components: {
        SubComponent
    }
}
</script>

<style>
@import '../assets/css/sub.css';
</style>