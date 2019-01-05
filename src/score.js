class Score {
  constructor(scores) {
    this.scores = scores;
  }

  getTotalScore() {
    return [...this.scores.values()].reduce((sum, value) => {
      return sum + value;
    });
  }

  getAverageScore() {
    return [...this.scores.values()].reduce((avr, value, index, arr) => {
      return Math.round(index < arr.length - 1 ? avr + value : (avr + value) / arr.length);
    }, 0);
  }
};

module.exports = Score;