import { LoggerService } from './user.logger.js';
export declare class UserService {
    private readonly logger;
    constructor(logger: LoggerService);
    private users;
    findAll(): {
        id: number;
        name: string;
    }[];
}
