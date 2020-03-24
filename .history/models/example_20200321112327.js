module.exports = function (sequelize, DataTypes) {
  var movieList = sequelize.define("movies", {
    genres: DataTypes.TEXT,
    movieID: DataTypes.INTEGER,
    title: DataTypes.STRING
  });
  return movieList;
};