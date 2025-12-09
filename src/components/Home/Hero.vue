<script setup>
import { ref } from "vue";
import logo from "../../assets/logo.png";

defineProps({
  title: String,
  desc: String,
  img: String,
  bottomArrow: { type: Boolean, default: false },
  bookBtn: { type: Boolean, default: true },
});

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}
</script>

<template>
  <div class="w-full h-screen bg-cover bg-center flex flex-col" :style="{ backgroundImage: `url(${img})` }">
    <div class="w-full h-full flex flex-col backdrop-blur-sm bg-black/30">
      <!-- NAVBAR -->
      <header class="w-full z-50">
        <div class="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 lg:px-20 py-3 md:py-4 text-white">
          <!-- Логотип -->
          <router-link to="/" class="flex items-center">
            <img :src="logo" alt="Логотип" class="w-12 sm:w-16 md:w-20" />
            <div class="hidden sm:flex flex-col leading-tight ml-2">
              <span class="text-sm sm:text-base font-semibold">Town Hotel</span>
              <span class="text-xs text-gray-300">Бутик-отель</span>
            </div>
          </router-link>

          <!-- Desktop меню -->
          <nav class="hidden md:flex items-center gap-8">
            <router-link to="/" class="text-sm text-white/90 hover:text-white">ГЛАВНАЯ</router-link>
            <router-link to="/rooms" class="text-sm text-white/90 hover:text-white">КОМНАТЫ</router-link>
            <router-link to="/reviews" class="text-sm text-white/90 hover:text-white">УСЛУГИ</router-link>
            <router-link to="/about" class="text-sm text-white/90 hover:text-white">О НАС</router-link>
            <router-link to="/contact" class="text-sm text-white/90 hover:text-white">КОНТАКТЫ</router-link>
          </nav>

          <!-- Кнопка Забронировать + Mobile Burger -->
          <div class="flex items-center gap-4">
            <router-link to="/rooms"
              class="hidden sm:inline-block px-4 py-2 text-white text-sm font-semibold uppercase tracking-widest border border-white transition-transform duration-200 hover:scale-105">
              Забронировать
            </router-link>

            <button @click="toggleMenu"
              class="md:hidden p-2 rounded-md bg-white/10 hover:bg-white/20 transition relative z-50">
              <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile dropdown -->
        <transition name="slide-fade">
          <div v-show="isOpen" class="fixed top-20 left-0 right-0 md:hidden bg-black/80 backdrop-blur z-40 w-full">
            <div class="px-4 pt-6 pb-6">
              <nav class="flex flex-col gap-4">
                <router-link to="/" class="text-white text-lg" @click="closeMenu">ГЛАВНАЯ</router-link>
                <router-link to="/rooms" class="text-white text-lg" @click="closeMenu">КОМНАТЫ</router-link>
                <router-link to="/reviews" class="text-white text-lg" @click="closeMenu">ОТЗЫВЫ</router-link>
                <router-link to="/about" class="text-white text-lg" @click="closeMenu">О НАС</router-link>
                <router-link to="/contact" class="text-white text-lg" @click="closeMenu">КОНТАКТЫ</router-link>
                <router-link to="/rooms"
                  class="mt-2 inline-block px-4 py-2 border border-white text-white uppercase text-base tracking-widest"
                  @click="closeMenu">
                  Забронировать
                </router-link>
              </nav>
            </div>
          </div>
        </transition>
      </header>

      <!-- HERO CONTENT -->
      <div
        class="flex-1 flex flex-col justify-center items-center text-center w-[100%] md:w-[90%] m-auto text-white mb-20 sm:mb-8 md:mb-10 px-2 sm:px-4">
        <h1 class="text-xl font-bold sm:text-5xl md:text-6xl md:font-medium pb-2 sm:pb-4 md:pb-5 leading-tight">
          {{ title }}
        </h1>
        <p class="text-sm sm:text-xl md:text-2xl font-light max-w-3xl">
          {{ desc }}
        </p>
        <div v-if="bottomArrow" class="animate-bounce mt-12 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-20 md:w-20" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <router-link v-if="bookBtn" to="/rooms"
          class="mt-8 sm:mt-10 px-8 py-3 sm:px-10 sm:py-4 text-white text-sm sm:text-base font-semibold uppercase tracking-widest border border-white transform transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95">
          ЗАБРОНИРОВАТЬ
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

/* transition for mobile dropdown */
.slide-fade-enter-active {
  transition: all 200ms ease;
}

.slide-fade-leave-active {
  transition: all 150ms ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-6px);
}

.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
