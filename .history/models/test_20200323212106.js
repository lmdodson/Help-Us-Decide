module.exports = function (sequelize, DataTypes) {
  var testdb = sequelize.define(
    "table", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      category: {
        type: DataTypes.STRING,
        defaultValue: "Personal"
      }
    }, {
      freezeTableName: true,
      timestamps: false
    }
  );
  return testdb;
};