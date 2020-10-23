import throttle from './directive'

const install = function (Vue) {
  Vue.directive('throttle', throttle)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.throttle = throttle
  Vue.use(install); // eslint-disable-line
}

throttle.install = install
export default throttle