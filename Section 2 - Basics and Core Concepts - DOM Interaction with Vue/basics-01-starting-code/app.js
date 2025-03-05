const app = Vue.createApp({
    // data: function() {  // Alternate data function syntax
    //     return {
    //          courseGoal: 'Finish the course and learn Vue!'
    //     };
    // }
    data() {  // Data variables
        return {
            courseGoal: 'Learn new code!',
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            courseGoalHeader: '<h2 style="color:white">Have fun!</h2>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {  // Methods
        // outputGoal: function() {}  // Alternate function syntax
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return this.courseGoalA; // Use this. to access data variable
            }
            else {
                return this.courseGoalB; // Use this. to access data variable
            }
        }
    }
});

app.mount('#user-goal');  // Mount Vue app to element with id user-goal