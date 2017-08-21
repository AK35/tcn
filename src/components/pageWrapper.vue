<template>
  <div>
    <div v-if="backtop" class="tc-page-wrapper" v-backtop="scroll">
      <slot></slot>
    </div>
    <div v-else class="tc-page-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pageWrapper',
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
.tc-page-wrapper {
  position: absolute;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
}
</style>
