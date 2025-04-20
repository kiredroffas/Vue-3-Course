const app = Vue.createApp({
  // Data properties
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  // Computed properties
  // Use computed properties for outputting dynamic values
  computed: {
    fullname() {
      console.log('Running..')
      if(this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Safford';
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
    outputFullname() {
      console.log('Running..')
      if(this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Safford';
    }
  }
});

app.mount('#events');
