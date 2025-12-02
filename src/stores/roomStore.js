import { defineStore } from "pinia";
import { roomsData } from "@/data/rooms";
import { computed, ref } from "vue";

export const useRoomStores = defineStore("roomStores", () => {
  const rooms = ref(roomsData);
  const getRooms = computed(() => rooms.value.filter(room => room.isPopular));
  const previewGallery = computed(() => rooms.value.filter(room => room.isShowGallery))

  return { getRooms, rooms, previewGallery };
});