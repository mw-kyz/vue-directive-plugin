import Vue from 'vue'
import Loading from '../components/Loading.vue'

// 定义 loading 指令
const loadingDirective = {
  inserted: function(el, binding) {
    // 创建 loading 组件构造函数
    const LoadingCtor = Vue.extend(Loading)
    // new 一个 loading组件实例
    const loadingInstance = new LoadingCtor()
    // 组件挂载
    el.instance = loadingInstance.$mount()
    console.log(binding.value)
    if (binding.value) {
      // 将组件挂载到绑定指令的元素上
      append(el)
    }
  },
  update(el, binding) {
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  }
}

function append(el) {
  el.appendChild(el.instance.$el)
}

function remove(el) {
  el.removeChild(el.instance.$el)
}

export default loadingDirective