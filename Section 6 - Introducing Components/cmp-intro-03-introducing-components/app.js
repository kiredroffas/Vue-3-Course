const app = Vue.createApp({
  data() {
    return {
      // friends: [
      //   {
      //     id: 1,
      //     name: 'Manuel Lorenz',
      //     phone: '01234 5678 991',
      //     email: 'manuel@localhost.com',
      //   },
      //   {
      //     id: 2,
      //     name: 'Julie Jones',
      //     phone: '09876 543 221',
      //     email: 'julie@localhost.com',
      //   },
      // ],
    };
  },
});

// Name components with '-' to avoid naming conflicts with actual html elements
app.component('friend-contact', {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 1,
        name: 'Manuel Lorenzo',
        phone: '01234 5678 991',
        email: 'manuel@localhost.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount('#app');
