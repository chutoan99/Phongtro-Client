import { UserIdModel, UserModel } from "../../models/user";

export interface UserResponse {
  userId: {
    err: number;
    msg: string;
    response: UserModel[];
  };
}

export interface UserPostResponse {
  userId: {
    err: number;
    msg: string;
    response: UserIdModel;
  };
}
