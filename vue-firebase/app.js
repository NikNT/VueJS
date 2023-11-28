const app = Vue.createApp({
  //data, functions
  data() {
    return {
      showBooks: true,
      url: "http://www.google.com",
      books: [
        {
          title: "Name of the Wind",
          author: "Patrick Rothfuss",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "The Way of Kings",
          author: "Brandon Sanderson",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle(title) {
      // this.title = "Shoe Dog";
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, num) {
      console.log(e, e.type);
      if (num) {
        console.log(num);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(index) {
      this.books[index].isFav = !this.books[index].isFav;
    },
  },
});

app.mount("#app");
