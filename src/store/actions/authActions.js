import axios from "axios";
import {
  SignInStart,
  SignInSuccess,
  signInError,
  signUpFailure,
  signUpStart,
  signUpSuccess,
} from "../reducers/userSlice";

export const authActions = {
  signUp:
    ({ email, password }) =>
    async (dispatch) => {
      dispatch(signUpStart());
      const config = {
        "Content-Type": "applicaiton/json",
      };
      try {
        const data = {
          email,
          password,
        };
        const res = await axios.post(`${URL.signUp}`, { data }, config);
        if (res?.ok) {
          dispatch(signUpSuccess(resData.data));
        }
      } catch (error) {
        const errorMessage =
          error.response && error.response.data.message
            ? error.response.data.message
            : "SingUp failed";
        dispatch(signUpFailure(errorMessage));
      }
    },

  signIn:
    ({ email, password }) =>
    async (dispatch) => {
      dispatch(SignInStart());
      const config = {
        "Content-Type": "aplication/json",
      };
      try {
        const res = await axios.post(
          `${URL.signIn}`,
          { email, password },
          config
        );
        if (res.status !== 200) {
          return;
        }
        if (res?.ok) {
          dispatch(SignInSuccess(res.data));
        }
        console.log(res.data);
      } catch (error) {
        const errorMessage =
          error.response && error.response.data.message
            ? error.response.data.message
            : "SingUp failed";
        dispatch(signInError(errorMessage));
      }
    },
};
