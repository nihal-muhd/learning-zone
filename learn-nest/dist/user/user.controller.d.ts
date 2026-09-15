import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { UserService } from './user.service.js';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(name: string, role: string): {
        id: number;
        name: string;
    }[];
    getUserById(id: string): {
        id: string;
    };
    createUser(createUserDto: CreateUserDto): {
        message: string;
    };
    updateUser(id: string, updateUserDto: UpdateUserDto): {};
}
