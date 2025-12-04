<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const reviews = ref([
  {
    id: 1,
    name: 'Анна Иванова',
    avatar: 'https://i.pravatar.cc/80?img=1',
    rating: 5,
    text: 'Потрясающий отель! Номер был безупречно чистым, персонал невероятно внимательный. Завтраки просто шикарные. Обязательно вернемся снова.',
    date: '12 мар. 2025',
    location: 'Ташкент',
    tags: ['Семейный', 'Рядом с центром'],
  },
  {
    id: 2,
    name: 'Марат Алиев',
    avatar: 'https://i.pravatar.cc/80?img=12',
    rating: 5,
    text: 'Идеальное расположение в центре города. Ресторан отеля превзошел все ожидания. Современный дизайн и продуманные детали.',
    date: '27 фев. 2025',
    location: 'Самарканд',
    tags: ['Бизнес', 'Ресторан'],
  },
  {
    id: 3,
    name: 'Елена Петрова',
    avatar: 'https://i.pravatar.cc/80?img=5',
    rating: 5,
    text: 'Отдыхали семьей — все были в восторге! Большие комфортные номера, отличная звукоизоляция. Консьерж помог организовать экскурсии.',
    date: '03 янв. 2025',
    location: 'Бухара',
    tags: ['Семейный', 'Тишина'],
  }
])
</script>

<template>
  <section class="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-16">
        <span
          class="inline-block text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 bg-blue-50 px-3 py-1 rounded-full">Отзывы
          гостей</span>
        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">Что говорят наши гости</h2>
        <p class="text-lg text-gray-500 max-w-2xl mx-auto">Реальные истории от путешественников, которые уже побывали в
          нашем отеле</p>
      </div>

      <Swiper :modules="[Autoplay, Pagination]"
        :autoplay="{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }"
        :pagination="{ clickable: true }" :space-between="24" :speed="600" class="reviews-swiper">
        <SwiperSlide v-for="review in reviews" :key="review.id">
          <article
            class="group h-full bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
            <div class="flex gap-1 mb-6">
              <span v-for="i in 5" :key="i" class="text-yellow-400 text-xl">★</span>
            </div>

            <blockquote class="text-gray-700 text-lg leading-relaxed mb-8 flex-1 font-light">"{{ review.text }}"
            </blockquote>

            <div class="h-px bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 mb-8"></div>

            <div class="flex items-center gap-4">
              <img :src="review.avatar" :alt="review.name"
                class="w-16 h-16 rounded-full object-cover ring-2 ring-blue-100 shadow-md" />
              <div>
                <h3 class="text-base font-semibold text-gray-900">{{ review.name }}</h3>
                <p class="text-sm text-gray-500">
                  <svg class="w-3.5 h-3.5 inline mr-1 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z" />
                  </svg>{{ review.location }} • {{ review.date }}
                </p>
              </div>
            </div>

            <div class="mt-6 flex flex-wrap gap-2">
              <span v-for="tag in review.tags" :key="tag"
                class="text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 hover:bg-blue-100 transition">{{
                tag }}</span>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
:deep(.swiper) {
  padding-bottom: 4rem;
}

:deep(.swiper-pagination) {
  bottom: 0 !important;
}

:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: #e5e7eb;
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  width: 32px;
  height: 12px;
  border-radius: 6px;
  background: linear-gradient(90deg, #2563eb, #1e40af);
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.4);
}

img {
  image-rendering: crisp-edges;
}
</style>