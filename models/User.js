const {Model, DataTypes}=require('sequelize')
const sequelize = require('../config/connection')

class User extends Model{}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNUll: false,
        primaryKey: true,
        autoIncrememt: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
    }
},
{sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored:true,
    modelName:'user'
})

module.exports=User;