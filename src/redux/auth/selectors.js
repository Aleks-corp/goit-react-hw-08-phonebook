export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectProfile = state => state.auth.profile;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectToken = state => state.auth.token;
