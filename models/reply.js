'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    static associate (models) {
      // 和Tweet的關聯
      Reply.belongsTo(models.Tweet, { foreignKey: 'TweetId' })
      // 和User的關聯
      Reply.belongsTo(models.User, {
        foreignKey: 'UserId'
      })
    }
  }
  Reply.init({
    UserId: DataTypes.INTEGER,
    TweetId: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Reply',
    tableName: 'Replies',
    paranoid: true,
    underscored: true
  })
  return Reply
}
