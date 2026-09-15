import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
export declare class UserController {
    getUsers(name: string, role: string): {
        name: string;
        role: string;
    };
    getUserById(id: string): {
        id: string;
    };
    createUser(createUserDto: CreateUserDto): {
        message: string;
    };
    updateUser(id: string, updateUserDto: UpdateUserDto): {};
}
