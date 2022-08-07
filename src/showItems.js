import showItem from './showItem.js';
import products from './data.js';

const data = products();
const main = document.getElementById('main');

export default () => {
  const mainTop = document.createElement('div');
  mainTop.classList.add('mainTop');
  const backIcon = document.createElement('i');
  backIcon.classList.add('backIcon');
  backIcon.classList.add('fa-solid');
  backIcon.classList.add('fa-circle-arrow-left');

  const productsTitle = document.createElement('h2');
  productsTitle.classList.add('productsListTitle');
  productsTitle.innerText = 'Keep Going During Training';

  const sectionDetails = document.createElement('p');
  sectionDetails.classList.add('sectionDetails');
  sectionDetails.innerText = 'Figt fatigue and push through your training barriers with performance products designed to help sustain your energy release and keep you going strong.';

  const productsQuantity = document.createElement('p');
  productsQuantity.classList.add('productsQuantity');
  productsQuantity.innerText = `${data[0].items.length} Products`;

  mainTop.append(productsTitle, sectionDetails, productsQuantity);

  // Main Top Fineshed //
  const mainBottom = document.createElement('div');
  mainBottom.classList.add('mainBottom');
  data[0].items.forEach((item) => {
    const productCard = document.createElement('div');
    productCard.classList.add('productCard');
    productCard.setAttribute('id', item.itemId);
    productCard.addEventListener('click', () => {
      main.innerHTML = '';
      showItem(item.itemId);
    });

    const productImage = document.createElement('div');
    productImage.classList.add('productImage');
    productImage.style.backgroundImage = item.pic;

    const porductDeatailsContainer = document.createElement('div');
    porductDeatailsContainer.classList.add('porductDeatailsContainer');

    const productName = document.createElement('h3');
    productName.classList.add('productName');
    productName.innerText = item.name;

    const productDetails = document.createElement('p');
    productDetails.classList.add('productDetails');
    productDetails.innerText = 'Branched Chain Amino Acid Support';

    const productPrice = document.createElement('p');
    productPrice.classList.add('productPrice');
    productPrice.innerText = '2000 Afg';

    porductDeatailsContainer.append(productName, productDetails, productPrice);

    productCard.append(productImage, porductDeatailsContainer);

    mainBottom.append(productCard);
  });

  main.append(backIcon, mainTop, mainBottom);
  return main;
};