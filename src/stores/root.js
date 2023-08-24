import axios from "axios";
import { defineStore } from "pinia";
import { INGREDIENTS_URL, COCKTAILTS_BY_INGR_URL } from "../constants";
export const useRootStore = defineStore("root", {
  state: () => ({
    ingredients: [],
    cocktails: [],
  }),
  actions: {
    async getIngredients() {
      const data = await axios.get(INGREDIENTS_URL);
      this.ingredients = data?.data?.drinks;
    },

    async getCocktails(ingredient) {
      const data = await axios.get(`${COCKTAILTS_BY_INGR_URL}${ingredient}`);
      this.cocktails = data?.data?.drinks;
    },
  },
});
