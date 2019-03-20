import {post} from './../../../servers/httpServer/httpServer';
export  function login(param:any){
    return{
        type:'USER_LOGIN',
        payload:(async()=>{
            let result=await post('/user/login.do',param);
            return result.data;
        })()
    }
}