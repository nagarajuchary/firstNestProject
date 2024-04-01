import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { userdto } from './dto/user.dto';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel ('User') private userModel : Model<User>){}

    async findAll(): Promise <User[]> {
        return this.userModel.find().exec();
    }

    async findOne( id:String ): Promise <User> {
        return this.userModel.findById(id).exec();
    }

   async create(userDto:userdto): Promise <User>{
    const newdto = new this.userModel(userDto);
    return newdto.save();
   }

   async update(id:String, userDto:userdto): Promise<User>{
    return this.userModel.findByIdAndUpdate(id,userDto,{new:true}).exec();
   }

   async remove(id:String): Promise<void>{
    await this.userModel.findByIdAndDelete(id).exec();
   }
}
