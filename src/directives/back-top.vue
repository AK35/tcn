<template>
    <div :class="classes" :style="styles" @click="back">
        <div :class="innerClasses">
            <i class="el-icon-arrow-up"></i>
        </div>
    </div>
</template>
<script>
import { scrollTop, typeOf } from 'utils/assist'
const prefixCls = 'tc-back-top';

export default {
    name: 'backTop',
    props: {
        height: {
            type: Number,
            default: 1
        },
        bottom: {
            type: Number,
            default: 30
        },
        right: {
            type: Number,
            default: 30
        },
        duration: {
            type: Number,
            default: 1000
        }
    },
    data() {
        return {
            targetEl: null,
            backTop: false,
            doAction: null,
        };
    },
    mounted() {

    },
    beforeDestroy() {
        if (this.targetEl) {
            this.targetEl.removeEventListener('scroll', this.handleScroll, false)
            this.targetEl.removeEventListener('resize', this.handleScroll, false)
        }
    },
    computed: {
        classes() {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-show`]: this.backTop
                }
            ];
        },
        styles() {
            return {
                bottom: `${this.bottom}px`,
                right: `${this.right}px`
            };
        },
        innerClasses() {
            return `${prefixCls}-inner`
        }
    },
    methods: {
        initEvents(elm, action) {
            this.targetEl = elm
            this.doAction = action
            if (!(this.doAction && typeOf(this.doAction) == 'function')) {
                this.doAction = false
            }
            if (this.targetEl) {
                this.targetEl.addEventListener('scroll', this.handleScroll, false);
                this.targetEl.addEventListener('resize', this.handleScroll, false);
            }
        },
        handleScroll() {
            this.backTop = this.targetEl.scrollTop >= this.height;
            if (this.doAction) this.doAction(this.backTop)
        },
        back() {
            scrollTop(this.targetEl, this.targetEl.scrollTop, 0, this.duration)
        }
    }
};
</script>
