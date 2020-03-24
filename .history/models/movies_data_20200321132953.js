module.exports = function (sequelize, DataTypes) {
  var movieList = sequelize.define("movies_data", {
    genres: DataTypes.TEXT,
    id: DataTypes.INTEGER,
    title: DataTypes.STRING
  });
  return movieList;
};