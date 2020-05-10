import axios from 'axios'
export function request(config) {
    //创建 axios实例
    const  instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000,
    })
    //axios 拦截器
    instance.interceptors.request.use(config=>{
      // console.log(config);
      //一定要返回
      return config;
     },err => {
      console.log(err)
    });
    //响应拦截
    instance.interceptors.response.use(res=>{
      // console.log(res);
      return res.data;
    },err => {
       console.log(err)
    })

    //发送网络请求
    return instance(config);

}
