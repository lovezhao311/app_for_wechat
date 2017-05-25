import Request from './utils/request';
import Logs from './utils/logs';

App({
  debug:'develop',
  Request: new Request,
  Logs: new Logs,
  // 初始化小程序
  onLaunch(options) {
    
  }
})

