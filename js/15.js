// the number 15 corresponds with the lesson number in the netninja udemy course.
const app = new Vue({
  el: '#app',
  data: {
    pokemons: [
      {
        name: 'pikachu',
        type: 'electric',
        isFavorite: false,
        img:
          'https://i.pinimg.com/originals/51/07/75/510775920002ed607ff0a5582932214a.png',
      },
      {
        name: 'togepi',
        type: 'fairy',
        isFavorite: true,
        img:
          'https://www.vhv.rs/dpng/d/506-5062011_175-toca-p-pokmon-hd-png-download.png',
      },
      {
        name: 'squirtle',
        type: 'water',
        isFavorite: false,
        img: 'https://www.pngarts.com/files/3/Squirtle-PNG-Download-Image.png',
      },
    ],
  },
  methods: {
    favoriteToggle(mon) {
      mon.isFavorite = !mon.isFavorite;
    },
  },
});
