import axios, { AxiosResponse } from 'axios';
import * as React from "react";
import * as ReactDOM from 'react-dom';
import {Route,HashRouter,Redirect,BrowserRouter,Router,Switch} from 'react-router-dom';
import {App} from './../components/app';
import {LoginContainers} from './../containers/loginContainers/loginContainers';
axios.defaults.baseURL = '/api/';
//请求拦截器
axios.interceptors.request.use(
    (config)=>{
        return config;
    },
    (err)=>{
        return err
    }
)
//请求响应拦截器
axios.interceptors.response.use(
    (response:any)=>{ 
        if(response.data.position==='sessionOut'){
            return;
        }else if(response.status===200){
            return response;
        }else if(response.data.isSccess===false){
            
            return response;
        }
    },
    (error:any)=>{
        return error;
    }
)
export class RoutersMain extends React.Component <any,any> {
    render() {
        return <BrowserRouter basename="/">  
                    <App>
                        <Switch>
                            <Redirect path='/' exact  to="/login"></Redirect>
                            <Route path="/login"   component={LoginContainers}></Route>
                        </Switch>
                    </App>
                </BrowserRouter>
    }
}
//<Route path="/user/downLoad" component={DownLoadContainers}/>