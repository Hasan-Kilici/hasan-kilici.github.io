let routes = [];
let cache = {};
let params;
async function addRoute(route, path, title, func,) {
  routes.push({ route: route, path: path, title: title, func: func });
}

async function component() {
  let route = window.location.hash.substring(1);
  route = route.split("?param=");
  params = route;
  for (let i = 0; i < routes.length; i++) {
    if (route[0] == routes[i].route) {
      let page;
      if (!cache[routes[i].path]) {
        const response = await fetch(routes[i].path);
        page = await response.text();
        cache[routes[i].path] = page;
      } else {
        page = cache[routes[i].path];
      }
      document.title = routes[i].title;
      setTimeout(async() => {
        page = await replaceDefultVariables(page);
        page = await replaceLoops(page);
        document.getElementById("main").innerHTML = page;
        routes[i].func();
        console.log(routes[i].func);
      }, 10);
      break;
    }
  }
}

async function replaceLoops(page) {
const regex = /%foreach\s+(\w+)\s+as\s+(\w+)%([\s\S]*?)%end%/g;
  let match;
  while ((match = regex.exec(page)) !== null) {
    const [, arrayName, itemName, loopContent] = match;
    const loopArray = eval(arrayName);
    let loopResult = '';
    for (const item of loopArray) {
      const replacedContent = loopContent.replace(new RegExp(`\\b${itemName}\\b`, 'g'), item);
      loopResult += replacedContent;
    }
    page = page.replace(match[0], loopResult);
  }
  return page;
}

async function replaceVariables(content, item, arrayName) {
  const regex = /%=(.*?)%/g;
  const matches = content.match(regex);
  let Array;
  if (arrayName) {
    const globalScope = (new Function('return this'))();
    if (globalScope.hasOwnProperty(arrayName)) {
      Array = globalScope[arrayName];
    }
  }
  let i = 0;
  if (arrayName) {
    if (matches) {
      for (const match of matches) {
        i++;
        const variableName = match.replace(/%=/g, "").trim();
        const variableValue = item;
        content = content.replace(match, Array[i]);
      }
    }
    if (matches) {
      for (const match of matches) {
        const variableName = match.replace(/%=/g, "").trim();
        const variableValue = getVariableValue(variableName);
        content = content.replace(match, variableValue);
      }
    }
  }
  return content;
}

function replaceDefultVariables(page){
  const regex = /%=(.*?)%/g;
  const matches = page.match(regex);
  if (matches) {
    for (const match of matches) {
      const variableName = match.replace(/%/g, "").trim();
      const variableValue = getVariableValue(variableName.split("=")[1]);
      page = page.replace(match, variableValue);
    }
  }
  return page;
}

function getVariableValue(variableName) {
  const globalScope = (new Function('return this'))();
  if (globalScope.hasOwnProperty(variableName)) {
    return globalScope[variableName];
  }
}

window.addEventListener('load', component);
window.addEventListener('hashchange', component);

function Proje(projeAdi,projeAciklamasi,projeLink,projeBanner,projeTipi){
    var HTML = `<div class="sm:w-[100%] md:w-[32.3333%]">
    <a href="${projeLink}">
        <img class="rounded-lg object-none h-[200px] w-[100%] bg-[#00aed9]" src="${projeBanner}" alt="" />
    </a>
    <div class="pt-5">
<span class="mb-2 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full bg-pink-900 text-pink-300"><i class="fa-duotone fa-gear text-pink-300" style="--fa-secondary-opacity: 1;"></i> ${projeTipi}</span>
        <a href="${projeLink}">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">${projeAdi}</h5>
        </a>
        <p class="mb-3 h-[100px] font-normal text-gray-400">${projeAciklamasi}</p>
        <button onclick="window.location.href='${projeLink}'" type="button" class="text-gray-300 text-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 hover:text-white hover:text-black"><i class="fa-solid fa-arrow-up-right-from-square"></i> Projeyi görüntüle</button>
    </div>
</div>`
  return HTML;
}

function Teknoloji(dil,renk,yuzde){
  var HTML = `  <label class="mt-4 text-lg font-semibold text-gray-100">${dil}</label>
  <div class="w-100 bg-gray-950 rounded-full">
    <div class="w-[${yuzde}%] bg-[${renk}] text-gray-100 rounded-full px-2">
      <label class="font-semibold">${yuzde}%</label>
    </div>
  </div>`

  return HTML;
}

function Blog(baslik,link,banner,konu,aciklama){
var HTML = `<div class="sm:w-[100%] md:w-[32.3333%]">
    <a href="${link}">
        <img class="rounded-lg object-none h-[200px] w-[100%] bg-[#00aed9]" src="${banner}" alt="" />
    </a>
    <div class="pt-5">
<span class="mb-2 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full bg-pink-900 text-pink-300"><i class="fa-duotone fa-gear text-pink-300" style="--fa-secondary-opacity: 1;"></i> ${konu}</span>
        <a href="${link}">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">${baslik}</h5>
        </a>
        <p class="mb-3 h-[100px] font-normal text-gray-400">${aciklama}</p>
        <button onclick="window.location.href='${link}'" type="button" class="text-gray-300 text-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 hover:text-white hover:text-black"><i class="fa-solid fa-arrow-up-right-from-square"></i> Blogu görüntüle</button>
    </div>
</div>`

  
  return HTML
}
