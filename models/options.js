module.exports = function(sequelize, DataTypes) {
  var optionsdb = sequelize.define(
    "Options",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      img: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      platform: {
        type: DataTypes.STRING,
        allowNull: false
      }
      },
    {
      freezeTableName: true,
      timestamps: false,
      force: true
    }
  );
  optionsdb.sync();
  return optionsdb;
};
