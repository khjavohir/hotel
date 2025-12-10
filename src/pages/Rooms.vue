<template>
  <div class="min-h-screen font-sans bg-gray-900 text-white">
    <!-- HEADER -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur px-6 py-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-white/10 rounded flex items-center justify-center text-2xl font-bold">T</div>
          <div>
            <div class="text-lg font-semibold">Town Hotel</div>
            <div class="text-xs text-gray-300">Бутик-отель</div>
          </div>
        </div>

        <nav class="hidden md:flex gap-8 text-sm text-white/90">
          <a href="#" class="hover:text-white">ГЛАВНАЯ</a>
          <a href="#rooms" class="hover:text-white">КОМНАТЫ</a>
          <a href="#services" class="hover:text-white">УСЛУГИ</a>
          <a href="#contact" class="hover:text-white">КОНТАКТЫ</a>
        </nav>

        <div class="hidden sm:flex items-center gap-4">
          <button class="px-4 py-2 border border-white/60 uppercase text-sm tracking-wide">Забронировать</button>
        </div>

        <!-- mobile placeholder -->
        <button class="md:hidden p-2">☰</button>
      </div>
    </header>

    <!-- HERO -->
    <section
      class="h-screen w-full flex items-center justify-center bg-cover bg-center"
      :style="{ backgroundImage: `url(${heroImg})` }"
    >
      <div class="w-full h-full bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center text-center px-4">
        <h1 class="text-4xl md:text-6xl font-medium tracking-tight mb-2">НАШИ НОМЕРА</h1>
        <p class="max-w-3xl text-sm md:text-lg text-white/80 mb-8">
          Удобные номера, стильный интерьер и сервис премиум-класса. Выберите номер и забронируйте прямо сейчас.
        </p>

        <router-link to="/rooms"
          class="px-6 py-3 border border-white uppercase tracking-widest text-sm font-semibold hover:scale-105 transition"
        >
          Забронировать
        </router-link>

        <!-- arrow -->
        <div
          @click="scrollToRooms"
          class="mt-10 cursor-pointer select-none"
          title="Листай вниз"
        >
          <svg class="w-10 h-10 animate-bounce-down text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>

    <!-- ROOMS SECTION -->
    <section id="rooms" ref="roomsSection" class="pt-24 pb-16">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Controls -->
        <div class="flex flex-col md:flex-row gap-4 md:items-end md:justify-between mb-6">
          <div class="flex gap-4 w-full md:w-auto">
            <input v-model="filters.query" @input="applyFilters"
              class="px-3 py-2 rounded bg-white/5 placeholder:text-white/60 w-full md:w-80"
              placeholder="Поиск: люкс, вид на город, king bed..." />

            <select v-model="filters.type" @change="applyFilters" class="px-3 py-2 rounded bg-white/5">
              <option value="">Все типы</option>
              <option v-for="t in uniqueTypes" :key="t" :value="t">{{ t }}</option>
            </select>

            <select v-model.number="filters.guests" @change="applyFilters" class="px-3 py-2 rounded bg-white/5">
              <option value="0">Гости</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3+</option>
            </select>
          </div>

          <div class="flex gap-3 items-center">
            <label class="text-sm text-white/80">Сортировать:</label>
            <select v-model="sortBy" @change="applyFilters" class="px-3 py-2 rounded bg-white/5">
              <option value="price_asc">Цена ↑</option>
              <option value="price_desc">Цена ↓</option>
            </select>
          </div>
        </div>

        <!-- Grid -->
        <div v-if="loading" class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="n in 6" :key="n" class="p-4 rounded bg-white/5 animate-pulse h-48"></div>
        </div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="room in pagedRooms" :key="room.id" class="bg-white/5 rounded overflow-hidden shadow-md">
            <div class="h-48 bg-cover bg-center" :style="{ backgroundImage: `url(${room.image})` }"></div>
            <div class="p-4">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-xl font-semibold">{{ room.name }}</h3>
                  <div class="text-xs text-white/70">{{ room.type }} • {{ room.size }} м²</div>
                </div>
                <div class="text-right">
                  <div class="text-lg font-bold">${{ room.price }}</div>
                  <div class="text-xs text-white/70">за ночь</div>
                </div>
              </div>

              <p class="mt-3 text-sm text-white/80 line-clamp-3">{{ room.description }}</p>

              <div class="mt-4 flex items-center justify-between">
                <div class="flex gap-2 text-sm text-white/80">
                  <span v-for="(f, idx) in room.features.slice(0,3)" :key="idx" class="px-2 py-1 bg-white/6 rounded text-xs">
                    {{ f }}
                  </span>
                </div>

                <div class="flex gap-2">
                  <button @click="openDetails(room)" class="px-3 py-2 border border-white/40 rounded text-sm">Подробнее</button>
                  <button @click="startBooking(room)" class="px-3 py-2 bg-white text-black rounded text-sm font-semibold">Забронировать</button>
                </div>
              </div>
            </div>
          </div>

          <!-- если нет результатов -->
          <div v-if="filteredRooms.length === 0" class="col-span-full text-center text-white/60 py-16">
            Ничего не найдено по вашим критериям.
          </div>
        </div>

        <!-- Pagination (простая) -->
        <div class="mt-8 flex justify-center items-center gap-3">
          <button @click="prevPage" :disabled="page === 1" class="px-3 py-1 rounded bg-white/5">Prev</button>
          <div>Страница {{ page }} из {{ totalPages }}</div>
          <button @click="nextPage" :disabled="page === totalPages" class="px-3 py-1 rounded bg-white/5">Next</button>
        </div>
      </div>
    </section>

    <!-- MODAL DETAILS -->
    <transition name="fade">
      <div v-if="activeRoom" class="fixed inset-0 z-60 flex items-center justify-center bg-black/60">
        <div class="bg-gray-800 w-11/12 md:w-3/4 lg:w-1/2 rounded shadow-xl overflow-hidden">
          <div class="flex justify-between items-start p-4">
            <h3 class="text-xl font-semibold">{{ activeRoom.name }}</h3>
            <button @click="activeRoom = null" class="text-white/70">✕</button>
          </div>
          <div class="h-64 bg-cover bg-center" :style="{ backgroundImage: `url(${activeRoom.image})` }"></div>
          <div class="p-4">
            <p class="text-sm text-white/80">{{ activeRoom.description }}</p>

            <div class="mt-4 grid grid-cols-2 gap-2">
              <div class="text-sm"><strong>Тип:</strong> {{ activeRoom.type }}</div>
              <div class="text-sm"><strong>Цена:</strong> ${{ activeRoom.price }} / ночь</div>
              <div class="text-sm"><strong>Гостей:</strong> {{ activeRoom.guests }}</div>
              <div class="text-sm"><strong>Размер:</strong> {{ activeRoom.size }} м²</div>
            </div>

            <div class="mt-4 flex gap-3">
              <button @click="startBooking(activeRoom)" class="px-4 py-2 bg-white text-black rounded font-semibold">Забронировать</button>
              <button @click="activeRoom = null" class="px-4 py-2 border rounded">Закрыть</button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- FOOTER -->
    <footer id="contact" class="bg-black/60 mt-12 py-10">
      <div class="max-w-7xl mx-auto px-4 text-white/80">
        <div class="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h4 class="text-lg font-semibold">Town Hotel</h4>
            <p class="text-sm">Адрес: Улица Примерная, 12 — центр города</p>
            <p class="text-sm mt-2">Тел: +998 90 123 45 67</p>
          </div>

          <div class="text-sm">
            <div class="font-semibold">Меню</div>
            <div class="mt-2 flex gap-4">
              <a href="#" class="text-white/70">Главная</a>
              <a href="#" class="text-white/70">Комнаты</a>
              <a href="#" class="text-white/70">Контакты</a>
            </div>
          </div>
        </div>

        <div class="text-xs text-white/50 mt-6">© Town Hotel — все права защищены</div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';

