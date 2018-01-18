function init() {
  document.querySelector('main').innerHTML += document.getElementById('recipe-form-template')
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function loadIssues() {
  var template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  var result = template(issues)
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function createRecipe() {
  var recipe = {
    recipeName: document.getElementById("recipeName").value,
    recipeDesc: document.getElementById("recipeDesc").value,
    ingredients: document.getElementsByName("ingredients").value
  }

  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var displayRecipe = recipeTemplate(recipe)
}
