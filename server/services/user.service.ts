import { Container } from 'typedi';

import UserModel from '../models/user.model';
import { IUser, IUserInput } from '../types/user.types';

const userModel = Container.get(UserModel);
const user = userModel.get();

class UserService {
  // retrieve user info needed to present on the application header after a successfull login
  public async findUserInitial(id: string): Promise<IUser> {
    try {
      return await user.findById(id).select('profile.first_name');
    } catch (error) {
      throw error;
    }
  }

  // retrieve user info excluding sensitive and unnecessary data
  public async findUser(id: string): Promise<IUser> {
    try {
      return await user.findById(id, [
        '-refresh_token',
        '-password',
        '-reset_password_token',
        '-reset_password_expires',
        '-meta',
        '-__v',
      ]);
    } catch (error) {
      throw error;
    }
  }

  public async updatePassword(id: string, password: string): Promise<IUser> {
    try {
      const query = { _id: id };
      const update = { password };
      const options = { new: true };

      return await user.findByIdAndUpdate(query, update, options);
    } catch (error) {
      throw error;
    }
  }

  public async updateUser(id: string, newProfile: any): Promise<IUser> {
    try {
      const query = { _id: id };
      const options = { new: true };

      return await user.findByIdAndUpdate(query, newProfile, options);
    } catch (error) {
      throw error;
    }
  }

  public async deleteUser(id: string): Promise<IUser> {
    try {
      const query = { _id: id };
      return await user.findByIdAndDelete(query);
    } catch (error) {
      throw error;
    }
  }

  public async findByEmail(email: string): Promise<IUser> {
    try {
      return await user.findOne({ email });
    } catch (error) {
      throw error;
    }
  }

  public async register(newUser: IUserInput): Promise<IUser> {
    try {
      return user.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  public async saveRefreshToken(
    id: string,
    refreshToken: string,
  ): Promise<IUser> {
    try {
      const query = { _id: id };
      const update = { refresh_token: refreshToken };
      const options = { new: true };

      return await user.findOneAndUpdate(query, update, options);
    } catch (error) {
      throw error;
    }
  }

  public async resetPasswordExpires(token: string): Promise<IUser> {
    try {
      return await user.findOne({
        reset_password_token: token,
        reset_password_expires: { $gt: Date.now() },
      });
    } catch (error) {
      throw error;
    }
  }

  public async forgotPassword(
    id: string,
    resetToken: string,
    expires: number,
  ): Promise<IUser> {
    try {
      const query = { _id: id };
      const update = {
        reset_password_token: resetToken,
        reset_password_expires: expires,
      };
      const options = { new: true };

      return await user.findByIdAndUpdate(query, update, options);
    } catch (error) {
      throw error;
    }
  }

  public async findById(id: string): Promise<IUser> {
    try {
      return await user.findById(id);
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
