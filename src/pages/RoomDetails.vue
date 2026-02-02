<script setup lang="ts">
import Detail from '@/components/Rooms/Detail.vue';
import Hero from '@/components/Home/Hero.vue';
import Footer from '@/components/Home/Footer.vue';
import roomBg from '@/assets/roomPageBg.png';

</script>

<template>
    <Hero title="ДЕТАЛИ НОМЕРА" :bottomArrow="false" :bookBtn="false" :img="roomBg" />
    <Detail />
    <Footer />
</template>