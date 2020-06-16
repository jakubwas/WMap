const generateQuiz = (quizArray, setGeneratedQuiz) => {
    let countryOrState;
    let quiz = [null];
    for (let i = 0; i < 10; i++) {
        countryOrState = quizArray[Math.floor(Math.random() * quizArray.length)];
        if (!quiz.includes(countryOrState)) {
            quiz.push(countryOrState);
        } else {
            i--;
        }
    }
    setGeneratedQuiz(quiz);
};

export default generateQuiz;
