<script setup>
import CocktailThumb from "../components/CocktailThumb.vue";
import AppLayout from "../components/AppLayout.vue";
import { useRootStore } from "../stores/root";
import { storeToRefs } from "pinia";
import { ref } from "vue";
const rootStore = useRootStore();
rootStore.getIngredients();
const { ingredients, cocktails } = storeToRefs(rootStore);
const ingredient = ref(null);
const getCocktails = () => {
  rootStore.getCocktails(ingredient.value);
};
console.log(cocktails);
</script>

<template>
  <AppLayout imgUrl="/src/assets/img/bg-1.jpg">
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select
            v-model="ingredient"
            placeholder="Choose main ingredient"
            size="large"
            class="select"
            @change="getCocktails"
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious
          cocktail recipes by ingredient through our cocktail generator.
        </div>
        <img src="/src/assets/img/cocktails.png" alt="cocktails" class="img" />
      </div>
      <div class="info">
        <div class="title">COCKTAILS WITH {{ ingredient }}</div>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailThumb
            v-for="cocktail in cocktails"
            :key="cocktail.idDrink"
            :cocktail="cocktail"
          />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style scoped lang="sass">
@import '../assets/styles/main'
.wrapper
    display: flex
    align-items: center

.info
    padding: 80px 0
    text-align: center

.select-wrapper
    padding-top: 50px
.select
    width: 220px
.text
    padding-top: 50px
    line-height: 36px
    letter-spacing: 0.1em
    color:$textMuted
    margin: 0 auto
    max-width: 516px
.img
    margin-top: 60px

.cocktails
    display: flex
    flex-wrap: wrap
    max-height: 400px
    overflow-y: auto
    justify-content: space-between
    align-items: center
    margin-top: 60px
</style>
