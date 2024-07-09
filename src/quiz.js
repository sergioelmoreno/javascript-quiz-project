class Quiz {
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions
        this.timeLimit = timeLimit
        this.timeRemaining = timeRemaining
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }
    // Return a question Object
    getQuestion() {
        return this.questions[this.currentQuestionIndex]
    }
    // plus 1 to the index to locate the next question index in the Array
    moveToNextQuestion() {
        this.currentQuestionIndex++
    }
    // Randomize the order of the questions Array
    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = this.questions[i]
            this.questions[i] = this.questions[j]
            this.questions[j] = temp
        }
    }
    // If the answer is correct add 1 point 
    checkAnswer(answer) {
        const currentquestion = this.getQuestion()
        if (answer === currentquestion.answer) {
            this.correctAnswers++
        }
    }
    // Check if the Quiz is currently active (Between 1 and 3 questions)
    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false
        } else if (this.currentQuestionIndex === this.questions.length) {
            return true
        }
    }
    // Filter only the questions with the same provided difficulty
    filterQuestionsByDifficulty(difficulty) {
        if (difficulty > 0 && difficulty <= 3) {
            this.questions = this.questions.filter((question) => question.difficulty === difficulty)
        }
    }
    // Calculate the average difficulty (Number) of all the questions  
    averageDifficulty() {
        const averageDifficulty = this.questions.reduce((acc, currentQuestion) => {
            return acc + currentQuestion.difficulty
        }, 0)
        return averageDifficulty / this.questions.length
    }
}