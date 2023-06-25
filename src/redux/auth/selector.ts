import {RootState} from '../store';

export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectAuthLogin = (state: RootState) => state.auth.data;

export const selectCaptchaUrl = (state: RootState) => state.auth.captchaUrl;




