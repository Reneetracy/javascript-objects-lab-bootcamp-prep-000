var recipes = { ingredient: 'amount' };

function updateObjectWithKeyAndValue(recipes, ingredient, amount){
  return object.assign({}, recipes, { [ingredient]}: amount })
}
