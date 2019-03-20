import axios from 'axios';
//get请求
export function get(url:string,params:any){
    return axios.get(url,params)
}
//post请求
export function post(url:string,params:any){
    return axios.post(url, params);
}
//发送多个请求
export function all(requestUrl:Array<string>){
    return axios.all(requestUrl)
}