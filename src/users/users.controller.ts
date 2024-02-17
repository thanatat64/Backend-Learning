import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Controller('users')
export class UsersController {
    /*
        GET : /users
        GET : /users/:id
        POST : /users
        PATCH : /users/:id
        DELETE : /users/:id
     */

    constructor(private readonly userService: UsersService) { }

    @Get() // GET : /users?role = 'student'
    findAll(@Query('role') role?: 'ENGINEER' | 'INTERN' | 'ADMIN') {
        return this.userService.findAll(role)
    }

    // @Get(':role') //GET /users/interns
    // findInterns(@Query('role') role?: 'INTERN'){
    //     return this.userService.findInterns(role)
    // }

    @Get(':id') // GET : /users/ :id
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findOne(id) // or we can use +id to change string to number
    }

    @Post() //POST: /users
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    @Patch(':id') // PATCH : /users/ :id
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
        return this.userService.update(id,updateUserDto)
    }

    @Delete(':id') // DELETE : /users/ :id
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.userService.delete(id) // or we can use Number(id) to change string to number
    }


}
