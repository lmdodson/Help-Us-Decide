module.exports = function (sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    cast: DataTypes.TEXT,
    crew: DataTypes.TEXT
  });
  return Example;
};