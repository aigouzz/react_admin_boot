import dva from 'dva';
import '@/assets/css/index.less';
import '@/mock';
const createHashHistory = require('history').createHashHistory
const Router = require('@/router/router').default

//1. 初始化
const app = dva({
    history: createHashHistory(),
});

//2. 路由
app.router(Router);
console.log(Router)

//2. 注册全局model
app.model(require('@/models/global').default);

//3. 启动 
app.start('#root');

export default {
    app,
    store: app._store,
    dispatch: app._store.dispatch
};
