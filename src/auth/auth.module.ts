import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthRepostiory } from './auth.repostitory';
import { AuthService } from './auth.service';
// import { RoleRepository } from './role.repostiory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepostiory } from './role.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([AuthRepostiory, RoleRepostiory])
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: []
})
export class AuthModule { }
