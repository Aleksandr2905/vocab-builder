export const handlerPending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handlerRejected = (state, { payload }) => {
  state.error = payload.error;
  state.isLoading = false;
  state.isLoggedIn = false;
};

export const handlerRegisterFulfilled = (state, { payload }) => {
  state.name = payload.name;
  state.email = payload.email;
  state.token = payload.token;
  state.isLoading = false;
  state.isLoggedIn = payload.token ? true : false;
};

export const handlerLoginFulfilled = (state, { payload }) => {
  state.email = payload.email;
  state.token = payload.token;
  state.isLoading = false;
  state.isLoggedIn = payload.token ? true : false;
};

export const handlerLogoutFulfilled = (state, { payload }) => {
  state.name = null;
  state.email = null;
  state.token = null;
  state.isLoading = false;
  state.isLoggedIn = false;
};
