import React from "react";
const Footer = () => {
  const footer = [
    "Все права защищены © 2015 интернет-магазин AIKEA.BY Беларусь.",
    "УНП 191828159 ИП Парейко В.С., регистрационный номер в торговом реестре 158299",
    "Политика конфиденциальности",
  ];
  const footer1 = [
    "Главная | Каталог | Товары в наличиинск",
    "Скидки | Популярное | Вдохновение",
    "Доставка | Услуги | Условия",
    "Контакты | Вставить | Cписок покупок",
    "Корзина | Личный кабинет | Избранное",
  ];
  const footer2 = [
    "г.Минск",
    "Ул. Первомайская, Д. 1, Кв. 43",
    "+ 375 434 847 28 84",
    "+ 375 448 473 09 48",
    "ikeaekspress@gmail.com",
  ];
  return (
    <div className="bg-slate-200 pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 footer">
          <ul className="footer__collection w-full leading-normal flex flex-col gap-3 text3 ml-52">
            <p className="text-xl font-semibold">Информация</p>
            {footer?.map((el, index) => (
              <li key={index} className="footer__item text-sm">
                <a href="#">{el}</a>
              </li>
            ))}
          </ul>
          <ul className="footer__collection w-full  md:w-1/1 leading-normal flex flex-col gap-3 footer__p ml-52">
            <p className="text-xl font-semibold">Меню</p>
            {footer1?.map((el, index) => (
              <li key={index} className="footer__item text-sm">
                <a href="#">{el}</a>
              </li>
            ))}
          </ul>
          <ul className="footer__collection w-full md:w-1/4 flex-end leading-normal flex flex-col gap-3 ml-52">
            <p className="text-xl font-semibold">Контакты</p>
            {footer2?.map((el, index) => (
              <li key={index} className="footer__item text-sm">
                <a href="#">{el}</a>
              </li>
            ))}
          </ul>
          <ul className="footer__collection w-full md:w-1/4 flex justify-center md:justify-end items-end text1 display:none;">
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
