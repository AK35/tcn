<template>
  <div class="tc-page">
    <div v-if="backtop" class="tc-page-scroll" v-backtop="scroll">
      <slot></slot>
    </div>
    <div v-else class="tc-page-scroll">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'page',
  props: {
    backtop: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    scroll(top) {
      if (top) {
        this.$emit('top-on')
      } else {
        this.$emit('top-off')
      }
    }
  }
};
</script>
<style lang="less">
.tc-page {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #ffffff;
}

.tc-page-scroll {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 20px;
}
</style>
