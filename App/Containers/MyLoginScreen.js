import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import LoginActions from '../Redux/LoginRedux'

const styles = {
  container: {
    flex:1,
  },
}

class MyLoginScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: 'smilup2244@gmail.com',
      password: 'asdf',
    }
  }
  handleChangeEmail (email) {
    this.setState({ email })
  }
  handleChangePassword (password) {
    this.setState({ password })
  }
  login () {
    const { email, password } = this.state
    this.props.login(email, password)
  }
  render () {
    const { fetching } = this.props
    return (
      <View style={styles.container}>
        {fetching ? (
          <Text>로그인 시도중...</Text>
        ) : (
          <View>
            <TextInput
              value={this.state.email}
              onChangeText={this.handleChangeEmail.bind(this)}
            />
            <TextInput
              value={this.state.password}
              onChangeText={this.handleChangePassword.bind(this)}
            />
            <TouchableOpacity onPress={this.login.bind(this)}>
              <View style={{width:100,height:30,backgroundColor:'#666666'}}>
                <Text>
                  Login
                </Text>
              </View>
            </TouchableOpacity>
            <Text>
              {JSON.stringify(this.props.user)}
            </Text>
          </View>
        )}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  fetching: state.login.fetching,
  user: state.login.user,
})
const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(LoginActions.login(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MyLoginScreen)
