import * as React from "react";
import {connect} from 'react-redux';
import * as md5 from 'md5';
import * as loginModule from './../../module/loginModule/loginModule';
import * as loginAction from './../../redux/actions/loginAction/loginAction';
const logo=require('./../../../images/logo-login.png');
class Login extends React.Component<any, any> {
    constructor(props:any, context:any) {
        super(props, context);
        this.state=new loginModule.loginState();
    }
    //获取保存文本框输入的值   
    users:object={account:'', password:'',verifycode:''};
    count:number=0;//判断输入的次数
    list:any[]=[];
    //dom元素解析，并返回在页面上显示
    render() {
        return  <div className="fddv4-login">
                    <div className="fddv4-login-main">
                        <div className="fddv4-login-tit">
                            <img src={logo} alt="法大大logo" /><span>合同文件管理平台</span>
                        </div>
                        <div className="fddv4-login-form">
                            <span>系统登录</span>
                            <input type="text"  placeholder="请输入手机号/邮箱" />
                            <input type="password"   placeholder="请输入密码" />
                            <p><a href="javaScript:;">忘记密码?</a></p>
                            <a href="javaScript:;" className="fddv4-login-link" onClick={()=>{this.login()}}>登录</a>
                        </div>
                    </div>
                    <div className="fddv4-login-bg"></div>
                </div>
    }
    login(){
        this.props.login();
    }
    //当加载跟新改变了props值的处理函数
    public componentWillReceiveProps(nextProps:any){
        
    }
    //组件渲染完毕后执行
    public componentDidMount(){
       
    }
}
 //与redux绑定state，通过state更新dom元素
 const mapStateToProps =(state:any) =>{
    console.log(state);
    return state.loginReducers;
 };
 //通过props取值或调用方法
 const mapDispatchToProps = (dispatch:any) => ({
    login: (users:object) => {
        var params={};
        dispatch({ type: 'USER_LOGIN',promise:loginAction.login(params)})
    }
});
//链接reudex与react
export default connect(mapStateToProps, mapDispatchToProps)(Login)