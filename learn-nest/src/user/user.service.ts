import { Injectable } from '@nestjs/common';
import { LoggerService } from './user.logger.js';

@Injectable()
//@Injectable() tells Nest: this class can be managed by Nest's dependency injection system.
export class UserService {
  constructor(private readonly logger: LoggerService) {}
  private users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alex' },
  ];
  findAll() {
    this.logger.log('Finding all user');
    return this.users;
  }
}
