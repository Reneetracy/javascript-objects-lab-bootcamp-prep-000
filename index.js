var recipes = { ingredient: 'amount' };

function updateObjectWithKeyAndValue(recipes, ingredient, amount){
  var newRecipe = Object.assign({recipes}, { ingredient: amount });
  return newRecipe
}


function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, amount){
  recipes[ingredient] = amount;
  return recipes
}
