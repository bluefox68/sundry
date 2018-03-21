# cookie的局限性:
1.Cookie功能需要浏览器的支持。
 (1)若浏览器不支持Cookie或者把Cookie禁用了，Cookie功能就会失效。
 (2)不同的浏览器采用不同的方式保存Cookie。
2.不可跨域名性:只能在同域名之间传输，不同域名之间不能传输。
3.数据的大小限制在4KB。
4.cookie中使用Unicode字符时需要对Unicode字符进行编码，否则会乱码。例:中文属于Unicode字符.

# cookie的安全性:
1.通过页面输入框输入js代码获取cookie，并在输入框中执行其他js代码来执行恶意程序。
2.通过在评论中提交恶意js代码，然后诱导用户点击来获取用户cookie。

详见：http://www.jb51.net/article/61553.htm
