import { UserStatus } from 'generated/prisma';

export type JwtPayLoad = {
  sub: string; //subはsubjectの省略 userの識別子を表す
  username: string;
  status: UserStatus;
};
