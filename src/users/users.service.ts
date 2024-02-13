import { Injectable } from '@nestjs/common';
import { ifError } from 'assert';

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
      "role": "INTERN"
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
      return this.userData.filter(user => user.role === role)
    }
    return this.userData
  }

  findOne(id: number) {
    const user = this.userData.find(user => user.id === id)
    return user
  }

  create(user: { name: string, email: string, tel: string, role: 'ENGINEER' | 'INTERN' | 'ADMIN' }) {
    const userByHighestId = [...this.userData].sort((a, b) => b.id - a.id)
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...user
    }
    this.userData.push(newUser)
    return newUser
  }

  update(id: number, updatedUser: { name?: string, email?: string, tel?: string,
  role?: 'ENGINEER' | 'INTERN' | 'ADMIN' }){
    this.userData = this.userData.map(user =>{
        if (user.id === id) {
          return {...user, ...updatedUser}
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
