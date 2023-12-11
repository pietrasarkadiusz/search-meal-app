import axiosClient from '../axiosClient';

export function searchMeals({ commit }, keyword) {
  axiosClient.get('search.php?s=' + keyword).then(({ data }) => {
    commit('setSearchedMeals', data.meals);
  });
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get('search.php?f=' + letter).then(({ data }) => {
    commit('setMealsByLetter', data.meals);
  });
}

export function searchMealsByIngredient({ commit }, ingredient) {
  axiosClient.get('filter.php?i=' + ingredient).then(({ data }) => {
    commit('setMealsByIngredient', data.meals);
  });
}

export function searchMealsByCategory({ commit }, category) {
  axiosClient.get('filter.php?c=' + category).then(({ data }) => {
    commit('setMealsByCategory', data.meals);
  });
}

export function searchMealsByArea({ commit }, area) {
  axiosClient.get('filter.php?a=' + area).then(({ data }) => {
    commit('setMealsByArea', data.meals);
  });
}
