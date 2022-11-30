import {ApiClientService, getClient} from 'src/services/api/ApiClientService/ApiClientService';
import {
  API_PREFIX,
  CHANGE_PASSWORD_URL,
  LOGIN_URL,
  LOGOUT_URL,
  REFRESH_TOKEN_URL,
  REGISTER_URL,
  RESET_PASSWORD_URL
} from 'src/config/endpoints';
import {LoginResponse} from 'src/types/models';

export class UserApiService {

  static getClient() {
    return ApiClientService.getClient();
  }

  // Auth

  static async login(email: string, password: string) : Promise<LoginResponse> {
    // save token to local storage
    const response = await getClient().post(API_PREFIX + LOGIN_URL, { email, password });
    const { token, refreshToken } = response.data;
    UserApiService.saveToken(token);
    return { token, refreshToken, user: response.data.user };
  }

  static async register(email: string, password: string) {
    return getClient().post(API_PREFIX + REGISTER_URL, { email, password });
  }

  static async logout() {
    // remove token from local storage
    localStorage.removeItem('token');
    return getClient().post(API_PREFIX + LOGOUT_URL);
  }

  static async refreshToken() {
    return getClient().post(API_PREFIX + REFRESH_TOKEN_URL);
  }

  // reset password
  static async resetPassword(email: string) {
    return getClient().post(API_PREFIX + RESET_PASSWORD_URL, { email });
  }

  static async changePassword(password: string, token: string) {
    return getClient().post(API_PREFIX + CHANGE_PASSWORD_URL, { password, token });
  }

  // save token to local storage
  static saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  // get token from local storage
  static getToken() {
    return localStorage.getItem('token');
  }

  // check if user is logged in
  static isLoggedIn() {
    return !!UserApiService.getToken();
  }
}
