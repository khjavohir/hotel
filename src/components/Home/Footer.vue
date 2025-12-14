<template>
    <footer class="bg-[#0a1a2f] text-white py-16 border-t border-gray-800">
        <div class="w-[90%] m-auto">
            <!-- Основная сетка -->
            <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                <!-- Колонка 1: Логотип + описание -->
                <div class="space-y-4">
                    <h3
                        class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        TownTower
                    </h3>
                    <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Будущее гостиничного бизнеса. Умные номера, неоновые виды,
                        AI-консьерж.
                    </p>
                </div>

                <!-- Колонка 2: Навигация -->
                <div>
                    <h4
                        class="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
                        Навигация
                    </h4>
                    <ul class="space-y-3 text-gray-400">
                        <li>
                            <a href="#" class="hover:text-white transition-colors">Главная</a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-white transition-colors">Номера</a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-white transition-colors">О нас</a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-white transition-colors">Контакты</a>
                        </li>
                    </ul>
                </div>

                <!-- Колонка 3: Услуги -->
                <div>
                    <h4
                        class="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
                        Услуги
                    </h4>
                    <ul class="space-y-3 text-gray-400">
                        <li>
                            <a href="#" class="hover:text-white transition-colors">Бронирование</a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-white transition-colors">Спецпредложения</a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-white transition-colors">Ресторан</a>
                        </li>
                        <li>
                            <a href="#" class="hover:text-white transition-colors">Спа</a>
                        </li>
                    </ul>
                </div>

                <!-- Колонка 4: Приложения -->
                <div>
                    <h4
                        class="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
                        Мобильное приложение
                    </h4>
                    <p class="text-sm text-gray-400 mb-4">
                        Бронируйте номера в один клик
                    </p>
                    <div class="flex gap-3">
                        <a href="#"
                            class="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 hover:bg-white/20 transition-all">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.37-2.49 4.1-2.49 1.28 0 2.08.79 3.14.79 1.02 0 1.66-.79 3.14-.79 1.05 0 2.17.41 3.14 1.09-.1.08-2.01 1.21-2.01 3.65 0 2.75 2.39 4.02 2.44 4.06-.03.16-.39.91-1.16 1.81zM12.04 6.09c-.04-.78.29-1.56.78-2.11.56-.62 1.43-.96 2.24-.91.07.8-.23 1.59-.78 2.13-.6.59-1.36.94-2.24.89z" />
                            </svg>
                            <span class="text-xs font-medium">App Store</span>
                        </a>
                        <a href="#"
                            class="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 hover:bg-white/20 transition-all">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M3 3h18v18H3V3zm4.5 15h9v-1.5h-9V18zm0-3h9v-1.5h-9V15zm0-3h9V10.5h-9V12zm0-3h9V7.5h-9V9z" />
                            </svg>
                            <span class="text-xs font-medium">Google Play</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Нижняя строка -->
            <div
                class="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <p>© 2013 Town Tower. Все права защищены.</p>
                <div class="flex gap-6">
                    <a href="#" class="hover:text-white transition-colors">Политика конфиденциальности</a>
                    <a href="#" class="hover:text-white transition-colors">Условия использования</a>
                </div>
            </div>
        </div>
    </footer>
</template>
