<script setup>
import { useRoomStores } from "@/stores/roomStore";

const store = useRoomStores();

</script>

<template>
    <div class="my-25 w-[90%] m-auto">
        <!-- СЕКЦИЯ ПОИСКА И ФИЛЬТРОВ -->
        <div class="bg-white rounded-2xl shadow-md p-8 pb-10 mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Найдите идеальный номер</h2>

            <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                <!-- Поиск по названию -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Поиск номера</label>
                    <input v-model="store.searchQuery" type="text" placeholder="Введите название..."
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1a2f] focus:border-transparent" />
                </div>

                <!-- Фильтр по цене -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Тип номера</label>
                    <select v-model="store.selectedPrice"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1a2f] focus:border-transparent bg-white">
                        <option value="all">Все цены</option>
                        <option value="budget">Бюджет</option>
                        <option value="standard">Стандарт</option>
                        <option value="premium">Премиум</option>
                    </select>
                </div>

                <!-- Фильтр по размеру -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Тип кровати</label>
                    <select v-model="store.selectedCapacity"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1a2f] focus:border-transparent bg-white">
                        <option value="all">Все размеры</option>
                        <option value="1">Односпальная</option>
                        <option value="2">Двуспальная</option>
                        <option value="3+">King-size</option>
                    </select>
                </div>

                <!-- Фильтр по категории -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Площадь номера</label>
                    <select v-model="store.selectedSize"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1a2f] focus:border-transparent bg-white">
                        <option value="all">Все номера</option>
                        <option value="standard">До 20 м²</option>
                        <option value="lux">20–35 м²</option>
                        <option value="studio">35+ м²</option>
                    </select>
                </div>

                <!-- Кнопка поиска -->
                <div class="flex items-end">
                    <button @click='store.resetFilters()'
                        class="w-full bg-[#0a1a2f] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#122b4a] transition-all duration-300 cursor-pointer">
                        Сбросить
                    </button>
                </div>
            </div>

        </div>

        <!-- КАРТОЧКИ НОМЕРОВ -->
        <div class="grid md:grid-cols-3 gap-8">
            <div v-for="room in store.getFilteredRooms" :key="room.id"
                class="bg-white text-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300">
                <img :src="room.image" :alt="room.title" class="h-56 w-full object-cover" />

                <div class="p-6 flex flex-col justify-between h-[260px]">
                    <div>
                        <p class="text-xl font-semibold mb-2">{{ room.title }}</p>
                        <p class="text-gray-600 text-sm mb-4">{{ room.desc }}</p>
                        <p class="text-gray-600 text-sm"></p>
                    </div>

                    <div class="flex justify-between items-center mt-auto">
                        <span class="font-medium text-sm sm:text-base text-[#0a1a2f]">
                            {{ room.price }}
                        </span>

                        <button
                            class="bg-[#0a1a2f] text-white px-4 py-2 rounded-lg hover:bg-[#122b4a] transition-all cursor-pointer">
                            Подробнее
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>