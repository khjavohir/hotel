<script setup>
import aboutImg from "../../assets/about-img.jpg";
</script>

<template>
  <section class="py-20 md:py-32 bg-[#0a1a2f] text-white ">
    <div class="w-full max-w-[90%] mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div class="order-2 md:order-1">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">О нас</h2>
          <p class="text-gray-300 text-lg mb-8 leading-relaxed">
            <b>Town Tower</b> — это место, где сочетаются стиль, комфорт и внимание к деталям. Мы создали идеальное
            пространство
            для тех, кто ценит качество и минимализм. Каждый номер продуман до мелочей, а наша команда готова обеспечить
            максимум удобств и приятные впечатления от вашего пребывания.
          </p>
          <button
            class="w-full md:w-auto px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-400">
            Подробнее
          </button>
        </div>

        <div class="order-1 md:order-2">
          <img :src="aboutImg" alt="О нас" class="w-full h-[400px] object-cover rounded-2xl shadow-2xl" />
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div class="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all">
          <div class="text-4xl font-bold mb-2">15+</div>
          <p class="text-gray-400">лет опыта</p>
        </div>
        <div class="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all">
          <div class="text-4xl font-bold mb-2">500+</div>
          <p class="text-gray-400">довольных гостей</p>
        </div>
        <div class="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all">
          <div class="text-4xl font-bold mb-2">4.9 ★</div>
          <p class="text-gray-400">рейтинг</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
</style>
