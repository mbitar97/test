import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { UserDto } from "./dto/user.dto";
import { UserEntity } from "./user.entity";

@EntityRepository(UserEntity)
export class AuthRepostiory extends Repository<UserEntity> {
    constructor() {
        super();
    }

    public async createUserAccount(userDto: UserDto, roleDetail: any): Promise<any> {
        console.log(userDto);
        const user = new UserEntity();
        user.firstName = userDto.firstName;
        user.lastName = userDto.lastName;
        user.userEmail = userDto.userEmail;
        user.password = userDto.password;
        user.userRoldId = roleDetail.id;
        try {
            await user.save();
        } catch (error) {
            console.log(error);
            if (error.code === 'ER_DUP_ENTRY') {
                throw new ConflictException('Username already exist')
            }
            throw new InternalServerErrorException('Some error ocurred while trying to save user');
        }
        return true;
    }
}
