(function () {
    var questionList = document.getElementById('question-list');
    var questionTemplate = document.getElementById('qunestion-template');
    var answerTemplate = document.getElementById('answer-template');
    var btnAddQuestion = document.getElementById('btnAddQuestion');
    var btnCreate = document.getElementById('btnCreate');
    var questionCount = 0;

    btnAddQuestion.addEventListener('click', addQuestionTemplate);
    btnCreate.addEventListener('click', createQuiz);

    function createQuiz(e) {
        // var formData = new FormData(quizForm);
        // var convertedJSON = {};
        // formData.forEach(function (value, key) {
        //     convertedJSON[key] = value;
        // });
        // console.log(convertedJSON);
        e.preventDefault();
        $('#quiz').serializeToJSON();
    }

    function addAnswer(e) {
        // var source = e.target.getAttribute('data-source');
        // var sourceNode = document.querySelector(`[data-source=${source}]`);
        // var answerList = sourceNode.querySelector('.answers');
        // var currentAnswerCount = answerList.querySelectorAll('li').length;
        // var answerNode = answerTemplate.content.cloneNode(true);
        // answerNode.querySelector('.answer-radio').setAttribute('name', source);
        // answerNode.querySelector('.answer-description').setAttribute('name', `${source}.answer${currentAnswerCount + 1}.description`);
        // answerNode.querySelector('.answer-radio').setAttribute('name', `${source}.answer.correct`);
        // answerNode.querySelector('.answer-radio').setAttribute('data-answer', `answer${currentAnswerCount + 1}`);
        // answerList.appendChild(answerNode);

        var source = e.target.getAttribute('data-source');
        var sourceNode = document.querySelector(`[data-source='${source}']`);
        var answerList = sourceNode.querySelector('.answers');
        var currentAnswerCount = answerList.querySelectorAll('li').length;
        var answerNode = answerTemplate.content.cloneNode(true);
        answerNode.querySelector('.answer-description').setAttribute('name', `quiz.${source}.answer[${currentAnswerCount}].description`);
        answerNode.querySelector('.answer-radio').setAttribute('name', `quiz.${source}.answer.correct`);
        // answerNode.querySelector('.answer-radio').setAttribute('data-answer', `answer${currentAnswerCount + 1}`);
        answerList.appendChild(answerNode);

        // quiz.question[${questionCount}]
    }

    function addQuestionTemplate() {
        // questionCount = questionCount + 1;
        // var datasource = `question${questionCount}`;
        // var questionNode = questionTemplate.content.cloneNode(true);
        // // Add Question Header
        // questionNode.querySelector('.question-header').innerText = `Question ${questionCount}`;
        // questionNode.querySelector('.question-item').setAttribute('data-source', datasource);
        // questionNode.querySelector('#btnAddAnswer').setAttribute('data-source', datasource);
        // questionNode.querySelector('#btnAddAnswer').addEventListener('click', addAnswer);
        // questionNode.querySelector('.btn-delete').setAttribute('data-source', datasource);
        // questionNode.querySelector('.answer-description').setAttribute('name', `${datasource}.answer1.description`);
        // questionNode.querySelector('.answer-radio').setAttribute('name', `${datasource}.answer.correct`);
        // questionNode.querySelector('.answer-radio').setAttribute('data-answer', 'answer1');
        // questionList.appendChild(questionNode);


        var datasource = `question[${questionCount}]`;
        var questionNode = questionTemplate.content.cloneNode(true);
        // Add Question Header
        questionNode.querySelector('.question-header').innerText = `Question ${questionCount}`;
        questionNode.querySelector('.question-item').setAttribute('data-source', datasource);
        questionNode.querySelector('#btnAddAnswer').setAttribute('data-source', datasource);
        questionNode.querySelector('#btnAddAnswer').addEventListener('click', addAnswer);
        questionNode.querySelector('.btn-delete').setAttribute('data-source', datasource);
        questionNode.querySelector('.answer-description').setAttribute('name', `quiz.question[${questionCount}].answer[0].description`);
        questionNode.querySelector('.answer-radio').setAttribute('name', `quiz.question[${questionCount}].answer.correct`);
        questionNode.querySelector('.answer-radio').setAttribute('data-answer', 'answer[0]');
        questionList.appendChild(questionNode);
        questionCount = questionCount + 1;
    }
})();