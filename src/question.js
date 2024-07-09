class Question {

    constructor(text, choices, answer, difficulty) {
        this.text = text
        this.choices = choices
        this.answer = answer
        this.difficulty = difficulty
    }

    shuffleChoices() {
        for (let i = this.choices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            // https://stackoverflow.com/a/12646864
            // [this.choices[i], this.choices[j]] = [this.choices[j], this.choices[i]]
            // can't access lexical declaration 'j' before initialization
            const temp = this.choices[i]
            this.choices[i] = this.choices[j]
            this.choices[j] = temp
        }
    }
}
