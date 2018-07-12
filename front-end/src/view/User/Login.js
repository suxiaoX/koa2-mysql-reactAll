import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Postlogin } from '../../redux/actions/user';
import user from '../../api/user';
const FormItem = Form.Item;

@connect(
  (state) => ({}),
  (dispatch) => bindActionCreators({ Postlogin }, dispatch)
)
class LoginForm extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const data = {...values, id: 123};
        console.log(data);
        this.props.Postlogin(values).then(res => {
          if (!res.code) {
            this.props.history.push('/blog/user')
          } else {
            message.error(`${res.msg}`)
          }
        })
        // console.log(result);
        /* .then(res => {
          if (!res.code) {
            this.props.history.push('/blog/user')
          } else {
            message.error(`${res.msg}`)
          }
        }) */
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{width:'300px', margin: '0 auto'}}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="邮箱或手机号" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>免登陆</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码</a>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
           登录
          </Button>
          <Link to='/register'>去注册</Link>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(LoginForm);

export default WrappedNormalLoginForm;