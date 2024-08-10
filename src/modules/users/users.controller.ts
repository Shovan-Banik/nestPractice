import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Get()
    findAll(){
        return this.usersService.findAll();
    }

    @Get('interns')
    findAllInterns(@Query('role') role?: 'Noob' | 'Engineer' | 'Admin'){
        return this.usersService.findAllInterns(role)
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number){
        return this.usersService.findOne(id)
    }

    @Post()
    create(@Body(ValidationPipe) createUserDto:CreateUserDto){
        return this.usersService.create(createUserDto)
    }

    @Patch(':id')
    updateOne(@Param('id', ParseIntPipe) id:number, @Body(ValidationPipe) updateUserDto: UpdateUserDto){
        return this.usersService.updateOne(id, updateUserDto)
    }

    @Delete(':id')
    deleteOne(@Param('id', ParseIntPipe) id:number){
        return this.usersService.deleteOne(id);
    }


}
