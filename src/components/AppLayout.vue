<script setup>
const props = defineProps({
  imgUrl: { type: String, requied: true },
});
</script>
<template>
  <div class="root">
    <div :style="`background-image: url(${imgUrl})`" class="img"></div>
    <div class="main">
      <el-button class="btn">Get random Cocktail</el-button>
      <slot></slot>
    </div>
  </div>
</template>
<style lang="sass" scoped>
@import '../assets/styles/main'
.root
    display: flex
    background-color: $background
    min-height: 100vh
.img
    width: 50%
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: cover
.main
    width: 50%
    padding: 32px 40px
.btn
    position: absolute
    top: 32px
    right: 40px
    background-color: $accent
    border-color:  $accent
    color: $text
    font-size: 16px
    font-family: 'Raleway'

    &:hover,
    &:active
      background-color: darken($accent, 10%)
      border-color: darken($accent, 10%)
</style>
