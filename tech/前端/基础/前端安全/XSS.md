# XSS概述
  XSS的目标是让其他站点的js文件运行在目标站点的上，这主要发生在页面渲染阶段。在该阶段发生了某些非预期的脚本行为，该脚本可能来自用户的输入，也可能来自域外的其他js文件，不一而足。

  主要有两点：
  1.其他站点的js文件运行在目标站点上
  2.发生起源主要来自于用户输入

# XSS的类型：

XSS的发生起源来自于用户输入，因此根据用户输入数据以何种形式、何时触发XSS、是否有后端服务器的参与将其划分为三种类型:

1.DOM XSS:
2.反射型XSS:后端参与但不存储
3.存储型XSS:后端参与且存储



## DOM XSS:
1.一般形式:
  例：
  test.html:
     <script>
      eval('alert(location.hash.slice("1"))');
     </script>

  攻击者输入：
    localhost/test.html#document.cookie

2.预防措施：
 (1)前端解析数据时做相关的字串检测和转义处理；
 
## 反射型XSS：
1.一般形式：
  (1)形式一：
    test.html:
      <?php echo $_GET['name'] ?>
    攻击者输入:
      localhost/test.php?name=alert(document.cookie) 

  (2)形式二：
    test.html:
      <?php echo $_GET['name'] ?>
    攻击者输入:
      localhost/test.php?name=data:text/html;charset=utf-8;base64,PHNjcmlwdD5hbGVydChkb2N1bWVudC5jb29raWUpPC9zY3JpcHQ+

    注：name后面的编码字串解码后是“alert(document.cookie)”。

2.预防措施:
  (1)后端解析前端的数据时做相关的字串检测和转义处理；
  (2)前端对用户的数据做excape转义


## 存储型XSS：

# 总的预防措施:
  对输入(和URL参数)进行过滤，对输出进行编码
  
## 需要留意的输入源：
  1.document.URL；
  2.location.hash；
  3.location.research；
  4.document.referrer(此处应尤为注意，referrer属性虽然可用于避免CSRF，但可触发XSS攻击)；
  5.XHR返回值（跨域返回值）；
  6.form表单及各种input框。

## 需要留意的操作：

1.直接输出HTML内容
  document.body.innerHTML = ...
  document.body.outterHTML = ...
  document.write()

2.HTML标签内联脚本:
  <img src='abc' onerror=alert('error')>

3.直接执行脚本:
  eval
  new Function(){}
  setTimeout()
  window.execScript()

4.打开新页面触发XSS:
  window.open()
  location.href = ...
  location.hash = ...

## 常见方法：
1.字串检测和转义；
2.在执行脚本和解析数据时，避免eval和new Funciton等操作，应使用JSON.parse、iframe沙盒和webWorker等。
3.使用escape，针对data URI内容做正则判断，禁止用户输入非显示信息



