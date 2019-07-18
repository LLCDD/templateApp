export default {
  //接口基础地址
  // 线上 路径 http://www.zzjzj.net
  // 没有用
  // api_base: process.env.NODE_ENV === 'development' ? 'http://www.zzjzj.net' : 'http://192.168.0.148:8080'
  //  上线
  //  api_base: process.env.NODE_ENV === 'development' ? 'http://www.zzjzj.net' : 'http://www.zzjzj.net'
  // 本地 
   api_base: process.env.NODE_ENV === 'development' ? 'http://192.168.0.148:8080' : 'http://192.168.0.148:8080'
}
