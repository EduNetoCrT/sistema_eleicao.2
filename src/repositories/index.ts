import { getRepository, Repository } from "typeorm";
import Permission from "../entities/Permission";
import { Role } from "../entities/Role";
import { User } from "../entities/User";
import { Eleitor } from "../entities/Eleitor";


export const UserRepository = (): Repository<User> => {
  return getRepository(User);
};


export const RoleRepository = (): Repository<Role> => {
  return getRepository(Role);
};


export const PermissionRepository = (): Repository<Permission> => {
  return getRepository(Permission);
};


export const EleitorRepository = (): Repository<Eleitor> => {
  return getRepository(Eleitor);
};
