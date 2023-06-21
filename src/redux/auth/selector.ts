import {RootState} from '../store';

export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectAuthLogin = (state: RootState) => state.auth.data;

export const selectLoginError = (state: RootState) => state.auth.error; // refactor selector

export const selectCaptchaUrl = (state: RootState) => state.auth.captchaUrl;

// export const selectCaptchaRequired = (state: RootState) => state.auth.captchaRequired;

// export const selectCaptchaText = (state: RootState) => state.auth.captchaText;



