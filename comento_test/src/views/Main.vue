<template>
  <div>
      <MainComponent></MainComponent>
      <ModalComponent></ModalComponent>
  </div>
</template>

<script>
import MainComponent from '@/components/MainComponent.vue';
import ModalComponent from '@/components/ModalComponent.vue';
export default {
    components: {
        MainComponent,
        ModalComponent
    }
}
</script>

<style>
@import '../assets/css/main.css';
</style>