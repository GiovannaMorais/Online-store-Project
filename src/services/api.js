// Iniciando implementação.
function readsParams(categoryId, query) {
  const strings = [];
  let callString;
  if (categoryId !== '') strings[0] += `category=${categoryId}`;
  if (query !== '') strings[1] += `q=${query}`;
  if (strings.length !== 0) {
    for (let i = 0; i < strings.length; i += 1) {
      if (i === strings.length - 1) {
        callString += strings[i];
      } else {
        callString += strings[i];
        callString += '&';
      }
    }
  } else {
    callString = `q=${''}`;
  }
  return callString;
}
export async function getCategories() {
  const urlCategory = 'https://api.mercadolibre.com/sites/MLB/categories';
  const required = await (await fetch(urlCategory)).json();
  return required;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?${readsParams(categoryId, query)}`).then((resolve) => resolve.json());
}
