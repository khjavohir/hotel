<script setup>
import { ref } from "vue";

// Данные о комнатах
const rooms = ref([
  {
    id: 1,
    title: "Люкс с видом на город",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Просторный номер с панорамным видом на город и современным интерьером.",
    fullDesc:
      "Люкс с панорамными окнами, стильным интерьером и рабочей зоной. В номере: Wi-Fi, кондиционер, мини-бар, ванная комната с душем и феном. Завтрак включён.",
    price: "350 000 UZS / ночь",
  },
  {
    id: 2,
    title: "Делюкс с балконом",
    image:
      "https://images.unsplash.com/photo-1590490360182-66333d1f7cde?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Комфортный номер с балконом и видом на внутренний двор.",
    fullDesc:
      "Уютный номер с двуспальной кроватью, просторной ванной и выходом на балкон. Подходит для отдыхающих пар. Включён завтрак и доступ к бассейну.",
    price: "280 000 UZS / ночь",
  },
  {
    id: 3,
    title: "Стандартный номер",
    image:
      "https://images.unsplash.com/photo-1600585154206-0c0e4a3fc1a9?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Элегантный стандартный номер с комфортной кроватью и рабочим местом.",
    fullDesc:
      "Простой, но стильный номер для деловых поездок. В номере: Wi-Fi, письменный стол, кондиционер, душ, телевизор и сейф.",
    price: "200 000 UZS / ночь",
  },
]);

// Логика модального окна
const selectedRoom = ref(null);
const openModal = (room) => {
  selectedRoom.value = room;
  document.body.style.overflow = "hidden"; // запрет прокрутки при открытом модалке
};
const closeModal = () => {
  selectedRoom.value = null;
  document.body.style.overflow = "auto";
};
</script>

<template>
  <section class="bg-[#0a1a2f] text-white py-16 px-6 md:px-12 lg:px-24">
    <div class="text-center mb-10">
      <h2 class="text-3xl md:text-4xl font-bold mb-2 tracking-wide">
        Наши номера
      </h2>
      <p class="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
        Выберите идеальный вариант для вашего отдыха или деловой поездки.
      </p>
    </div>

    <!-- Сетка карточек -->
    <div class="grid md:grid-cols-3 gap-8">
      <div
        v-for="room in rooms"
        :key="room.id"
        class="bg-white text-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
      >
        <img
          :src="room.image"
          :alt="room.title"
          class="h-56 w-full object-cover"
        />
        <div class="p-6 flex flex-col justify-between h-[260px]">
          <div>
            <h3 class="text-xl font-semibold mb-2">{{ room.title }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ room.shortDesc }}</p>
          </div>
          <div class="flex justify-between items-center mt-auto">
            <span class="font-medium text-[#0a1a2f]">{{ room.price }}</span>
            <button
              @click="openModal(room)"
              class="bg-[#0a1a2f] text-white px-4 py-2 rounded-lg hover:bg-[#122b4a] transition-all"
            >
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно -->
    <transition name="fade">
      <div
        v-if="selectedRoom"
        class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        @click.self="closeModal"
      >
        <div
          class="bg-white text-gray-900 rounded-2xl p-8 max-w-lg w-full relative shadow-xl animate-fade-in"
        >
          <button
            @click="closeModal"
            class="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
          >
            ×
          </button>

          <img
            :src="selectedRoom.image"
            :alt="selectedRoom.title"
            class="rounded-xl mb-4 object-cover h-56 w-full"
          />
          <h3 class="text-2xl font-bold mb-3 text-[#0a1a2f]">
            {{ selectedRoom.title }}
          </h3>
          <p class="text-gray-700 mb-4">{{ selectedRoom.fullDesc }}</p>
          <div class="flex justify-between items-center">
            <span class="font-medium text-[#0a1a2f]">{{ selectedRoom.price }}</span>
            <button
              class="bg-[#0a1a2f] text-white px-5 py-2 rounded-lg hover:bg-[#122b4a] transition-all"
              @click="closeModal"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes fade-in {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fade-in 0.4s ease;
}
</style>
