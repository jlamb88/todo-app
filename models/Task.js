const {Model, DataTypes}=require('sequelize')
const sequelize = require('../config/connection')

class Task extends Model{}

Task.init({
    id: {
        type: DataTypes.INTEGER,
        allowNUll: false,
        primaryKey: true,
        autoIncrememt: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    }
    ,
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
        }
    }
,
{sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored:true,
    modelName:'task'
})

module.exports=Task;