import { User } from '../../types/user.type';

export type LoginDto = {
  email: string;
  password: string;
};

export type SignUpDto = LoginDto & {
  firstName: string;
  lastName: string;
  userRole: 1;
};

export type UserState = {
    user: User | null;
    isAuth: boolean;
};
