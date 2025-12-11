<script setup lang="ts">
import Hero from '@/components/Home/Hero.vue';
import roomBg from '@/assets/roomPageBg.png'
import Footer from '@/components/Home/Footer.vue';
import Rooms from '@/components/Rooms/Rooms.vue';

</script>

<template>
    <Hero title="НАШИ НОМЕРА" :bottomArrow="true" :bookBtn="false" :img="roomBg" />
    <Rooms />
    <Footer />
</template>