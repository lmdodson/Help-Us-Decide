module.exports = function (sequelize, DataTypes) {
  var testdb = sequelize.define(
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
  testdb.sync();
  return testdb;
};