function calcCartPriceAndDelivery() {
	const cartWrapper = document.querySelector('.cart-wrapper');
	const priceElements = cartWrapper.querySelectorAll('.price__currency');
	const totalPriceEl = document.querySelector('.total-price');
	const deliveryCost = document.querySelector('.delivery-cost');
	const cartDelivery = document.querySelector('[data-cart-delivery]');

	// Выставляю начальную общую стоимость товаров
	let priceTotal = 0;

	// Обхожу все блоки с ценами в корзине
	priceElements.forEach(function (item) {
		// Нахожу количество товара
		const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
		// Добавляю стоимость товара в общую стоимость (кол-во * цена + доставка)
		priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText)
	});

	// Отображаю общую стоимость на странице
	// totalPriceEl.innerText = priceTotal;

	// Скрываю / показываю блок со стоимостью доставки
	if (priceTotal > 0) {
		cartDelivery.classList.remove('none');
	} else {
		cartDelivery.classList.add('none');
	}

	// Указываю стоимость доставки
	if (priceTotal >= 5000) {
		deliveryCost.classList.add('free');
		deliveryCost.innerText = 'бесплатно';
	} else if (priceTotal < 5000 && priceTotal > 0) {
		deliveryCost.classList.remove('free');
		deliveryCost.innerText = '250 ₽';
		priceTotal += parseInt(deliveryCost.innerText);
	}
	totalPriceEl.innerText = priceTotal;
}