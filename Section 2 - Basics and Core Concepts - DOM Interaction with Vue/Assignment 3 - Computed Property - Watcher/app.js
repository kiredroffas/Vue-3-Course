const app = Vue.createApp({
    data() {
        return {
            value: 0
        };
    },
    
    computed: {
        calculateValue() {
            if(this.value < 37) {
                return 'Not there yet';
            }
            else if(this.value === 37) {
                return 37;
            }
            else {
                return 'Too much!';
            }
        }
    },
    watch: {
        // Can watch a data value or a computed property

        // This watcher is triggered whenever the data value is changed
        // value() {

        // This watcher is triggered only when the computed property is changed
        calculateValue() {
            // Need to copy this into separate variable to use in setTimeout
            const thisDup = this;
            setTimeout(function() {
                console.log('Reset')
                thisDup.value = 0;
            },5000);
        }
    },
    methods: {
        addFive() {
            this.value = this.value + 5;
        },
        addOne() {
            this.value = this.value + 1;
        },
        addNumber(num) {
            this.value = this.value + num;
        }
    }
});

app.mount('#assignment');