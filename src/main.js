module.exports = () => {
  const Student = require('./student.js');
  const Score = require('./score.js');
  const Scoresheet = require('./scoresheet.js');
  const currentStudents = new Map();
  const studentRegExp = /^[\u4e00-\u9fa5]{2,4}，[0-9]{4}，([\u4e00-\u9fa5]{2}：[0-9]{1,2}[0]?，?)+$/gi;
  const idRegExp = /^([0-9]{4}，?)+$/gi;

  function isInputValid(input) {
    return input.match(studentRegExp) ? true : false;
  }

  function isStudentIdValid(id) {
    return id.match(idRegExp) ? true : false;
  }

  function addScores(input) {
    const processedInput = input.split('，');
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
    return name;
  }
  const readlineSync = require('readline-sync');

  function showHints(hint) {
    let msg = '';
    switch (hint) {
      case 'scoreFormat':
        msg = '请输入学生信息（格式：姓名, 学号, 学科: 成绩, ...），按回车提交：\n';
        break;
      case 'wrongScoreFormat':
        msg = '请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：\n';
        break;
      case 'idFormat':
        msg = '请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n';
        break;
      case 'wrongIdFormat':
        msg = '请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n';
        break;
      default:
        break;
    }
    return readlineSync.question(msg);
  }

  function printScores(input) {
    const scoresheet = new Scoresheet(new Set());
    input.split('，').forEach(id => {
      if (currentStudents.has(id)) {
        scoresheet.appendStudent(currentStudents.get(id));
      }
    });
    readlineSync.question(scoresheet.printScoreSheet());
  }


  mainMenu();
}