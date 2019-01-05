class Scoresheet {
  constructor(students) {
    this.students = students;
    this.scoresheetTitle = `
    成绩单
    姓名|数学|语文|英语|编程|平均分|总分
    ========================`;
  }
  appendStudent(student) {
    this.students.add(student);
  }
  getStudentTotalScores() {
    let totalScores = [];
    this.students.forEach(student => {
      totalScores.push(student.score.getTotalScore());
    });
    return totalScores;
  }
  getAverage() {
    return Math.round(this.getStudentTotalScores().reduce((avr, value, index, arr) => {
      return index < arr.length - 1 ? avr + value : (avr + value) / arr.length;
    }));
  }
  getMedian() {
    let totalScores = this.getStudentTotalScores();
    let index = Math.floor((totalScores.length - 1) / 2);
    return totalScores.length != 0 ? totalScores[index] : Math.round((totalScores[index] + totalScores[index + 1]) / 2);
  }
  printScoreSheet() {
    let result = [...this.students.values()].map(student => {
        function score(class) {
            return student.score.scores.get(class);
        };

        return `
        ${student.name}|${score('数学')}|${score('语文')}|${score('英语')}|${score('编程')}|${student.score.getAverageScore()}|${student.score.getTotalScore()}`;
    });
    result += `
    ========================
    全班总分平均数：${this.getAverage()}
    全班总分中位数：${this.getMedian()}`;
  }
}

module.exports = Scoresheet;