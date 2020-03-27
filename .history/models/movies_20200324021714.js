module.exports = function (sequelize, DataTypes) {
  var moviesdb = sequelize.define(
    "movies", {
      movieID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING
      }
    }, {
      freezeTableName: true,
      timestamps: false
    }
  );
  moviesdb.sync();
  return moviesdb;
};