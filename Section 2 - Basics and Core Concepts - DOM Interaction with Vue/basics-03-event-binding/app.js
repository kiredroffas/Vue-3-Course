const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter = this.counter + 1;
      // this.counter++;
    },
    subtract() {
      this.counter = this.counter - 1;
      // this.counter--;
    }
  }
});

app.mount('#events');
