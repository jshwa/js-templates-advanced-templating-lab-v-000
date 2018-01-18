function init() {
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
    name: document.getElementById("recipeName").value;
    description: document.getElementById("recipeDesc").value;
    ingredients: document.getElementById("recipeName").value;
  }

  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var displayRecipe = recipe()
}
