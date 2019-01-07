module.exports = () => {
  import Student from 'student.js';
  import Score from 'score.js';
  import Scoresheet from 'scoresheet.js';

  const currentStudents = new Map();

  function isInputValid(input) {
    const reg = /^[\u4e00-\u9fa5]{2,4}，[0-9]{4}，([\u4e00-\u9fa5]{2}：[0-9]{1,2}[0]?，?)+$/g;
    return input.match(reg) ? true : false;
  }

  function checkStudentId(id) {
    return currentStudents.has(id);
  }
}