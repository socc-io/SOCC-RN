import { put, call } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'

// attempts to login
export function * login (api, { email, password }) {
  const res = yield call(api.login, email, password)
  const data = res.data
  if (res.ok) {
    if(data.success) {
      yield put(LoginActions.loginSuccess(data.user))
    }
    else {
      yield put(LoginActions.loginFail(data.msg))
    }
  }
  else {
    yield put(LoginActions.loginFail('인터넷이 연결안됨'))
  }
}
