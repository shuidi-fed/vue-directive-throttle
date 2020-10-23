<template>
  <div>
    <h2>Example</h2>
    <div>
      <div>点击按钮，1秒内只触发一次</div>
      <button v-throttle:[b]="isThrottle" @click="clickFn">click点击 {{num}}</button>
    </div>
  </div>
</template>

<script>
// import throttle from "@"

export default {
  name: 'HelloWorld',
  data() {
    return {
      b: 1,
      isThrottle: false,
      num: 0
    }
  },
  // directives: {
  //   throttle
  // },
  methods: {
    clickFn() {
      this.num ++
    },
  },
}
</script>

<style scoped>
button {
  margin: 10px;
}
</style>
