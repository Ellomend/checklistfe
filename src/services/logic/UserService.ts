import {UserApiService} from 'src/services/api/UserApiService/UserApiService';
import {LoginResponse} from 'src/types/models';

export class UserService {
  // auth
  public static async login(email: string, password: string) : Promise<LoginResponse> {
    return await UserApiService.login(email, password);
  }

  public static async register(email: string, password: string) {
    return await UserApiService.register(email, password);
  }

  public static async logout() {
    return await UserApiService.logout();
  }

  // is user logged in
  public static isLoggedIn() {
    return UserApiService.isLoggedIn();
  }
}
