<script setup>
const props = defineProps({
  cocktail: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <RouterLink :to="`/cocktails/${cocktail.idDrink}`">
    <div class="root">
      <div
        class="pic"
        :style="`background-image: url(${cocktail.strDrinkThumb})`"
      ></div>
      <div class="name">{{ cocktail.strDrink }}</div>
    </div>
  </RouterLink>
</template>
<style lang="sass" scoped>
@import '../assets/styles/main'

.root
    width: calc((100% - 76px)/3)
    padding-right: 38px
    padding-bottom: 20px
    &:nth-child(3n+3)
            padding-right: 0

.pic
    width: 120px
    height: 120px
    margin: 0 auto
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: 100%
.name
    padding-top: 16px
    letter-spacing: 0.1
</style>