/* ====== MOCK DATA (JSON) ======
   Заменяй на реальный fetch('/rooms.json') при необходимости */
const rooms = ref([
  {
    id: 1,
    name: 'Deluxe Room',
    type: 'Deluxe',
    price: 120,
    guests: 2,
    size: 28,
    available: true,
    features: ['WiFi', 'Балкон', 'Завтрак'],
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=af4d4871f8b3b4bfc3f2c2a2e6f3b8c9',
    description: 'Стильный номер с мягкой кроватью, видом на город и всеми удобствами.'
  },
  {
    id: 2,
    name: 'Standard Room',
    type: 'Standard',
    price: 70,
    guests: 2,
    size: 20,
    available: true,
    features: ['WiFi', 'Телевизор'],
    image: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3a1e6b0f6d3c2b9fef1a7b2956d2f8df',
    description: 'Уютный номер для короткой деловой или туристической поездки.'
  },
  {
    id: 3,
    name: 'Suite with View',
    type: 'Suite',
    price: 210,
    guests: 3,
    size: 45,
    available: false,
    features: ['WiFi', 'Вид', 'Кухня'],
    image: 'https://images.unsplash.com/photo-1542317854-2f3c99f25c20?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=9f3f0b9d6a1a6a1c9d4a4a6e3a9b8f7c',
    description: 'Просторный люкс с панорамными окнами и видом на город.'
  },
  {
    id: 4,
    name: 'Family Room',
    type: 'Family',
    price: 160,
    guests: 4,
    size: 38,
    available: true,
    features: ['WiFi', 'Кровати', 'Завтрак'],
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=8e6d0b9f9e1c4f0a1a2a3b4c5d6e7f0a',
    description: 'Удобное семейное пространство с двумя кроватями и детской зоной.'
  },
  {
    id: 5,
    name: 'Presidential Suite',
    type: 'Suite',
    price: 450,
    guests: 2,
    size: 80,
    available: true,
    features: ['WiFi', 'Джакузи', 'Консьерж'],
    image: 'https://images.unsplash.com/photo-1505691723518-36a1fb1a4d1f?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=0cc4b3a4f5b6f7d8e9c0d1b2a3e4f5a6',
    description: 'Самый роскошный номер для VIP-гостей.'
  },
  {
    id: 6,
    name: 'Economy Single',
    type: 'Standard',
    price: 45,
    guests: 1,
    size: 15,
    available: true,
    features: ['WiFi'],
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=5c3a2b6b7d8f9e0a1b2c3d4e5f6a7b8c',
    description: 'Небольшой и экономичный номер — удобен для одной персоны.'
  }
]);

