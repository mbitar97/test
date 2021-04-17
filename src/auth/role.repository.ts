import { EntityRepository, Repository } from "typeorm";
import { RoleEntity } from "./role.entity";

@EntityRepository(RoleEntity)
export class RoleRepostiory extends Repository<RoleEntity> {
    constructor() {
        super();
    }
}
