import {DataTypes, sequelize} from '../database/database.config.js';
import UserModel from './user-model.js';
import RealtyModel from './realty-model.js';
import ServiceModel from './service-model.js';

const DealModel = sequelize.define(
    'Deal',
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
        realtyId: {
            type: DataTypes.INTEGER,
        },
        serviceId: {
            type: DataTypes.INTEGER,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    },
    {
        tableName: 'deals',
        timestamps: false,
    }
);

DealModel.belongsTo(UserModel, {foreignKey: 'userId'});
DealModel.belongsTo(RealtyModel, {foreignKey: 'realtyId'});
DealModel.belongsTo(ServiceModel, {foreignKey: 'serviceId'});

export default DealModel;