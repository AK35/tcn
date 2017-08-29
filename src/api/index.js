
import axios from 'axios'
import qs from 'qs'
let axiosIns = axios.create({})

// axios 配置
axiosIns.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axiosIns.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
if (process.env.NODE_ENV == 'development') {
  axiosIns.defaults.baseURL = 'http://localhost:8080/si/'
} else if (process.env.NODE_ENV == 'testing') {
  axiosIns.defaults.baseURL = 'http://localhost:8080/'
} else if (process.env.NODE_ENV == 'production') {
  axiosIns.defaults.baseURL = ''
}

axiosIns.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
axiosIns.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest'
axiosIns.defaults.responseType = 'json'
axiosIns.defaults.transformRequest = [function (data) {
  // 数据序列化
  return qs.stringify(data)
}
]
axiosIns.defaults.validateStatus = function (status) {
  return true
}
axiosIns.interceptors.request.use(function (config) {
  // 配置config
  config.headers.Accept = 'application/json'
  // config.headers.System = 'vue';
  // let token = Vue.localStorage.get('token');
  // if(token){
  //     config.headers.Token = token;
  // }
  return config
})
axiosIns.interceptors.response.use(function (response) {
  let status = response.status
  if (status === 200) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
})

let makeRequest = function (req) {
  return axiosIns[req.type](req.url, req.data || {}, req.config)
}

let ajaxMethod = ['get', 'post']
let api = {
  all: function (reqs) {
    let requests = reqs.map(makeRequest)
    return new Promise(function (resolve, reject) {
      axios.all(requests)
        .then(axios.spread(function () {
          let args = [].slice.call(arguments)
          let res = []
          let isAll = true
          args.forEach(function (item) {
            if (item.data.header.errcode === '0000000000') {
              res.push(item.data.data)
            } else {
              isAll = false
            }
          })
          if (isAll) {
            resolve(res)
          }
        })).catch((response) => {
          // reject response
          // alert('xiuxiu，限你10分钟到我面前来,不然...');
        })
    })
  }
}
ajaxMethod.forEach((method) => {
  // 数组取值的两种方式
  api[method] = function (uri, data, config) {
    return new Promise(function (resolve, reject) {
      axiosIns[method](uri, data, config).then((response) => {
        if (response.data.header.errcode === '0000000000') {
          resolve(response.data.data)
        } else {
        }
      }).catch((response) => {
        // reject response
        // alert('xiuxiu，限你10分钟到我面前来,不然...');
      })
    })
  }
})

export const get = api['get']
export const post = api['post']
export default function (Vue, options = {}) {
  Vue.prototype.$api = api
}

api.getOrgs = function () { // 获取机构列表
  return new Promise(function (resolve, reject) {
    api.get('org/olist', {}).then((response) => {
      resolve(response)
    })
  })
}

api.getSysList = function (orgid) { // 获取系统列表
  return new Promise(function (resolve, reject) {
    api.get('org/plist/' + orgid, {}).then((response) => {
      resolve(response)
    })
  })
}

// 服务管理

api.querySvrList = function (params) { // 查询服务列表
  return new Promise(function (resolve, reject) {
    api.post('svr/list', params).then((response) => {
      resolve(response)
    })
  })
}

api.svrAdd = function (params) { // 保存服务
  return new Promise(function (resolve, reject) {
    api.post('svr/add', params).then((response) => {
      resolve(response)
    })
  })
}

api.svrUpdate = function (params) { // 更新服务
  return new Promise(function (resolve, reject) {
    api.post('svr/update', params).then((response) => {
      resolve(response)
    })
  })
}
// 服务注册
api.queryRegList = function (params) { // 查询注册服务列表
  return new Promise(function (resolve, reject) {
    api.post('reg/list', params).then((response) => {
      resolve(response)
    })
  })
}

api.regAdd = function (params) { // 保存注册服务
  return new Promise(function (resolve, reject) {
    api.post('reg/add', params).then((response) => {
      resolve(response)
    })
  })
}

api.regUpdate = function (params) { // 更新注册服务
  return new Promise(function (resolve, reject) {
    api.post('reg/update', params).then((response) => {
      resolve(response)
    })
  })
}

// 服务组管理
api.queryGrpList = function (params) { // 查询服务组列表
  return new Promise(function (resolve, reject) {
    api.post('grp/list', params).then((response) => {
      resolve(response)
    })
  })
}

api.grpAdd = function (params) { // 保存服务组
  return new Promise(function (resolve, reject) {
    api.post('grp/add', params).then((response) => {
      resolve(response)
    })
  })
}

api.grpUpdate = function (params) { // 更新服务组
  return new Promise(function (resolve, reject) {
    api.post('grp/update', params).then((response) => {
      resolve(response)
    })
  })
}

// 服务认证
api.queryAuthList = function (params) { // 查询服务认证列表
  return new Promise(function (resolve, reject) {
    api.post('auth/list', params).then((response) => {
      resolve(response)
    })
  })
}

api.authAdd = function (params) { // 保存认证服务
  return new Promise(function (resolve, reject) {
    api.post('auth/add', params).then((response) => {
      resolve(response)
    })
  })
}

api.authUpdate = function (params) { // 更新认证服务
  return new Promise(function (resolve, reject) {
    api.post('auth/update', params).then((response) => {
      resolve(response)
    })
  })
}

// 服务授权

api.querySvrAuthList = function (params) { // 查询服务授权列表
  return new Promise(function (resolve, reject) {
    api.post('svr/auth/list', params).then((response) => {
      resolve(response)
    })
  })
}

api.querySvrAuthGrpList = function (params) { // 查询注册服务组列表
  return new Promise(function (resolve, reject) {
    api.post('svr/auth/grp/list', params).then((response) => {
      resolve(response)
    })
  })
}
