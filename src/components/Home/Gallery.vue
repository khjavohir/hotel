<script setup>
import { useRoomStores } from "@/stores/roomStore";

const roomStore = useRoomStores();
</script>
<template>
  <section class="py-16 bg-[#f3f3f3] relative">
    <div class="container mx-auto px-4 text-center">
      <!-- Заголовок + описание + мини-табы -->
      <h2 class="text-4xl font-bold text-blue-950 mb-4">Галерея отеля</h2>
      <p class="text-gray-600 max-w-2xl mx-auto mb-7">
        Погрузитесь в атмосферу роскоши и уюта — от стильных номеров до
        изысканного ресторана
      </p>

      <!-- Фото (6 штук) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        <div v-for="gallery in roomStore.previewGallery" :key="gallery.id"
          class="group overflow-hidden rounded-xl shadow-lg">
          <img :src="gallery.image" :alt="gallery.title" loading="lazy"
            class="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer" />
        </div>
      </div>

      <!-- Кнопка + социальные иконки -->
      <div class="flex flex-col md:flex-row justify-center items-center gap-4">
        <router-link to="/gallery"
          class="group inline-flex items-center gap-2 px-8 py-3 bg-blue-950 text-white font-medium rounded-full  transition">
          Посмотреть все фото
          <svg class="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>
