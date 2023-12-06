import {DataTypes, sequelize} from '../database/database.config.js';
import UserModel from './user-model.js';

const ReviewModel = sequelize.define(
    'Review',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    },
    {
        tableName: 'reviews',
        timestamps: false,
    },
);

ReviewModel.belongsTo(UserModel, {foreignKey: 'userId'});

export default ReviewModel;