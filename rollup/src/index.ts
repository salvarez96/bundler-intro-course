const $body = document.querySelector('body');
const API = 'https://api.escuelajs.co/api/v1/products/?offset=5&limit=10';
import { Products } from './types/index.model';
import logo from './assets/logo.png';
import './styles/styles.css';

const main = async () => {
  try {
    const products: Products[] = await fetch(API).then(response => response.json());
    const output = products.map(item => (
      `
        <article class='Card'>
          <img src="${item.images[0]}" />
          <h2>${item.title} <small>Precio $${item.price}</small></h2>
        </article>
      `
    )).join('');

    const newItem = document.createElement('section');
    newItem.classList.add('Items');
    newItem.innerHTML = output;
    
    const newHeader = document.createElement('header');
    const newImage = document.createElement('img');
    newImage.src = logo;
    
    newHeader.appendChild(newImage);
    $body?.append(newHeader, newItem);
  } catch (e) {
    throw new Error('Error')
  }
}

main();