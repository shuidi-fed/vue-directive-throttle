# sd-throttle

sd-throttle is an prevent duplicate clicks directive for vue.js.

[![NPM version](https://img.shields.io/npm/v/sd-throttle.svg?style=flat)](https://npmjs.org/package/sd-throttle)

# Install

```bash
npm install sd-throttle --save
```
in vue:

```js
// register globally
import throttle from 'sd-throttle'
Vue.use(throttle)

// or for a single instance
import throttle from 'sd-throttle'
new Vue({
  directives: {throttle}
})

```
## Usage
```html
<button
  v-throttle:[timeout]="isThrottle"
  @click="clickFn('click button')">click</button>
```

```js
new Vue({
  el: '#app',
  data: {
    // The unit is seconds
    timeout: 1,
    // The default value is true. You can click
    // value is false can't click
    isThrottle: true
  },
   methods: {
    clickFn(val) {
      console.log(val)
    }
  }
});
```