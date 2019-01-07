class Score {
  constructor(scores) {
    this.scores = scores;
  }

  getTotalScore() {
    return [...this.scores.values()].reduce((sum, value) => {
      return sum + parseInt(value);
    },0);
  }

  getAverageScore() {
    return this.getTotalScore() / this.scores.size;
  }
};

module.exports = Score;