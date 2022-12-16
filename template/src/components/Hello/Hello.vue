<template>
  <div class="compo">
    <img alt="Vue logo" src="../../assets/logo.jpg"/>
    <h1>{{ msg }}</h1>
    <Talk :msg="conf.__config__.info"/>
    <%_ if (options.sto) { _%>
    <button type="button" @click="setMsg">更改store为内容</button>
    <%_ } _%>
  </div>
</template>

<script>
<%_ if (options.sto) { _%>
import { mapGetters } from 'vuex';
import store from '../../store';
<%_ } _%>
import Talk from './compos/Talk.vue';
import '../../assets/style.css';

export default {
  <%_ if (options.sto) { _%>
  store,
  <%_ } _%>
  name: '<%= options.cname %>',
  props: {
    msg: String,
    conf: Object,
  },
  components: {
    Talk,
  },
  <%_ if (options.sto) { _%>
  computed: {
    ...mapGetters([
      'getMessage',
    ]),
  },
  <%_ } _%>
  methods: {
    getData() {
      return this.conf;
    },
    say() {
      return `张三：${this.msg}`;
    },
    <%_ if (options.sto) { _%>
    setMsg() {
      console.log('store message before: ', this.getMessage);
      this.$store.commit('setMessage', this.conf.__config__.info);
      console.log('store message after: ', this.getMessage);
    },
    <%_ } _%>
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
