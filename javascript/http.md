# 关于HTTP

讲述以下内容：
* 三次握手
* 四次挥手
* HTTP1.0
* HTTP1.1
* HTTP2
* HTTPS

### HTTP

* HTTP => 应用层
* TCP => 传输层
* `(HTTPS的加密层)`
* IP => 网络层
* 数据链路
* 网卡


### HTTPS

> HTTPS（全称：Hyper Text Transfer Protocol over Secure Socket Layer 超文本传输**安全**协议）


HTTPS在传统的HTTP和TCP之间加了一层用于`加密解密的SSL/TLS层`（安全套接层Secure Sockets Layer/安全传输层Transport Layer Security）层。使用HTTPS必须要有一套自己的数字证书（**包含公钥和私钥**）。

HTTPS解决的问题
* 信息加密传输：第三方无法窃听；
* 校验机制：一旦被篡改，通信双方会立刻发现；
* 身份证书：防止身份被冒充。


HTTPS加密过程：
1. 客户端请求服务器获取`证书公钥`
2. 客户端解析证书（无效会弹出警告）
3. 生成随机值
4. 用`公钥加密`随机值（**秘钥**）
5. 客户端将`秘钥`发送给服务器
6. 服务端用`私钥`解密得到`秘钥`
7. 通过`秘钥`加密要发送的内容
8. 将加密的内容发送给客户端
9. 客户端用`秘钥`解密信息

![HTTPS](/img/https.png)

加密过程使用了对称加密和非对称加密。
* 对称加密: **客户端和服务端采用相同的密钥经行加密**
* 非对称加密：**客户端通过公钥加密。服务端通过私钥解密**


附：
* HTTPS默认使用443端口，而HTTP默认使用80端口。
* TLS就是从SSL发展而来的，只是SSL发展到3.0版本后改成了TLS

参考： [刘某某_adf3](https://www.jianshu.com/p/954961bac588)