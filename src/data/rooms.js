// Импорты изображений
import room1 from '@/assets/room1.jpg'
import room2 from '@/assets/room2.jpg'
import room3 from '@/assets/room3.jpg'
import room4 from '@/assets/room4.jpg'
import room5 from '@/assets/room5.jpg'
import room6 from '@/assets/room6.jpg'
import room7 from '@/assets/room7.jpg'
import room8 from '@/assets/room8.jpg'
import room9 from '@/assets/room9.jpg'
import room10 from '@/assets/room10.jpg'
import room11 from '@/assets/room11.jpg'
import room12 from '@/assets/room12.jpg'

export const roomsData = [
  {
    id: 1,
    title: "Одноместный номер",
    price: 550000,
    capacity: 1,
    size: 25,
    breakfast: false,
    isPopular: false,
    desc: "Уютный номер для одного гостя, идеален для краткосрочных поездок.",
    extras: ["Wi-Fi", "Кондиционер", "Телевизор"],
    image: room1,
    isShowGallery: true
  },
  {
    id: 2,
    title: "Двухместный номер",
    price: 750000,
    capacity: 2,
    size: 25,
    breakfast: true,
    isPopular: false,
    desc: "Комфортный двухместный номер с просторной кроватью и рабочей зоной.",
    extras: ["Wi-Fi", "Кондиционер", "Телевизор", "Рабочий стол"],
    image: room2,
    isShowGallery: true
  },
  {
    id: 3,
    title: "Стандартный номер",
    price: 680000,
    capacity: 2,
    size: 30,
    breakfast: false,
    isPopular: false,
    desc: "Классический стандартный номер для комфортного проживания.",
    extras: ["Wi-Fi", "Телевизор", "Мини-холодильник"],
    image: room3,
    isShowGallery: true
  },
  {
    id: 4,
    title: "Семейный номер",
    price: 1200000,
    capacity: 4,
    size: 35,
    breakfast: true,
    isPopular: true,
    desc: "Идеален для семей с детьми: много пространства и дополнительные удобства.",
    extras: ["Wi-Fi", "Телевизор", "Кондиционер", "Детская кроватка"],
    image: room4,
    isShowGallery: true
  },
  {
    id: 5,
    title: "Номер Делюкс",
    price: 1500000,
    capacity: 2,
    size: 20,
    breakfast: true,
    isPopular: true,
    desc: "Стильный номер повышенной комфортности с дизайнерским интерьером.",
    extras: ["Wi-Fi", "Кондиционер", "Кофемашина", "Сейф"],
    image: room5,
    isShowGallery: true
  },
  {
    id: 6,
    title: "Люкс",
    price: 2500000,
    capacity: 3,
    size: 40,
    breakfast: true,
    isPopular: true,
    desc: "Элегантный люкс с отдельной гостиной зоной и панорамным видом.",
    extras: ["Wi-Fi", "Телевизор", "Джакузи", "Мини-бар"],
    image: room6,
    isShowGallery: true
  },
  {
    id: 7,
    title: "Эконом номер",
    price: 450000,
    capacity: 1,
    size: 30,
    breakfast: false,
    isPopular: false,
    desc: "Недорогой вариант для коротких остановок, без лишних удобств.",
    extras: ["Wi-Fi"],
    image: room7,
    isShowGallery: false
  },
  {
    id: 8,
    title: "Двухместный Twin",
    price: 800000,
    capacity: 2,
    size: 25,
    breakfast: true,
    isPopular: false,
    desc: "Две отдельные кровати, идеальный вариант для друзей или коллег.",
    extras: ["Wi-Fi", "Телевизор", "Зеркало", "Шкаф"],
    image: room8,
    isShowGallery: false
  },
  {
    id: 9,
    title: "Президентский люкс",
    price: 5000000,
    capacity: 3,
    size: 50,
    breakfast: true,
    isPopular: false,
    desc: "Самый роскошный номер отеля с огромной площадью и премиум-сервисом.",
    extras: ["Wi-Fi", "Джакузи", "Мини-бар", "Домашний кинотеатр"],
    image: room9,
    isShowGallery: false
  },
  {
    id: 10,
    title: "Номер для новобрачных",
    price: 2700000,
    capacity: 2,
    size: 30,
    breakfast: true,
    isPopular: false,
    desc: "Романтический номер с декоративным освещением и уютной атмосферой.",
    extras: ["Wi-Fi", "Кондиционер", "Джакузи", "Мини-бар"],
    image: room10,
    isShowGallery: false
  },
  {
    id: 11,
    title: "Премиум номер",
    price: 1800000,
    capacity: 3,
    size: 45,
    breakfast: true,
    isPopular: false,
    desc: "Современный премиум номер с большим телевизором и мягкой кроватью.",
    extras: ["Wi-Fi", "Телевизор", "Кондиционер", "Мини-бар"],
    image: room11,
    isShowGallery: false
  },
  {
    id: 12,
    title: "Супериор номер",
    price: 1300000,
    capacity: 2,
    size: 40,
    breakfast: false,
    isPopular: false,
    desc: "Номер повышенной комфортности с качественной мебелью и тёплым дизайном.",
    extras: ["Wi-Fi", "Телевизор", "Кондиционер"],
    image: room12,
    isShowGallery: false
  }
]
