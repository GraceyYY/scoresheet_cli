module.exports = () => {
  import Student from 'student.js';
  import Score from 'score.js';
  import Scoresheet from 'scoresheet.js';
  const currentStudents = new Map();
  const regExp = /^[\u4e00-\u9fa5]{2,4}，[0-9]{4}，([\u4e00-\u9fa5]{2}：[0-9]{1,2}[0]?，?)+$/g;

  function isInputValid(input) {
    return input.match(regExp) ? true : false;
  }

  function checkStudentId(id) {
    return currentStudents.has(id);
  }

  function addScores(input) {
    const processedInput = input.match(regExp)[0].split('，')；
    const name = processedInput[0];
    const id = processedInput[1];
    const scoresArr = processedInput.slice(2).map(item => item.split('：'));

    if (!currentStudents.has(id)) {
      let score = new Score(new Map(scoresArr));
      let student = new Student(name, id, score);
      currentStudents.set(id, student);
    } else {
      let student = currentStudents.get(id);
      for (let [subject, grade] of scoresArr) {
        student.score.set(subject, grade);
      }
    }
  }
}