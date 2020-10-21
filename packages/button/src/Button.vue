<!--
 * @Author: shenxh
 * @Date: 2020-10-20 10:13:24
 * @LastEditors: shenxh
 * @LastEditTime: 2020-10-21 17:37:44
 * @Description: 组件-按钮
-->

<template>
  <div class="xx-button">
    123456789
  </div>
</template>

<script>
// import XxBadge from '@/components/common/badge';

export default {
  name: 'xx-button',
  components: {
    // XxBadge
  },
  props: {
    type: String, // 颜色类型
    plain: Boolean, // 无背景色
    disabled: Boolean, // 禁用

    /* 左侧图标 */
    leftIcon: Boolean, // 左侧图标
    leftImgSrc: String, // img 路径 require('@/assets/logo.png')
    leftIconClass: String, // 图标 class

    /* 右侧图标 */
    rightIcon: Boolean, // 右侧图标
    rightImgSrc: String, // img 路径 require('@/assets/logo.png')
    rightIconClass: String, // 图标 class
    rightNumber: Number // 数字
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  // created() {},
  mounted() {
    // 解决 IOS 点击不能触发 `:active` 效果的问题
    document.body.addEventListener('touchstart', () => {});
  },
  beforeDestroy() {
    document.body.removeEventListener('touchstart', () => {});
  },
  methods: {}
};
</script>

<style lang="less">
.xx-button {
  width: 100px;
  height: 50px;
  background-color: #f00;
}
</style>
