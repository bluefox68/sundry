# mime.types配置
  mime.types是文件扩展名与文件类型映射表。nginx根据映射关系，设置http请求响应头的Content-Type值。当在映射表找不到时，使用nginx.conf中default-type指定的默认值。
# fastcgi_params配置：(同类的还有fastcgi.conf和uwsgi_params、scgi_params)
## fastcgi_params的作用：
  fastcgi_params配置文件用来传递服务器变量。若nginx配置Fastcgi，其解析时会调用fastcgi_params配置文件来传递服务器变量。
## fastcgi_params与fastcgi.conf的区别
  基本没有区别，引进astcgi.conf的原因是fastcgi_param的配置一般不建议硬编码，但很多人在使用SCRIPT_FILENAME时使用了硬编码的方式。而且fastcgi_param的配置在同级多次使用的时候，是新增而不是替换。换句话说，如果在同级定义两次SCRIPT_FILENAME，那么它们都会被发送到后端，这可能会导致一些潜在的问题。因此，就引进了astcgi.conf文件来处理有此类需求的配置。
## fastcgi_params与uwsgi_params的区别
  只有前缀不一样，以uwsgi_param开始而非fastcgi_param
## fastcgi_params与scgi_params的区别
  只有前缀不一样，以uwsgi_param开始而非scgi_params
# nginx的配置：
主要是nginx.conf文件的配置，其他配置文件一般无需做了解.
常见的nginx配置项: 
1.worker_process：表示工作进程的数量，一般设置为cpu的核数
2.worker_connections：表示每个工作进程的最大连接数
3.server{}块：定义了虚拟主机。
  (1)listener:监听端口
  (2)server_name:监听域名
  (3)location{}:是用来为匹配的URI进行配置.
    <1>root:指定对应uri的资源查找路径
    <2>index:指定首页index文件的名称
    <3>
# koi-utf、koi-win、win-utf
这三个文件都是与编码转换映射文件，用于在输出内容到客户端时，将一种编码转换到另一种编码。