const app = Vue.createApp({
    data() {
        return {
            userEnteredClass: '',
            paragraphVisible: true,
            bgColor: ''
        };
    },
    computed: {
        updateUserEnteredClass() {
            return {
                user1: this.userEnteredClass === 'user1', 
                user2: this.userEnteredClass === 'user2',
                visible: this.paragraphVisible,
                hidden: !this.paragraphVisible
            };
        }
    },
    methods: {
        toggleVisible() {
            this.paragraphVisible = !this.paragraphVisible;
        }
    }
});

app.mount('#assignment');