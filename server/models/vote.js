"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.vote.belongsTo(models.user);
      models.vote.belongsTo(models.category);
      models.vote.belongsToMany(models.user, {
        through: "User_vote",
        targetKey: "id",
        foreignKey: "voteId",
      });
    }
  }
  Vote.init(
    {
      voteTitle: DataTypes.STRING,
      voteOption1: DataTypes.STRING,
      voteOption2: DataTypes.STRING,
      voteOption1Count: DataTypes.INTEGER,
      voteOption2Count: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Vote",
    }
  );
  return Vote;
};