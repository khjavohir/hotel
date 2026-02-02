import { defineStore } from "pinia";
import { roomsData } from "@/data/rooms";
import { computed, ref } from "vue";

export const useRoomStores = defineStore("roomStores", () => {
  const searchQuery = ref("");
  const selectedPrice = ref("all");
  const selectedCapacity = ref("all");
  const selectedSize = ref("all");

  const rooms = ref(roomsData);
  const getRooms = computed(() => rooms.value.filter((room) => room));
  const getPopularRooms = computed(() =>
    rooms.value.filter((room) => room.isPopular),
  );
  const previewGallery = computed(() =>
    rooms.value.filter((room) => room.isShowGallery),
  );

  const getFilteredRooms = computed(() => {
    return rooms.value.filter((room) => {
      const matchSearch = room.title
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase());

      // Фильтр по цене: преобразуем категории в диапазоны
      let matchPrice = true;
      if (selectedPrice.value === "budget") {
        matchPrice = room.price < 600000;
      } else if (selectedPrice.value === "standard") {
        matchPrice = room.price >= 600000 && room.price < 1500000;
      } else if (selectedPrice.value === "premium") {
        matchPrice = room.price >= 1500000;
      }

      // Фильтр по кровати: сравниваем capacity как число
      const matchBed =
        selectedCapacity.value === "all" ||
        room.capacity === parseInt(selectedCapacity.value);

      // Фильтр по площади
      let matchArea = true;
      if (selectedSize.value === "standard") {
        matchArea = room.size && room.size <= 20;
      } else if (selectedSize.value === "lux") {
        matchArea = room.size && room.size > 20 && room.size <= 35;
      } else if (selectedSize.value === "studio") {
        matchArea = room.size && room.size > 35;
      }

      return matchSearch && matchPrice && matchBed && matchArea;
    });
  });

  function resetFilters() {
    searchQuery.value = "";
    selectedPrice.value = "all";
    selectedCapacity.value = "all";
    selectedSize.value = "all";
  }

  return {
    getPopularRooms,
    rooms,
    previewGallery,
    getRooms,
    getFilteredRooms,
    resetFilters,
    searchQuery,
    selectedPrice,
    selectedCapacity,
    selectedSize,
  };
});
