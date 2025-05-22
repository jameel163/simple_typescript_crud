import { Request, Response } from "express";
import { User } from "../models/user";
import {
  AllUser,
  CreateUserRequest,
  CreateUserResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  DeleteUserResponse,
} from "../interfaces/user.interface";

// get all users
export const getAllUsers = async (req: Request, res: Response) => {
  const users: AllUser[] = await User.findAll();
  res.json(users);
};

// create user
export const createUser = async ( req: Request, res: Response ) => {
  const data: CreateUserRequest = req.body;
  const {name,email}=data
  const user: CreateUserResponse = await User.create(data);
  res.json(user);
};

// upd user
export const updateUser = async (
  req: Request,
  res: Response
) => {

  const {id}= req.params;
  const body:UpdateUserRequest= req.body;
  const{name,email}=body
  const [updatedCount] = await User.update({ name,email  }, { where: { id } });

  const response: UpdateUserResponse = {
    success: updatedCount > 0,
    message:
      updatedCount > 0
        ? "User updated successfully"
        : "No user found",
  };

  res.json(response);
};

// del user
export const deleteUser = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const deletedCount = await User.destroy({ where: { id } });

  const response: DeleteUserResponse = {
    message: deletedCount > 0 ? "User deleted" : "User not found",
    deleted: deletedCount > 0,
  };

  res.json(response);
};
