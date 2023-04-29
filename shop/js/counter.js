// Добавляю прослушку на всем окне
window.addEventListener('click', function (event) {

    // Объявляю переменную для счетчика
    let counter;

    // Проверяю клик строго по кнопкам Плюс либо Минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		// Нахожу обертку счетчика
		const counterWrapper = event.target.closest('.counter-wrapper');
		// Нахожу див с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]');
	}

	// Проверяю, является ли элемент, по которому был совершен клик, кнопкой Плюс
	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
	}

	// Проверяю, является ли элемент, по которому был совершен клик, кнопкой Минус
	if (event.target.dataset.action === 'minus') {

		// Проверяю, чтобы счетчик был больше 0
		if (parseInt(counter.innerText) > 0) {
			// Изменяю текст в счетчике, уменьшая его на 1
			counter.innerText = --counter.innerText;
		} else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
			// Проверка на товар который находится в корзине
			console.log('IN CART!!!!');
			// Удаляю товар из корзины
			event.target.closest('.cart-item').remove();

			// Отображение статуса корзины Пустая / Полная
			toggleCartStatus();

			// Пересчет общей стоимости товаров в корзине
			calcCartPriceAndDelivery();
		}

	}

	// Проверяю клик на + или - внутри коризины
	if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
		// Пересчет общей стоимости товаров в корзине
		calcCartPriceAndDelivery();
	}
});