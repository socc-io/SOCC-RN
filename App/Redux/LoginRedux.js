// @flow

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  login: ['email','password'],
  loginSuccess: ['user'],
  loginFail: ['error'],
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  email: null,
  user: null,
  error: null,
  fetching: false,
})

/* ------------- Reducers ------------- */

export const login = (state, { email, password }) => state.merge({
  fetching: true, email, error: null,
})
export const loginSuccess = (state, { user }) => state.merge({
  user, fetching: false,
})
export const loginFail = (state, { error }) => state.merge({
  error, fetching: false,
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAIL]: loginFail,
  [Types.LOGIN]: login,
})
