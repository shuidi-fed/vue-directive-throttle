/**
 * @author CRM组
 * @date 2020/08/19
 * @description click节流，默认500ms
 */
export default {
  inserted: (el, binding) => {
    let timer = null
    let timeOut = 500  // 默认节流时间
    let isThrottle = true // 外界影响节流因素
    const pTimeOut = +binding.arg
    if (Number.isNaN(pTimeOut)) {
      throw new Error('v-throttle: not a number')
    } else {
      timeOut = pTimeOut
    }
    if (binding.value !== undefined) {
      if (typeof binding.value !== 'boolean') {
        throw new Error('v-throttle="" not a boolean')
      } else {
        isThrottle = binding.value
      }
    }
    if(pTimeOut === 0) return
    el.parentElement.addEventListener(
      'click',
      (e) => {
        if (timer || !isThrottle) {
          e.stopPropagation()
        } else {
          timer = setTimeout(() => {
            clearTimeout(timer)
            timer = null
          }, timeOut)
        }
      },
      true
    )
  },
}
