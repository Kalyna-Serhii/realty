import bcrypt from 'bcrypt';
import UserModel from '../models/user-model.js';
import TokenModel from "../models/token-model.js";
import ApiError from '../exceptions/api-error.js';

const UserService = {
    async getUsers() {
        const users = await UserModel.findAll();
        return users;
    },

    async getUserById(id) {
        const user = await UserModel.findOne({where: {id}});
        if (!user) {
            throw ApiError.BadRequest(`No user found with id = ${id}`);
        }
        return user;
    },

    async createUser(body) {
        const {name, surname, email, password, phone, role} = body;
        const userWithSameEmail = await UserModel.findOne({where: {email}});
        if (userWithSameEmail) {
            throw ApiError.BadRequest(`User with ${email} email already exists`);
        }
        const userWithSamePhone = await UserModel.findOne({where: {phone}});
        if (userWithSamePhone) {
            throw ApiError.BadRequest(`User with ${phone} phone number already exists`);
        }
        const hashedPassword = await bcrypt.hash(password, 3);
        await UserModel.create({
            name,
            surname,
            email,
            password: hashedPassword,
            phone,
            role,
        });
    },

    async updateUser(id, body) {
        const {name, surname, email, phone, role} = body;
        const user = await UserModel.findOne({where: {id}});
        if (!user) {
            throw ApiError.BadRequest(`No user found with ${email} email`);
        }
        const userWithSameEmail = await UserModel.findOne({where: {email}});
        if (userWithSameEmail && userWithSameEmail.id !== parseInt(id)) {
            throw ApiError.BadRequest(`User with ${email} email already exists`);
        }
        const userWithSamePhone = await UserModel.findOne({where: {phone}});
        if (userWithSamePhone && userWithSamePhone.id !== parseInt(id)) {
            throw ApiError.BadRequest(`User with ${phone} phone number already exists`);
        }

        const updatedFields = {};
        updatedFields.name = name;
        updatedFields.surname = surname;
        updatedFields.email = email;
        updatedFields.phone = phone;
        updatedFields.role = role;
        await user.update(updatedFields);
    },

    async deleteUser(id) {
        const user = await UserModel.findOne({where: {id}});
        if (!user) {
            throw ApiError.BadRequest(`No user found with id = ${id}`);
        }
        const userToken = await TokenModel.findOne({where: {userId: id}});
        if (userToken) {
            await userToken.destroy();
        }
        await user.destroy();
    },
};

export default UserService;