function init() {
  document.querySelector('main').innerHTML += document.getElementById('recipe-form-template').innerHTML;
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);

  Handlebars.registerHelper('displayIngredient', function (this) {
    this.value;
  })
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var recipe = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    ingredients: document.getElementsByName("ingredients")
  }

  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var displayRecipe = recipeTemplate(recipe)
  document.querySelector("main").innerHTML += displayRecipe
}

function displayEditForm() {
  document.querySelector('main').innerHTML += document.getElementById('recipe-form-template').innerHTML;
}

function updateRecipe() {

}
