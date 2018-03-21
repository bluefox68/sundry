
# 实现原理：
  vuex将自己作为一个Vue的插件注入，然后在Vue根组件初始化时调用vuex.Store方法创建store实例，然后将其赋给根组件实例化对象的$store属性。而在创建store实例时，其会根据store构造函数传入的参数，进行module树构造。为各个module对象初始化状态，注册actions、mutations等。最后在store的dispatcher方法被调用的时候，触发对应action,然后对应提交相应mutation，最后相应mutation修改相应状态。

# vuex使用流程：
  组件view触发action、action提交mutation、mutation对state进行更新，state变化则更新组件view。
