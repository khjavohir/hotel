<script setup lang="ts">
import Hero from '@/components/Home/Hero.vue';
import roomBg from '@/assets/roomPageBg.png'

</script>

<template>
    <Hero title="НАШИ НОМЕРА" :bottomArrow="true" :bookBtn="false" :img="roomBg" />
</template>