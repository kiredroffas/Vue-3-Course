const app = Vue.createApp({
    data() {
        return {
            name: 'Erik S',
            age: 28,
            imageLink: 'https://picsum.photos/200'
        };
    },
    methods: {
        addFiveToAge() {
            return this.age + 5;
        },
        getRandomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');