<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-blue-950 mb-4">
        Что говорят наши гости
      </h2>
      <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Реальные истории от тех, кто уже жил у нас
      </p>

      <!-- Карусель -->
      <div class="overflow-hidden" @mouseenter="pause" @mouseleave="play">
        <div 
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div 
            v-for="review in reviews" 
            :key="review.id"
            class="min-w-full px-4 md:px-8"
          >
            <div class="bg-white p-6 md:p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
              <div class="flex items-center mb-4">
                <img 
                  :src="review.avatar" 
                  :alt="review.name"
                  class="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-blue-100"
                />
                <div>
                  <p class="font-semibold text-lg">{{ review.name }}</p>
                  <div class="flex text-yellow-500">
                    <svg v-for="n in 5" :key="n" class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <p class="text-gray-700 italic leading-relaxed">
                "{{ review.text }}"
              </p>
              <p class="text-sm text-gray-500 mt-4 text-right">
                — {{ review.date }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Точки навигации -->
      <div class="flex justify-center mt-6 gap-2">
        <button 
          v-for="(r, i) in reviews" 
          :key="r.id"
          @click="currentIndex = i"
          class="w-2 h-2 rounded-full transition"
          :class="currentIndex === i ? 'bg-blue-950 w-8' : 'bg-gray-300'"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const reviews = ref([
  {
    id: 1,
    name: 'Анна К.',
    avatar: '/avatars/anna.jpg', // или placeholder
    text: 'Идеальное место для романтического уикенда! Вид из номера — завораживает, персонал — как семья.',
    date: '15 октября 2025'
  },
  {
    id: 2,
    name: 'Максим П.',
    avatar: '/avatars/max.jpg',
    text: 'Ресторан — огонь! Попробовали стейк с трюфелем. Вернёмся обязательно с друзьями.',
    date: '3 ноября 2025'
  },
  {
    id: 3,
    name: 'Елена и Сергей',
    avatar: '/avatars/couple.jpg',
    text: 'Спа — это отдельная вселенная. После массажа чувствовали себя заново рождёнными.',
    date: '28 сентября 2025'
  }
  // Добавь ещё 1-2
])

const currentIndex = ref(0)
let interval = null

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % reviews.value.length
}

const play = () => {
  interval = setInterval(next, 2000)
}

const pause = () => {
  clearInterval(interval)
}

onMounted(() => play())
onUnmounted(() => clearInterval(interval))
</script>