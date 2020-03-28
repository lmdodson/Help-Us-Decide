module.exports = function (sequelize, DataTypes) {
  var usersdb = sequelize.define(
    "users", {
      user: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    }, {
      freezeTableName: true,
      timestamps: false
    }
  );
  usersdb.sync();
  return usersdb;
};