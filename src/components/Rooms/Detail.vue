<script setup>
import { useRoomStores } from "@/stores/roomStore";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useRoomStores();

const room = computed(() =>
    store.rooms.find((e) => e.id === Number(route.params.id)),
);
</script>

<template>
    <div v-if="room" class="w-full">
        <!-- Галерея и основная информация -->
        <div class="w-[90%] m-auto py-12">
            <!-- Главное изображение - меньше и красивее -->
            <div class="mb-12 max-w-3xl">
                <img :src="room.image" :alt="room.title" class="w-full h-[250px] object-cover rounded-2xl shadow-lg" />
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Левая колонка: Описание и детали -->
                <div class="lg:col-span-2">
                    <!-- Заголовок и описание -->
                    <div class="mb-8">
                        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{{ room.title }}</h1>
                        <p class="text-lg text-gray-600 leading-relaxed">{{ room.desc }}</p>
                    </div>

                    <!-- Основные характеристики -->
                    <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">Характеристики номера</h2>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                            <!-- Вместимость -->
                            <div class="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
                                <svg class="w-8 h-8 text-blue-600 mb-2" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM6 20h12a6 6 0 00-6-6 6 6 0 00-6 6z" />
                                </svg>
                                <p class="text-gray-500 text-sm">Вместимость</p>
                                <p class="text-2xl font-bold text-gray-900">{{ room.capacity }}</p>
                            </div>

                            <!-- Размер -->
                            <div class="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
                                <svg class="w-8 h-8 text-green-600 mb-2" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                                <p class="text-gray-500 text-sm">Размер</p>
                                <p class="text-2xl font-bold text-gray-900">{{ room.size }}m²</p>
                            </div>

                            <!-- Завтрак -->
                            <div class="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
                                <svg class="w-8 h-8 mb-2" :class="room.breakfast ? 'text-orange-600' : 'text-gray-400'"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <p class="text-gray-500 text-sm">Завтрак</p>
                                <p class="text-xl font-bold"
                                    :class="room.breakfast ? 'text-green-600' : 'text-red-600'">
                                    {{ room.breakfast ? "✓ Включен" : "Нет" }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Удобства и сервис -->
                    <div class="mb-8">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">Удобства и сервис</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div v-for="(extra, index) in room.extras" :key="index"
                                class="flex items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                                <svg class="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="text-gray-800 font-medium">{{ extra }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Правая колонка: Бронирование и цена -->
                <div>
                    <div class="sticky top-20 bg-white rounded-2xl shadow-xl overflow-hidden">
                        <!-- Цена -->
                        <div class="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
                            <p class="text-sm font-semibold opacity-90 mb-2">Цена за ночь</p>
                            <p class="text-4xl font-bold mb-4">{{ room.price.toLocaleString() }} сум</p>
                            <p class="text-sm opacity-90">Финальная цена без скрытых комиссий</p>
                        </div>

                        <!-- Кнопки действия -->
                        <div class="p-8 space-y-3">
                            <button
                                class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">
                                Забронировать
                            </button>
                            <button
                                class="w-full border-2 border-gray-300 text-gray-800 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                                Задать вопрос
                            </button>
                        </div>

                        <!-- Дополнительная информация -->
                        <div class="border-t border-gray-200 p-8 space-y-4 text-sm">
                            <div class="flex items-center text-gray-700">
                                <svg class="w-5 h-5 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
                                </svg>
                                Свободные номера в наличии
                            </div>
                            <div class="flex items-center text-gray-700">
                                <svg class="w-5 h-5 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
                                </svg>
                                Отмена до 24 часов
                            </div>
                            <div class="flex items-center text-gray-700">
                                <svg class="w-5 h-5 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
                                </svg>
                                Безопасное бронирование
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Сообщение если номер не найден -->
    <div v-else class="w-[90%] m-auto py-20 text-center">
        <h1 class="text-3xl font-bold text-gray-900">Номер не найден</h1>
        <router-link to="/rooms"
            class="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Вернуться к номерам
        </router-link>
    </div>
</template>
