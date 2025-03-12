const app = Vue.createApp({
    data() {
        return {
            paragraph1Output: 'OUTPUT',
            paragraph2Output: '',
            paragraph2OutputConfirm: 'OUTPUT'
        };
    },
    methods: {
        showAlert() {
            alert('alert triggered!');
        },
        saveInput(event) {
            this.paragraph1Output = event.target.value;
        },
        saveInput2(event) {
            this.paragraph2Output = event.target.value;
        },
        confirmInput2() {
            this.paragraph2OutputConfirm = this.paragraph2Output;
        }
    }
})

app.mount('#assignment');