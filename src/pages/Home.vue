<script setup>
import { ref, onMounted } from "vue";
import Hero from "../components/Home/Hero.vue";
import Loader from "../components/Home/Loader.vue";
import hotel from "../assets/hotel-bg.jpg";
import About from "@/components/Home/About.vue";
import Rooms from "@/components/Home/Rooms.vue";
import Gallery from "@/components/Home/PreviewGallery.vue";
import Review from "@/components/Home/ClientReviews.vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});
</script>

<template>
  <!-- <Transition name="fade">
    <Loader v-if="isLoading" />
  </Transition> -->

  <Hero title="РОСКОШНЫЙ ОТЕЛЬ И ПРЕМИАЛЬНЫЙ КОМФОРТ" desc="Один из самых популярных отелей в Узбекистане"
    :img="hotel" />
  <About />
  <Rooms />
  <Gallery />
  <Review />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
