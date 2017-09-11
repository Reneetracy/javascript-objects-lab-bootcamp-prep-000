var recipes = { ingredient: 'amount' };

function updateObjectWithKeyAndValue(recipes, ingredient, amount){
  var newRecipe = Object.assign({}, { ingredient: amount });
  return newRecipe
}


function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, amount){
  recipes[ingredient] = amount;
  return recipes
}
