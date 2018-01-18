function init() {
  document.querySelector('main').innerHTML += document.getElementById('recipe-form-template').innerHTML;
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function () {
    {{#each ingredients}}
      {{this.value}}
    {{/each}}
  })
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var recipe = {
    recipeName: document.getElementById("recipeName").value,
    recipeDesc: document.getElementById("recipeDesc").value,
    ingredients: document.getElementsByName("ingredients")
  }

  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var displayRecipe = recipeTemplate(recipe)
  document.querySelector("main").innerHTML += displayRecipe
}
