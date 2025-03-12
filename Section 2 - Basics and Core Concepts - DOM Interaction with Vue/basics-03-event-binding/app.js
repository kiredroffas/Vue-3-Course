const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
      // this.counter++;
    },
    subtract(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    }
  }
});

app.mount('#events');
