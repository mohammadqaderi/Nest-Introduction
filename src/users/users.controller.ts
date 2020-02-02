import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user-dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    @Get()
    getAllUsers(){
        return this.usersService.findAll()
    }

    @Get(':id')
    getUser(@Param() param){
        return this.usersService.findOne(param.id)
    }
    
    @Post()
    createUser(@Body() userBody: CreateUserDto){
        return this.usersService.createUser(userBody);
    }
}
