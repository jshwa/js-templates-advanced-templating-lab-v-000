function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient', function(context) {
    return context.value;
  })

  var firstForm = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  document.querySelector('main').innerHTML += firstForm({createOrUpdate: "createRecipe()"});

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  recipe = getRecipe();
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var displayRecipe = recipeTemplate(recipe)
  document.querySelector("main").innerHTML += displayRecipe
}

function displayEditForm() {
  recipe = getRecipe();
  var newForm = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  document.querySelector('main').innerHTML += newForm({createOrUpdate: "updateRecipe()"}, recipe);
}

function updateRecipe() {
  recipe = getRecipe();
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var displayRecipe = recipeTemplate(recipe)
  document.querySelector("main").innerHTML += displayRecipe
}

function getRecipe() {
  var recipe = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    ingredients: document.getElementsByName("ingredients")
  }
  return recipe
}
