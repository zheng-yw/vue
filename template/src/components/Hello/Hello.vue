<template>
  <div class="compo">
    <img alt="Vue logo" src="../../assets/logo.jpg"/>
    <h1>{{ msg }}</h1>
    <Talk :msg="conf.__config__.info"/>
  </div>
</template>

<script>
import Talk from "./compos/Talk.vue";

export default {
  name: "<%= options.cname %>",
  props: {
    msg: String,
    conf: Object
  },
  components: {
    Talk
  },
  methods: {
    getData() {
      return this.conf;
    },
    say() {
      return `张三：${this.msg}`;
    }
  }
};
</script>

<style>
h1 {
  color: blue;
}
</style>
