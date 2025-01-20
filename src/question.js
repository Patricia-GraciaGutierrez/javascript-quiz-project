class Question {
    // YOUR CODE HERE:
    constructor (text, choices, answer, difficulty) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.difficulty = difficulty;
    }

    shuffleChoices() {
        this.choices.sort(() => Math.random() - 0.5);
    }
}