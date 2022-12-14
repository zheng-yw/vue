<template>
  <div class="panel">
    <%_ if (options.eui) { _%>
    <el-form size="small" label-width="90px">
      <el-form-item label="话题：">
        <span class="title">{{ activeData.__config__.info }}</span>
      </el-form-item>
      <el-form-item label="表单栅格：">
        <el-slider v-model="activeData.__config__.span" :max="24" :min="1" :marks="{12:''}"/>
      </el-form-item>
      <el-form-item label="内容：">
        <el-input v-model.trim="activeData.__config__.info" placeholder="请输入对话内容"/>
      </el-form-item>
    </el-form>
    <%_ } else { _%>
    <div class="title">话题：{{ activeData.__config__.info }}</div><br/>
    内容：<input type="input" class="info" v-model="activeData.__config__.info"/>
    <%_ } _%>
  </div>
</template>

<script>
export default {
  name: "HelloPanel",
  props: {
    activeData: Object
  }
};
</script>

<style scoped>
.title {
  color: #d30b2e;
}
.info {
  width: 240px;
  height: 20px;
  outline: none;
  line-height: 20px;
}
</style>
