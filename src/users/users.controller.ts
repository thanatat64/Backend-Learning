import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service.js';

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
    findOne(@Param('id') id: String) {
        return this.userService.findOne(Number(id)) // or we can use +id to change string to number
    }

    @Post() //POST: /users
    create(@Body() user: { name: string, email: string, tel: string, role: 'ENGINEER' | 'INTERN' |     
    'ADMIN' }) {
        return this.userService.create(user)
    }

    @Patch(':id') // PATCH : /users/ :id
    update(@Param('id') id: String, @Body() userUpdate: { name?: string, email?: string, tel?: string,
    role?: 'ENGINEER' | 'INTERN' | 'ADMIN' }) {
        return this.userService.update(+id,userUpdate)
    }

    @Delete(':id') // DELETE : /users/ :id
    delete(@Param('id') id: String) {
        return this.userService.delete(+id) // or we can use Number(id) to change string to number
    }


}