/* ====== UI state ====== */
const loading = ref(false);
const heroImg = 'https://images.unsplash.com/photo-1501117716987-c8e2bfb7e2c3?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&s=1234567890abcdef';
const filters = reactive({
  query: '',
  type: '',
  guests: 0,
  dateFrom: '',
  dateTo: ''
});
const sortBy = ref('price_asc');
const filteredRooms = ref([]);
const page = ref(1);
const perPage = 6;
const activeRoom = ref(null);

/* ====== Computed ====== */
const uniqueTypes = computed(() => {
  const s = new Set(rooms.value.map(r => r.type));
  return Array.from(s);
});

const totalPages = computed(() => Math.max(1, Math.ceil(filteredRooms.value.length / perPage)));

const pagedRooms = computed(() => {
  const start = (page.value - 1) * perPage;
  return filteredRooms.value.slice(start, start + perPage);
});

/* ====== Functions ====== */
function applyFilters() {
  loading.value = true;
  // простая фильтрация по json
  let res = rooms.value.slice();

  // query: search in name and description (case-insensitive)
  if (filters.query && filters.query.trim() !== '') {
    const q = filters.query.trim().toLowerCase();
    res = res.filter(r => (r.name + ' ' + r.description).toLowerCase().includes(q));
  }

  // type
  if (filters.type) {
    res = res.filter(r => r.type === filters.type);
  }

  // guests
  if (filters.guests && filters.guests > 0) {
    if (filters.guests === 3) {
      res = res.filter(r => r.guests >= 3);
    } else {
      res = res.filter(r => r.guests === filters.guests);
    }
  }

  // simple availability by dates (demo): if room.available === false -> filter out
  // (Можно расширить: хранить booked ranges в json и проверять пересечения)
  res = res.filter(r => r.available !== false);

  // sort
  if (sortBy.value === 'price_asc') {
    res.sort((a,b) => a.price - b.price);
  } else if (sortBy.value === 'price_desc') {
    res.sort((a,b) => b.price - a.price);
  }

  // assign
  filteredRooms.value = res;
  page.value = 1;
  setTimeout(() => loading.value = false, 200); // небольшая имитация загрузки
}

function scrollToRooms() {
  const el = roomsSection.value;
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80; // учесть header
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

function openDetails(room) {
  activeRoom.value = room;
}

function startBooking(room) {
  alert(`Начать бронирование: ${room.name} — переход на форму/страницу бронирования`);
  // Здесь можно перенаправить на форму /rooms/:id/booking
}

function prevPage() {
  if (page.value > 1) page.value--;
}

function nextPage() {
  if (page.value < totalPages.value) page.value++;
}

/* ref to section */
const roomsSection = ref(null);

/* ====== lifecycle ====== */
onMounted(() => {
  // симулируем fetch
  loading.value = true;
  setTimeout(() => {
    applyFilters();
  }, 300);
});
</script>

<style scoped>
@keyframes bounceDown {
  0% { transform: translateY(0); opacity: 0.8; }
  50% { transform: translateY(12px); opacity: 1; }
  100% { transform: translateY(0); opacity: 0.8; }
}
.animate-bounce-down {
  animation: bounceDown 1.6s infinite ease-in-out;
}

/* simple fade for modal */
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* utility for text clamp (you can include line-clamp plugin in Tailwind) */
.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
