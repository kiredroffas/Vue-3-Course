const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
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
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    // submitForm(event) {
    //   event.preventDefault();
    //   alert('submitted');
    // }
    submitForm() {
      alert('submitted');
    }
  }
});

app.mount('#events');
