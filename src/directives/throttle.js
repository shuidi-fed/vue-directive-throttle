/**
 * @author CRM组
 * @date 2020/08/19
 * @description click节流，默认500ms
 */
export default {
  inserted: (el, binding) => {
    let timer = null
    let isThrottle = true // 外界影响节流因素
    if( typeof binding.arg !== "number" ){
      throw new Error('v-throttle: not a number')
    }
    if( binding.value !== undefined ){
      if( typeof binding.value !== "boolean" ){
        throw new Error('v-throttle="" not a boolean')
      } else {
        isThrottle = binding.value
      }
    }
    let timeOut = binding.arg || 500  //  节流时间
    el.parentElement.addEventListener('click', (e) => {
      if (timer || !isThrottle) {
        e.stopPropagation()
      } else {
        timer = setTimeout(() => {
          clearTimeout(timer)
          timer = null
        }, timeOut)
      }
    }, true)
  }
}
