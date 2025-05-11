const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: 1,
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com',
          shown: false
        },
        {
          id: 2,
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com',
          shown: false
        },
      ],
    };
  },
  methods: {
    toggleDetails(id) {
      // this.detailsAreVisible = !this.detailsAreVisible;

      for (const friend of this.friends) {
        if(friend.id === id) {
          friend.shown = !friend.shown;
          break;
        }
      }

      console.log(this.friends);
    }
  }
});

app.mount('#app');
