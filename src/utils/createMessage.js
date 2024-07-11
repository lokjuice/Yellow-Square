import { createPolzunok } from "./createPolzunok";

export const createMessage = (store) => {
	const colorsString = Object.entries(store?.colors).reduce((prev, next) => {
		if (next[1] === true) {
			return [...prev, next[0]];
		}

		return [...prev];
	}, []).join();

	let message = `<b>Клиент: ${store.contacts.name} @${store.contacts.telegram}</b>\n`;
	message += `<b>Телефон: ${store.contacts.phone}</b>\n`;
	message += `<b>Почта: ${store.contacts.email}</b>\n`;
	message += `\n`;
	message += `<b>Название компании: ${store.logoInfo.name}</b>\n`;
	message += `<b>О компании: ${store.logoInfo.description}</b>\n`;
	message += `<b>Сайт: ${store.logoInfo.website}</b>\n`;
	message += `<b>Доп инфо: ${store.logoInfo.helpInfo}</b>\n`;

	message += `<b>Количество логотипов: ${store.count}</b>\n`;
	message += `<b>Цвета: ${colorsString}</b>\n`;
	message += `\n`;
	message += `<b>Ползунки:</b>\n`;
	message += `<b>			классика                  современность</b>\n`;
	message += `<b>			${createPolzunok(Number(store?.polzunki?.first))}</b>\n`;
	message += `<b>			минимализм            максимализм</b>\n`;
	message += `<b>			${createPolzunok(Number(store?.polzunki?.second))}</b>\n`;
	message += `<b>			женственность   мужественность</b>\n`;
	message += `<b>			${createPolzunok(Number(store?.polzunki?.third))}</b>\n`;
	message += `<b>			плавность                      угловатость</b>\n`;
	message += `<b>			${createPolzunok(Number(store?.polzunki?.fourth))}</b>\n`;
	message += `<b>			абстрактность          буквальность</b>\n`;
	message += `<b>			${createPolzunok(Number(store?.polzunki?.fifth))}</b>\n`;


	return message;
}