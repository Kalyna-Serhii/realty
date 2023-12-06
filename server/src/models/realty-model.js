import {DataTypes, sequelize} from '../database/database.config.js';

const RealtyModel = sequelize.define(
    'Realty',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        area: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        rooms: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        photo: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        tableName: 'realty',
        timestamps: false,
    },
);

export default RealtyModel;