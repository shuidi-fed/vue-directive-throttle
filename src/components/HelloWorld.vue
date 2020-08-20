<template>
  <div class="hello">
    <div style="position: fixed; height:0px;">
      <button v-throttle:[b]="isThrottle" @click="clickFn('点击了button')">click点击</button>
    </div>
  </div>
</template>

<script>
import throttle from "../directives/throttle"
export default {
  name: 'HelloWorld',
  data() {
    return {
      b: 1000,
      isThrottle: true
    }
  },
  directives: {
    throttle
  },
  methods: {
    clickFn(val) {
      console.log(val)
    },
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
