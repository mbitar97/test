import { Body, Controller, HttpStatus, InternalServerErrorException, Post, Res, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ChangePasswordDto, UserDto, UserLoginDto } from './dto/user.dto';

@Controller('user')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    public async createUserAccount(@Body(ValidationPipe) userSignUpDto: UserDto, @Res() res: any): Promise<any> {
        try {
            await this.authService.createUserAccount(userSignUpDto);
            return res.status(HttpStatus.CREATED).json({
                ok: true,
                message: 'success',
                data: 'User account created successfully'
            });
        } catch (error) {
            throw new InternalServerErrorException('Some internal server error ocurred');
        }
    }

    @Post('login')
    public async doLogin(@Body(ValidationPipe) userSignInDto: UserLoginDto, @Res() res: any): Promise<any> {
        let loggedInUserRole: any = null;
        try {
            loggedInUserRole = await this.authService.doUserLogin(userSignInDto);
        } catch (error) {
            throw new InternalServerErrorException('Some internal server error ocurred');
        }

        if (loggedInUserRole === null) {
            // authenticateion failed
            return res.status(HttpStatus.FORBIDDEN).json({
                ok: false,
                message: 'failed',
                data: 'Provided username or password is wrong'
            });
        }

        if (loggedInUserRole) {
            return res.status(HttpStatus.OK).json({
                ok: true,
                message: 'success',
                data: loggedInUserRole
            });
        }
    }

    @Post('change-password')
    public async doChangePassword(@Body(ValidationPipe) changePassword: ChangePasswordDto, @Res() res: any): Promise<any> {
        let isPasswordChanged: boolean = false;

        if (changePassword.newPassword !== changePassword.confirmNewPassword) {
            return res.status(HttpStatus.CONFLICT).json({
                ok: false,
                message: 'Provided new password and confirm password do not match',
                data: null
            });
        }

        try {
            isPasswordChanged = await this.authService.doChangePassword(changePassword);
        } catch (error) {
            throw error;
        }

        return res.status(HttpStatus.OK).json({
            ok: true,
            message: 'Password changed successfully.',
            data: null
        });
    }
}
