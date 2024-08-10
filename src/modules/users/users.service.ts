import { Injectable, NotFoundException} from '@nestjs/common';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name" : "Shovan",
            "email" : "shovan@sheba.xyz",
            "password" : "shovan11111",
            "role" : 'Admin'
        },
        {
            "id": 2,
            "name" : "Banik",
            "email" : "banik@sheba.xyz",
            "password" : "shovan11112",
            "role" : 'Noob'
        },
        {
            "id": 3,
            "name" : "Shovnan",
            "email" : "shovanan@sheba.xyz",
            "password" : "shovan11113",
            "role" : 'Noob'
        },
        {
            "id": 4,
            "name" : "Raja",
            "email" : "Raja@sheba.xyz",
            "password" : "shovan11114",
            "role" : 'Admin'
        },
        {
            "id": 5,
            "name" : "Babui",
            "email" : "babui@sheba.xyz",
            "password" : "shovan11115",
            "role" : 'Engineer'
        },
        {
            "id": 6,
            "name" : "Vondo",
            "email" : "vondo@sheba.xyz",
            "password" : "shovan11116",
            "role" : 'Engineer'
        },
    ]

    findAll(){
        return this.users;
    }

    findAllInterns(role?: "Admin" | 'Engineer' | 'Noob'){
        if(role){
            const rolesArray = this.users.filter(user => user.role === role)
            if(rolesArray.length === 0) throw new NotFoundException('User Role Not Found')
            return rolesArray
        }
        return this.users;
    }

    findOne(id:number){
        const user = this.users.find(user => user.id === id)
        if(!user) throw new NotFoundException("user not found")
        return user;
    }

    create(createUserDto: CreateUserDto){
        const userByHeighestId = [...this.users].sort((a,b) => b.id - a.id)
        const newUser = {
            id: userByHeighestId[0].id + 1,
            ...createUserDto
        }
        this.users.push(newUser)
        return newUser;
    }

    updateOne(id:number, updateUserDto: UpdateUserDto){
        this.users = this.users.map(user => {
            if(user.id === id){
                return {...user, ...updateUserDto}
            }
            return user;
        })
        return this.findOne(id)
    }

    deleteOne(id:number){
        const deletedUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)
        return deletedUser;
    }
}
