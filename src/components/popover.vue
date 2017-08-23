<template>
  <span>
    <transition :name="transition">
      <div ref="popper" class="el-popover" :class="[popperClass]" v-show="showPopper" :style="{ width: width + 'px',zIndex: 'px' }">
        <div class="el-popover__title" v-if="title" v-text="title"></div>
        <slot>{{ content }}</slot>
      </div>
    </transition>
  </span>
</template>

<script>
import Popper from 'element-ui/src/utils/vue-popper';
import { on, off } from 'element-ui/src/utils/dom';

export default {
  name: 'popover',

  mixins: [Popper],

  props: {
    title: String,
    content: String,
    popperClass: String,
    width: {},
    visibleArrow: {
      default: true
    },
    transition: {
      type: String,
      default: 'fade-in-linear'
    }
  },

  watch: {
    showPopper(val) {
      if (!val) this.destroyPopper()
    },
    reference(val) {
      if (this.popperJS) {
        this.popperJS._reference = val
      }
      this.updatePopper()
      this.popperJS._popper.style.zIndex = this.popperJS._popper.style.zIndex + 1
    }
  },
  mounted() {
    on(document, 'click', this.handleDocumentClick)
  },
  methods: {
    handleDocumentClick(e) {
      let reference = this.reference
      const popper = this.$refs.popper

      if (!this.$el ||
        !reference ||
        this.$el.contains(e.target) ||
        !reference ||
        !reference.contains ||
        reference.contains(e.target) ||
        !popper ||
        popper.contains(e.target)) return
      this.$emit('update:value', false);
    }
  },

  destroyed() {
    off(document, 'click', this.handleDocumentClick)
  }
};
</script>
