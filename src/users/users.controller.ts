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

    @Get() // GET : /users?role = 'student'
    findAll(@Query('role')role?: 'student' | 'professor'){
        return []
    }
    
    // @Get('interns') //GET /users/interns
    // findAllinterns(){
    //     return []
    // }

    @Get(':id') // GET : /users/ :id
    findOne(@Param('id') id:String){
        return {id}
    }

    @Post() //POST: /users
    create(@Body() user:{}){
        return user
    }

    @Patch(':id') // PATCH : /users/ :id
    update(@Param('id') id:String, @Body() userUpdate : {}){
        return {id, ...userUpdate}
    }

    


}
