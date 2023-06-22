import {RootState} from 'redux/store';

export const selectInitialized = (state: RootState) => state.app.initialized;