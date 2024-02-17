import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Injectable()
export class UsersService {
  private userData = [
    {
      "id": 1,
      "name": "thanatat",
      "email": "thanatat@gmail.com",
      "tel": "06225611111",
      "role": "ENGINEER"
    },
    {
      "id": 2,
      "name": "vichai",
      "email": "vichai@gmail.com",
      "tel": "06955611211",
      "role": "ENGINEER"
    },
    {
      "id": 3,
      "name": "manoch",
      "email": "manoch@gmail.com",
      "tel": "08567801234",
      "role": "ADMIN"
    },
    {
      "id": 4,
      "name": "tanHag",
      "email": "tenHag@gmail.com",
      "tel": "0918765438",
      "role": "ADMIN"
    },
    {
      "id": 5,
      "name": "Klopp",
      "email": "klopp@gmail.com",
      "tel": "0976540921",
      "role": "ADMIN"
    },
  ];

  findAll(role?: 'ENGINEER' | 'INTERN' | 'ADMIN') {
    if (role) {
      const roleArray = this.userData.filter(user => user.role === role)
      if(roleArray.length === 0) throw new NotFoundException('Role Not Found !')
      return roleArray
    }
    return this.userData
  }

  findOne(id: number) {
    const user = this.userData.find(user => user.id === id)

    if(!user) throw new NotFoundException('User Not Found !')
    return user
  }

  // findInterns(role?:'INTERN'){
  //   if(role){
  //     return this.userData.filter(user => user.role === role)
  //   }
  //   return this.userData
  // }

  create(createUserDto: CreateUserDto) {
    const userByHighestId = [...this.userData].sort((a, b) => b.id - a.id)
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...createUserDto
    }
    this.userData.push(newUser)
    return newUser
  }

  update(id: number, updateUserDto: UpdateUserDto){
    this.userData = this.userData.map(user =>{
        if (user.id === id) {
          return {...user, ...updateUserDto}
        }
        return user
    })

    return this.findOne(id)
  }

  delete(id: number){
    const removedUser = this.findOne(id)

    this.userData = this.userData.filter(user => user.id !== id)

    return removedUser
  }
    
}
