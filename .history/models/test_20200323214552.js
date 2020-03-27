// module.exports = function (sequelize, DataTypes) {
//   var testdb = sequelize.define(
//     "table", {
//       title: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       },
//       body: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       },
//       category: {
//         type: DataTypes.STRING
//       }
//     }, {
//       freezeTableName: true,
//       timestamps: false
//     }
//   );
//   return testdb;
// };

module.exports = function (sequelize, DataTypes) {
  var testdb = sequelize.define(
    "table", {
      name: DataTypes.STRING
    }, {
      has_pet: DataTypes.Boolean,

    }, {
      pet_name: DataTypes.STRING
    }, {
      pet_name: DataTypes.STRING
    } {
      freezeTableName: true,
      timestamps: false
    }
  );
  return testdb;
};