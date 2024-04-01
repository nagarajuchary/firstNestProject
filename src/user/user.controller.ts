import { Body, Controller, Get, Param, Post, Put ,Delete} from '@nestjs/common';
import { UserService } from './user.service';
import { userdto } from './dto/user.dto';
import { User } from './schema/user.schema';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

@Get()
async findAll(): Promise<User[]>{
    return this.userService.findAll();
}

@Get(':id')
async findOne(@Param('id') id:String): Promise<User>{
    return this.userService.findOne(id);
}   

@Post()
async create(@Body() userDto:userdto): Promise<User>{
    return this.userService.create(userDto);
}

@Put()
async update(@Param('id')id:String, @Body() userDto:userdto):Promise<User>{
    return this.userService.update(id,userDto);
}

@Delete()
async remove(@Param('id')id:String):Promise<void>{
    return this.userService.remove(id);
}

}
