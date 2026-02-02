<script setup>
import { useRoomStores } from "@/stores/roomStore";
import img from "../../assets/room2.jpg";

const roomStores = useRoomStores();
</script>

<template>
  <div class="relative text-black py-16">
    <div class="w-[90%] m-auto">
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-bold mb-2 text-blue-950 tracking-wide">
          Популярные номера
        </h2>
        <p class="text-sm md:text-base max-w-2xl mx-auto">
          Выберите идеальный вариант для вашего отдыха или деловой поездки.
        </p>
      </div>

      <!-- Карточки комнат -->
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="room in roomStores.getRooms" :key="room.id"
          class="bg-white text-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300">
          <img :src="room.image" :alt="room.title" class="h-56 w-full object-cover" />

          <div class="p-6 flex flex-col justify-between h-[260px]">
            <div>
              <p class="text-xl font-semibold mb-2">{{ room.title }}</p>
              <p class="text-gray-600 text-sm mb-4">{{ room.desc }}</p>
              <p class="text-gray-600 text-sm">
                Вместимость: {{ room.capacity }} человек
              </p>
            </div>

            <div class="flex justify-between items-center mt-auto">
              <span class="font-medium text-sm sm:text-base text-[#0a1a2f]">
                {{ room.price }}
              </span>

              <router-link :to="`/rooms/${room.id}`"
                class="bg-[#0a1a2f] text-white px-4 py-2 rounded-lg hover:bg-[#122b4a] transition-all cursor-pointer">
                Подробнее
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>