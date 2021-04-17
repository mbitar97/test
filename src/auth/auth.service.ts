import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthRepostiory } from "./auth.repostitory";
import { ChangePasswordDto, UserDto, UserLoginDto } from "./dto/user.dto";
import { RoleRepostiory } from "./role.repository";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(AuthRepostiory)
        private authReposiotry: AuthRepostiory,
        @InjectRepository(RoleRepostiory)
        private roleRepository: RoleRepostiory) { }

    public async createUserAccount(userDto: UserDto) {
        const roleDetail = await this.roleRepository.findOne({ where: { userRole: userDto.userRole } });
        return await this.authReposiotry.createUserAccount(userDto, roleDetail);
    }

    public async doUserLogin(userLoginDto: UserLoginDto): Promise<any> {
        const userDetail: any = await this.authReposiotry.findOne({ where: { userEmail: userLoginDto.userEmail } });
        console.log(userDetail)
        if (userDetail && userDetail.password === userLoginDto.password) {
            // User login successfull
            const roleDetail = await this.roleRepository.findOne({ where: { id: userDetail.userRoldId } });

            return roleDetail;
        }

        return null;
    }

    public async doChangePassword(changePassword: ChangePasswordDto): Promise<any> {
        const userDetail: any = await this.authReposiotry.findOne({ where: { userEmail: changePassword.userEmail } });

        if (userDetail && userDetail.password === changePassword.password) {
            // We can change the password
            userDetail.password = changePassword.newPassword;
            await this.authReposiotry.save(userDetail);

            return true;
        }

        throw new ForbiddenException('User is not authrized to change the password');
    }
}
