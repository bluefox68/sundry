一、优缺点:
  1.优点：
    (1)轻巧:源码体积压缩后仅为25.11kb。
    (2)高性能:
    (3)可组件化:
    (4)实现mvvm，即实现了数据双向绑定。
    (5)容易上手:api简单，官方文档清晰
    (6)灵活:既容易与其它库或已有项目整合，也可以独立开发复杂的单页应用。

  2.缺点：
    (1)由个人维护
    (2)生态不如react大
    (3)不支持IE8

二、生命周期:
  beforeCreate:组件实例被创建前
  created:组件实例被创建后

  beforeMount:模板编译挂载之前
  mounted:模板编译挂载之后

  beforeUpdate:组件更新前
  updated:组件更新后

  activated:组件被激活时调用
  deactivated:组件被移除时调用

  beforeDestory:组件销毁前调用
  destoryed:组件销毁后调用

三、数据双向绑定：数据劫持+订阅发布。
  (一)基础概念：
    1.数据监听器:
    2.指令解析器:
    3.订阅者:
    4.订阅器:
      管理订阅者
      通知订阅者
    5.发布者:

  (二)原理:
    编译html时，为相关数据绑定节点生成订阅者，并将订阅者添加到消息管理器

四、VueRouter实现原理:

  VueRouter将自己作为一个Vue的插件注入，然后在Vue根组件初始化时调用VueRouter的初始化函数，该初始化函数会注册监听函数监听路径的变化。在监听到路径变化时，进行路径匹配，匹配到对应的路径后就拿到了该路径对应的组件，然后调用路由视图的渲染方法渲染该路径对应的组件。

  注：监听路径变化有两种方法：
  (1)hash:监听onhashchange事件。
  (2)html5的新接口：监听popState事件。pushState、replaceState。

五、vuex:
  1.vuex使用流程：
   组件view触发action、action提交mutation、mutation对state进行更新，state变化则更新组件view。
  2.实现原理：
   vuex将自己作为一个Vue的插件注入，然后在Vue根组件初始化时调用vuex.Store方法创建store实例，然后将其赋给根组件实例化对象的$store属性。而在创建store实例时，其会根据store构造函数传入的参数，进行module树构造。为各个module对象初始化状态，注册actions、mutations等。最后在store的dispatcher方法被调用的时候，触发对应action,然后对应提交相应mutation，最后相应mutation修改相应状态。

六、axios:

七、兄弟元素之间的通信：
  1.通过第三方vue实例
  2.通过vuex

