module.exports = function (sequelize, DataTypes) {
  var movieList = sequelize.define("movies_data", {
    genres: DataTypes.JSONTYPE,
    movieID: DataTypes.INTEGER,
    title: DataTypes.STRING
  });
  return movieList;
};