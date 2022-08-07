/* eslint-disable no-undef */
import products from './data.js';
// eslint-disable-next-line import/no-cycle
import showItems from './showItems.js';

const data = products();
const main = document.getElementById('main');

export default (id) => {
  window.scrollTo(0, 0);

  const backIcon = document.createElement('i');
  backIcon.classList.add('backIcon');
  backIcon.classList.add('fa-solid');
  backIcon.classList.add('fa-circle-arrow-left');
  backIcon.addEventListener('click', () => {
    main.innerHTML = '';
    showItems();
  });

  const item = data[0].items[id - 1];
  const mainTopDetails = document.createElement('div');
  mainTopDetails.classList.add('mainTopDetails');

  const itemDetailsImage = document.createElement('div');
  itemDetailsImage.classList.add('itemDetailsImage');
  itemDetailsImage.style.backgroundImage = item.pic;

  const itemDetailsName = document.createElement('h2');
  itemDetailsName.classList.add('itemDetailsName');
  itemDetailsImage.innerText = item.name;

  const itemSpecs = document.createElement('ul');
  itemSpecs.classList.add('itemSpecs');
  item.details.summary.forEach((item) => {
    const itemSpecsItem = document.createElement('li');
    itemSpecsItem.classList.add('itemSpecsItem');
    itemSpecsItem.innerText = item;
    itemSpecs.append(itemSpecsItem);
  });

  const itemFlavor = document.createElement('p');
  itemFlavor.classList.add('itemFlavor');
  itemFlavor.innerText = 'Flavor';

  const selectFlavor = document.createElement('select');
  selectFlavor.classList.add('selectFlavor');
  item.details.flavor.forEach((item) => {
    const option = document.createElement('option');
    option.innerText = item;
    selectFlavor.append(option);
  });

  const itemSize = document.createElement('p');
  itemSize.classList.add('itemSize');
  itemSize.innerText = 'Item Sizes:';

  const itemSizeContainer = document.createElement('div');
  itemSizeContainer.classList.add('itemSizeContainer');

  item.details.sizes.forEach((item) => {
    const itemSizes = document.createElement('div');
    itemSizes.classList.add('itemSizes');
    itemSizes.innerText = item;
    itemSizeContainer.append(itemSizes);
  });

  const itemPriceText = document.createElement('p');
  itemPriceText.classList.add('itemPriceText');
  itemPriceText.innerText = 'Price:';

  const itemPrice = document.createElement('p');
  itemPrice.classList.add('itemPrice');
  itemPrice.innerText = item.price;

  mainTopDetails.append(
    itemDetailsImage,
    itemDetailsName,
    itemSpecs, itemFlavor,
    selectFlavor,
    itemSize,
    itemSizeContainer,
    itemPriceText,
    itemPrice,
  );

  const mainBottomDetails = document.createElement('div');
  mainBottomDetails.classList.add('mainBottomDetails');

  const itemDCard = document.createElement('div');
  itemDCard.classList.add('itemDCard');

  const itemDCardTop = document.createElement('div');
  itemDCardTop.classList.add('itemDCardTop');

  const itemOverview = document.createElement('h4');
  itemOverview.classList.add('itemOverview');
  itemOverview.innerText = 'BENEFITS';

  itemDCardTop.append(itemOverview);

  const itemDCardBottom = document.createElement('div');
  itemDCardBottom.classList.add('itemDCardBottom');

  const itemBenefitsDetails = document.createElement('ul');
  itemBenefitsDetails.classList.add('itemBenefitsDetails');

  item.details.summary.forEach((item) => {
    const benefitItem = document.createElement('li');
    benefitItem.classList.add('benefitItem');
    benefitItem.innerText = item;

    itemBenefitsDetails.append(benefitItem);
  });

  itemDCardBottom.append(itemBenefitsDetails);

  itemDCard.append(itemDCardTop, itemDCardBottom);

  mainBottomDetails.append(itemDCard);

  const info = Object.keys(item.info);
  const infoText = Object.values(item.info);
  info.forEach((infoName, index) => {
    const itemDCard = document.createElement('div');
    itemDCard.classList.add('itemDCard');

    const itemDCardTop = document.createElement('div');
    itemDCardTop.classList.add('itemDCardTop');

    const itemOverview = document.createElement('h4');
    itemOverview.classList.add('itemOverview');
    itemOverview.innerText = infoName;

    itemDCardTop.append(itemOverview);

    const itemDCardBottom = document.createElement('div');
    itemDCardBottom.classList.add('itemDCardBottom');

    const ItemDescription = document.createElement('p');
    ItemDescription.classList.add('ItemDescription');
    ItemDescription.innerText = infoText[index];

    itemDCardBottom.append(ItemDescription);
    itemDCard.append(itemDCardTop, itemDCardBottom);
    mainBottomDetails.append(itemDCard);
  });

  main.append(backIcon, mainTopDetails, mainBottomDetails);
  return main;
};