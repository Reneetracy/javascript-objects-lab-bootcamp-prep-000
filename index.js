var recipes = { ingredient: 'amount' };

function updateObjectWithKeyAndValue(recipes, ingredient, amount){
  return object.assign({}, recipes, { [ingredient]: amount })
}


function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, amount){
  recipes[ingredient] = amount;
  return recipes
}
