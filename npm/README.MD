# sd-throttle

sd-throttle is an prevent duplicate clicks directive for vue.js.
# Install

```Bash
npm install sd-throttle --save
```
in vue:

```JavaScript
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
```HTML
<button
  v-throttle:[timeout]="isThrottle"
  @click="clickFn('click button')">click</button>
```

```JavaScript
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