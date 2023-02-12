import { Products } from "./index.model";

const $app = document.querySelector('#app');
const API = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=10';

const main = async () => {
  try {
    const response = await fetch(API);
    const data: Products[] = await response.json();

    const output = data.map(items => {
      return `
        <article class="Card">
          <img src="${items.images[0]}" />
          <h2>
            ${items.title} <small>Precio $${items.price}</small>
          </h2>
        </article>
      `
    }).join('');

    let newItem = document.createElement('section');
    newItem.innerHTML = output;
    $app?.appendChild(newItem);

  } catch(e) {
    throw new Error(e);
  }
}

main();