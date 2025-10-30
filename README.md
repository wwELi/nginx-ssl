***生成SSL证书***
进入 certs/ 目录执行：
```bash
# 生成私钥
openssl genrsa -out server.key 2048

# 生成证书签名请求
openssl req -new -key server.key -out server.csr \
  -subj "/C=CN/ST=Beijing/L=Beijing/O=LocalDev/OU=Dev/CN=localhost"

# 生成自签名证书（有效期365天）
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
```

***启动服务***
```bash
node --inspect=0.0.0.0:9230 server.js
```
--inspect 就会建立ws连接（比如ws://0.0.0.0:9230/8dd9977b-0dd6-4bae-880c-513f73eecc18）可以接入chrome inspect 进行调试， chrome://inspect  只要支持v8 inspect 协议/Chrome DevTools Protocol 都可以进行调试 包括node服务，APP 包含webview的，Electron

