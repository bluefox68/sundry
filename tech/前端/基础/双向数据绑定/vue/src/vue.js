//vue初始化的时候，调用监听者的初始化方法，劫持数据对象。在访问数据对象的时候，将订阅者添加到订阅器。在数据对象更新的时候，调用订阅器的通知方法，通知所有订阅者调用它们自身的数据更新方法进行数据更新。
//扫描节点下的指令，然后进行匹配，匹配到后生成订阅器(需要传this对象，订阅的属性，回调函数)。


import { observe } from './observe';
import Compile from './compile';

function SelfVue (options) {
  var _self = this;
  this.data = options.data();
  this.methods = options.methods;

  Object.keys(this.data).forEach(function(key) {
    _self.proxyKeys(key);
  });

  observe(this.data);
  new Compile(options.el, this);
  options.mounted.call(this); // 所有事情处理好后执行mounted函数
}

SelfVue.prototype = {
  proxyKeys: function (key) {
    var self = this;
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get: function proxyGetter() {
        return self.data[key];
      },
      set: function proxySetter(newVal) {
        self.data[key] = newVal;
      }
    });
  }
}