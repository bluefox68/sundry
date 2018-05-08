# nginx的安装
  nginx安装前需要先安装以下模块:
  
  1.pcre:
  2.openssl:
  3.zlib:

# nginx 配置https
  在nginx中配置https需要两步。

  1.生成自签名的SSL证书。
    可以使用itranswarp.js项目中的gencert.sh脚本生成自签名的SSL证书。其会生成res.tongbanjie.com.csr、res.tongbanjie.com.origin.key、res.tongbanjie.com.crt、res.tongbanjie.com.key四个文件。
    注：
      itranswarp.js项目见：https://github.com/bluefox68/itranswarp.js.git
      gencert.sh文件见：itranswarp.js/conf/ssl 

    具体操作为：
     ./gencert.sh; 


  2.配置nginx:
   在server中添加如下配置项：

      ssl on;
      ssl_certificate /Users/kk/tests/itranswarp.js/conf/ssl/res.tongbanjie.com.crt; ##这里的路径为上述生成自签名证书步骤中生成的后缀名为crt的文件的绝对路径.
      ssl_certificate_key /Users/kk/tests/itranswarp.js/conf/ssl/res.tongbanjie.com.key;##这里的路径为上述生成自签名证书步骤中生成的域名+.key后缀名的文件的绝对路径.

参见：
  http://tengine.taobao.org/book/index.html