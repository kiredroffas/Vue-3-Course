const app = Vue.createApp({
    data() {
        return {
            taskInput: '',
            taskID: 0,
            tasks: [],
            displayList: true
        };
    },
    computed: {
        toggleButtonCaption() {
            return this.displayList ? 'Hide' : 'Show';
        }
    },
    methods: {
        addTask() {
            this.tasks.push({task: this.taskInput, id: this.taskID});
            this.taskID++;
        },
        toggleList() {
            this.displayList = !this.displayList;
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        }
    }
});

app.mount('#assignment');