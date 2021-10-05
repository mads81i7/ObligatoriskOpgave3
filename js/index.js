Vue.createApp({
    data() {
        return {
            WordToManipulate: null,
            ShowResult: false,
            Words: []
        }
    },
    methods: {
        Manipulate(Word) {
            this.Words.push(Word)
            this.Words.push(Word.toLowerCase())
            this.Words.push(Word.toUpperCase())
            this.ShowResult = true;
        }
    }
}).mount("#app")