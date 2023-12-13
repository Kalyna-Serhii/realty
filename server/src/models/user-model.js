import {DataTypes, sequelize} from '../database/database.config.js';

const UserModel = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'user',
        },
        wishList: {
            type: DataTypes.TEXT,
            defaultValue: '[]',
        },
    },
    {
        tableName: 'users',
        timestamps: false,
    },
);

export default UserModel;