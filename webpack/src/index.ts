import { data } from "./data";

const $links = document.querySelector('#links');

const appendLinks = ():void => {
  const links = data?.links?.map(item => {
    return `
    <div class="bg-${item.color}-200 px-4 py-5 w-full flex justify-between">
      <a class="text-sm font-bold text-${item.color}-600 text-center hover:text-fuchsia-800 cursor-pointer" 
      href="${item.url}" rel="noopener" target="_blank">
        ${item.name}
      </a>
      <span>${item.emoji}</span>
    </div>
  `
  }).join('');
  $links 
  ? $links.innerHTML = links 
  : console.error(`$links doesn't exist, its current value is ${$links}`);
}

appendLinks();
