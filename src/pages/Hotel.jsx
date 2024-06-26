import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import hotel1 from "../img/hotel1.jpg";
import hotel2 from "../img/hotel2.jpg";
import hotel3 from "../img/hotel3.jpg";
import hotel4 from "../img/hotel4.jpg";
import hotel5 from "../img/hotel5.jpg";
import hotel6 from "../img/hotel6.jpg";
import hotel7 from "../img/hotel7.jpg";
import hotel8 from "../img/hotel8.jpg";
import hotel9 from "../img/hotel9.jpg";
import hotel10 from "../img/hotel10.jpg";
import hotel11 from "../img/hotel11.jpg";

export default function Projects() {
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      
      
      <Breadcrumb />
      <div className="xl:px-2 py-3  2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold ">Гостиница</h1>
        <div className="my-6 text-justify">
          <p className="indent-10">
            Рядом c заводом ИМЗ расположена придорожная гостиница. У нас есть
            номера: «Студия комфорт плюс», «Студия комфорт», «Стандарт бизнес
            плюс», «Стандарт бизнес», «Стандарт плюс» и «Стандарт» стоимостью от
            1500 до 2500 рублей в сутки.{" "}
          </p>
          <p className="indent-10">
            Наше расположение на 960 км трассы М4 «Дон» в Ростовской области -
            идеальное место для кратковременного отдыха и поэтому идеально
            подходит путешествующим по маршруту «Москва-Черноморское побережье».
            Приятная, спокойная обстановка и доброжелательный персонал встретят
            Вас в этом уютном уголке.
          </p>
          <p className="indent-10">
            Придорожная гостиница «ИМЗ» это удобное место остановки! Мы ждём
            Вас!
          </p>
          <p className="indent-10">
            Приятная, спокойная обстановка и доброжелательный персонал встретят
            Вас в этом уютном уголке. На территории гостиницы расположены
            шашлычная, столовая и магазин.
          </p>
          <p className="indent-10">
            Блюда из говядины и баранины - всегда готовы украсить ваш стол, а в
            продуктовом магазине можно купить продукцию собственного колбасного
            цеха, которая сделана из натурального сырья и без добавления ГМО.
            Для Вашего удобства предусмотрены удобные подъездные пути,
            вместительная парковка. На охраняемой стоянке Вы можете безопасно
            расположить свой автомобиль. Отличительной особенностью гостиницы
            является незначительная удаленность от оживленной трассы, что
            обеспечивает тишину и создает условия для работы и спокойного
            отдыха. Покой и порядок на территории гостиницы обеспечивает
            круглосуточная охрана сотрудниками службы безопасности и
            видеонаблюдение.
          </p>
          <p className="indent-10">
            Поскольку, гостиница небольшая, вы всегда получите у нас не только
            индивидуальный подход, но и привлекательную цену проживания.
          </p>
          <div className="lg:flex-wrap flex justify-between my-10 text-2xl">
            <div className="my-auto">
              <h2 className="font-bold text-2xl">КОНТАКТЫ:</h2>
              <div className="work__line2 mt-2" />
              <p className="mt-3">
                <b>Адрес гостиницы:</b> Ростовская область, <br />
                Красносулинский район, пос. Молодежный, <br />
                960 км трассы М4 «Дон»
              </p>
              <p className="mt-5">
                <b>Телефон:</b> +7(961)-429-99-03
                <br />
                <b>E-mail:</b> order@hotel-imz.ru
                <br />
                <b>Сайт:</b> hotel-imz.ru
              </p>
            </div>
            <img className="xl:pt-5" src={hotel1} />
          </div>
          <p className="indent-10">У нас есть:</p>
          <p className="indent-10">
            1. Стоянка и TIR-паркинг Здесь есть все необходимое, чтобы сделать
            приятную паузу в путешествии могли и водители-дальнобойщики,
            командировочные и партнеры, туристы и местные жители с ближних
            городов. Стоянка и ТIR-паркинг «ИМЗ» находится на очень оживленном
            участке трассы, как раз на середине пути Между Москвой и
            черноморским побережьем. Покой и порядок на территории стоянки и
            ТIR-паркинга обеспечивает круглосуточная охрана сотрудниками службы
            безопасности и видеонаблюдение. Постоянные посетители уже называют
            его «островком» - как оазис в пустыне, он весьма отличается от
            напряженной атмосферы трассы, настоящий островок безопасности и
            отдыха.
          </p>
          <p className="indent-10">
            2. Кафе «ИМЗ» Мы готовы предложить вам не только традиционные
            кушанья, но и диетические, лёгкие завтраки, обеды и ужины, если вы
            внимательно следите за своей фигурой. Для приготовления пищи
            используются только самые свежие и проверенные продукты, которые
            полезны для здоровья, не содержат консервантов, красителей и других
            сомнительных добавок. Обращаем внимание, что, часть продуктов
            выращивается на собственных личных подсобных хозяйствах,
            экологически чистая и всегда свежая. Блюда из говядины и баранины -
            всегда готовы украсить ваш стол, а в продуктовом магазине можно
            купить продукцию собственного колбасного цеха, которая сделана из
            натурального сырья и без добавления ГМО.
          </p>
          <p className="indent-10">
            3. Универсальный магазин, расположенный в комплексе «ИМЗ». Продукты
            питания, напитки, алкоголь, закуски, десерты и мороженое, товары для
            автопутешественников, хозяйственные товары.
          </p>
          <p className="indent-10">
            4. Спутниковое ТВ, Wi-Fi интерент Проверить ли почту, просмотреть
            материалы по работе, связаться с родными и друзьями по Skype или
            «связаться с миром» через социальные сети – все это возможно, не
            выходя из гостиницы На Всей территории гостиничного комплекса
            обеспечен бесплатный доступ к Wi-Fi интернету, а спутниковое
            телевидение поможет скоротать свободное время.
          </p>
          <p className="indent-10">
            5. Санитарный блок На территории придорожного комплекса «ИМЗ»
            имеется прачечная, а также необходимые дополнительные услуги и
            мелочи, при помощи которых Вы имеете возможность хорошенько
            выстирать и погладить одежду, так как этого порою в длительных
            поездках очень не хватает. Воспользовавшись услугами прачечной, Вы
            за небольшую плату быстро получите чистое белье или одежду.
          </p>
        </div>
        <div className="mx-auto">
          <div className="xl:grid xl:place-items-center xl:flex-wrap flex mb-8 gap-10">
            <img src={hotel2} />
            <img src={hotel3} />
          </div>
          <div className="xl:grid xl:place-items-center xl:flex-wrap flex mb-8 gap-10">
            <img src={hotel4} />
            <img src={hotel5} />
          </div>
          <div className="xl:grid xl:place-items-center xl:flex-wrap flex mb-8 gap-10">
            <img src={hotel6} />
            <img src={hotel7} />
          </div>
          <div className="xl:grid xl:place-items-center xl:flex-wrap flex mb-8 gap-10">
            <img src={hotel8} />
            <img src={hotel9} />
          </div>
          <div className="xl:grid xl:place-items-center xl:flex-wrap flex mb-10 gap-10">
            <img src={hotel10} />
            <img src={hotel11} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
