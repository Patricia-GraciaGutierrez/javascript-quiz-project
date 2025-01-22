class Quiz {
    // YOUR CODE HERE:
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    moveToNextQuestion() {
        this.currentQuestionIndex++;
    }

    shuffleQuestions() {
        this.questions.sort(() => Math.random() - 0.5);
    }

    checkAnswer(answer) {
        const correctAns = this.getQuestion().answer; /* quiz.questions[quiz.currentQuestionIndex] */
        if(!answer || this.currentQuestionIndex >= this.questions.length) {
            return
        } else if (answer === correctAns){
            this.correctAnswers++;
        }
    }

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false;
        } else {
            return true;
        };
    }

    filterQuestionsByDifficulty(difficulty) {
        if (difficulty > 0 && difficulty < 4) {
            const filteredQuestions = this.questions.filter(question => question.difficulty === difficulty);
            this.questions = filteredQuestions;
        }
    }

    averageDifficulty() {
        const sumDifficulties = this.questions.reduce(
            (accumulator, currentValue) => accumulator + currentValue.difficulty,
            0,
        );
        const avgDifficulty = sumDifficulties / this.questions.length;
        return avgDifficulty;
    }
}