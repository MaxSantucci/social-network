import {RootState} from '../store';

export const selectIsAuth = (state: RootState) => state.auth.isAuth;

export const selectAuthLogin = (state: RootState) => state.auth.data.data.id;

export const selectMyLogin = (state: RootState) => state.auth.data.data.login;

export const selectCaptchaUrl = (state: RootState) => state.auth.captchaUrl;






