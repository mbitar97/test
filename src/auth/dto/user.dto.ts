import { IsNotEmpty } from 'class-validator';

export class UserDto {
    @IsNotEmpty()
    userEmail: string;
    @IsNotEmpty()
    firstName: string;
    @IsNotEmpty()
    lastName: string;
    @IsNotEmpty()
    password: string;
    @IsNotEmpty()
    userRole: string;
};

export class UserLoginDto {
    @IsNotEmpty()
    userEmail: string;
    @IsNotEmpty()
    password: string;
}

export class RoleDto {
    id: number;
    userrole: string;
}

export class ChangePasswordDto {
    @IsNotEmpty()
    userEmail: string;
    @IsNotEmpty()
    password: string;
    @IsNotEmpty()
    newPassword: string;
    @IsNotEmpty()
    confirmNewPassword: string;
}
