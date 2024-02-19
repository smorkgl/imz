import React, {useEffect, useState} from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";
import news1 from '../img/news1.jpg'
import news2 from '../img/news2.jpg'
import news3 from '../img/news3.jpg'
import news4 from '../img/news4.jpg'
import news6 from '../img/news6.jpg'
import news7 from '../img/news7.jpg'
import news8 from '../img/news8.jpg'
import news10 from '../img/news10.jpg'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import TopMain from '../components/TopMain'
import Breadcrumb from '../components/Breadcrumb'
import no_image from '../img/no_image.png'

export default function News() {
    return (
    <div className="font-['Ubuntu']">
    <Header/>
    <Nav />
    <Carousel />
    <TopMain />
    <Breadcrumb/>
    <div className="py-3 2xl max-w-6xl width-full mx-auto container">
      <h1 className='font-bold'>Новости</h1>
      </div>
<div class="container my-12 mx-auto md:px-6">
  <section class="mb-32 text-center md:text-left">
    <div class="mb-12 flex flex-wrap">
      <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src={news1} class="w-full" alt="Louvre" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
        </div>
      </div>

      <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
        <h5 class="mb-3 text-lg font-bold">ИСАЕВСКИЙ МАШИНОСТРОИТЕЛЬНЫЙ ЗАВОД ПОЗДРАВИЛ ДЕТЕЙ, МЕТАЛЛУРГОВ, БУДУЩИХ ПЕРВОКЛАССНИКОВ, С ДНЕМ ЗНАНИЙ!</h5>
        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Опубликовано <u>11.09.2023</u></small>
        </p>
        <p class="text-neutral-500 dark:text-neutral-300">
        Исаевский машиностроительный завод вручил подарки первоклассникам. В этом году 13 детей - сотрудников ООО "ИМЗ" впервые переступят порог школы.
        </p>
      </div>
    </div>

    <div class="mb-12 flex flex-wrap">
      <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src={news2}class="w-full" alt="Louvre" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
        </div>
      </div>

      <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
        <h5 class="mb-3 text-lg font-bold">19 АВГУСТА В П. МОЛОДЕЖНЫЙ КРАСНОСУЛИНСКОГО РАЙОНА СОСТОЯЛОСЬ ОТКРЫТИЕ ДЕТСКОЙ ИГРОВОЙ ПЛОЩАДКИ</h5>
        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Опубликовано <u>22.08.2023</u></small>
        </p>
        <p class="text-neutral-500 dark:text-neutral-300">
        В День рождение поселка Молодежный при финансовой поддержке ООО «ИМЗ» состоялось открытие детской игровой и спортивной площадки.
        </p>
      </div>
    </div>

    <div class="mb-12 flex flex-wrap">
      <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src={news3} class="w-full" alt="Louvre" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
        </div>
      </div>

      <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
        <h5 class="mb-3 text-lg font-bold">14 ИЮЛЯ СОСТОЯЛАСЬ ТОРЖЕСТВЕННАЯ ЦЕРЕМОНИЯ ПОДПИСАНИЯ ДОПОЛНИТЕЛЬНОГО СОГЛАШЕНИЯ МЕЖДУ ИСАЕВЫМ РАМЗАНОМ МУСАЕВИЧЕМ И НАЧАЛЬНИКОМ ГУФСИН РОССИИ ПО РОСТОВСКОЙ ОБЛАСТИ ДМИТРИЕМ НИКОЛАЕВИЧЕМ БЕЗРУКИХ.</h5> 
        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Опубликовано <u>18.07.2032</u></small>
        </p>
        <p class="text-neutral-500 dark:text-neutral-300">
        Подписание данного соглашения предусматривает строительство и введение в эксплуатацию второго здания - общежития, изолированного участка, функционирующего, как исправительный центр (ИУФИЦ) на 110…
        </p>
      </div>
    </div>

    <div class="mb-12 flex flex-wrap">
      <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src={news4} class="w-full" alt="Louvre" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
        </div>
      </div>

      <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
        <h5 class="mb-3 text-lg font-bold">14 ИЮЛЯ ИСАЕВСКИЙ МАШИНОСТРОИТЕЛЬНЫЙ ЗАВОД ОТМЕТИЛ СВОЙ ПРОФЕССИОНАЛЬНЫЙ ПРАЗДНИК-ДЕНЬ МЕТАЛЛУРГА!</h5> 
        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Опубликовано <u>27.07.2023</u></small>
        </p>
        <p class="text-neutral-500 dark:text-neutral-300">
        14 ИЮЛЯ ИСАЕВСКИЙ МАШИНОСТРОИТЕЛЬНЫЙ ЗАВОД ОТМЕТИЛ СВОЙ ПРОФЕССИОНАЛЬНЫЙ ПРАЗДНИК-ДЕНЬ МЕТАЛЛУРГА!
        </p>
      </div>
    </div>

    <div class="mb-12 flex flex-wrap">
      <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <a href="#!">
          <img src={no_image} class="w-full" alt="Louvre" />
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
        </div>
      </div>

      <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
        <h5 class="mb-3 text-lg font-bold">ООО «ИСАЕВСКИЙ МАШИНОСТРОИТЕЛЬНЫЙ ЗАВОД» И ООО «ТОРГОВАЯ КОМПАНИЯ «ЮГСНАБ» ЗАКЛЮЧИЛИ СОГЛАШЕНИЕ О СОТРУДНИЧЕСТВЕ И СОВМЕСТНОЙ ДЕЯТЕЛЬНОСТИ.</h5> 
        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Опубликовано <u>11.07.2023</u></small>
        </p>
        <p class="text-neutral-500 dark:text-neutral-300">
        В ходе долгой совместной работы между ООО «ИМЗ» и ООО «ТК «ЮГСНАБ» было заключено соглашение...
        </p>
      </div>
    </div>

    
    <div class="mb-12 flex flex-wrap">
      <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src={news6} class="w-full" alt="Louvre" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
        </div>
      </div>

      <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
        <h5 class="mb-3 text-lg font-bold">ПРЕДСТАВИТЕЛЬ ООО «ИМЗ» ЯШОНКОВ В.В. В ЛИЦЕ ДИРЕКТОРА ПО ПРАВОВЫМ И ОБЩИМ ВОПРОСАМ ПРИНЯЛ УЧАСТИЕ В КОММУНИКАЦИОННОЙ СЕССИИ, ПРОВОДИМОЙ ПОД ПАТРОНАТОМ МИНИСТЕРСТВА ЭКОНОМИЧЕСКОГО РАЗВИТИЯ РО С ПРЕДСТАВИТЕЛЯМИ ДЕЛЕГАЦИИ РЕСПУБЛИКИ БЕЛАРУСЬ.</h5> 
        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Опубликовано <u>31.05.2022</u></small>
        </p>
        <p class="text-neutral-500 dark:text-neutral-300">
        В рамках мероприятия были также представлены возможности электронной площадки Белорусской универсальной товарной биржи.
        </p>
      </div>
    </div>

    <div class="mb-12 flex flex-wrap">
      <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src={news7} class="w-full" alt="Louvre" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
        </div>
      </div>

      <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
        <h5 class="mb-3 text-lg font-bold">АДМИНИСТРАЦИЯ ООО «ИМЗ» ОРГАНИЗОВАЛА ДЛЯ СВОИХ СОТРУДНИКОВ ПОЕЗДКУ НА ФЕСТИВАЛЬ «ШОЛОХОВСКАЯ ВЕСНА», КОТОРЫЙ СОСТОЯЛСЯ В СТ. ВЕШЕНСКОЙ.</h5> 
        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Опубликовано <u>30.05.2023</u></small>
        </p>
        <p class="text-neutral-500 dark:text-neutral-300">
        В минувшую субботу 27 мая сотрудники ООО «ИМЗ» побывали на мероприятии «Шолоховская весна-2023" в ст. Вешенской.
        </p>
      </div>
    </div>

    <div class="mb-12 flex flex-wrap">
      <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src={news8} class="w-full" alt="Louvre" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
        </div>
      </div>

      <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
        <h5 class="mb-3 text-lg font-bold">ПРЕДСТАВИТЕЛЬ ООО «ИМЗ» ПОРОШИНА А.Ю. ПРИНЯЛА УЧАСТИЕ В ОБУЧАЮЩЕМ МЕРОПРИЯТИИ ОТ ПАО «СБЕРБАНК» НА ТЕМУ: «ДИЗАЙН-МЫШЛЕНИЕ», КОТОРОЕ СОСТОЯЛОСЬ В АДМИНИСТРАЦИИ Г. КРАСНЫЙ СУЛИН.</h5> 
        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Опубликовано <u>25.05.2023</u></small>
        </p>
        <p class="text-neutral-500 dark:text-neutral-300">
        В рамках мероприятия были также представлены возможности электронной площадки Белорусской универсальной товарной биржи.
        </p>
      </div>
    </div>

    <div class="mb-12 flex flex-wrap">
      <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <a href="#!">
          <img src={no_image} class="w-full" alt="Louvre" />
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
        </div>
      </div>

      <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
        <h5 class="mb-3 text-lg font-bold">БЛАГОУСТРОЙСТВО СОЦИАЛЬНОЙ ИНФРАСТРУКТУРЫ В РАМКАХ ФЕДЕРАЛЬНОЙ ПРОГРАММЫ «КОМПЛЕКСНОЕ РАЗВИТИЕ СЕЛЬСКИХ ТЕРРИТОРИЙ»</h5> 
        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Опубликовано <u>15.05.2023</u></small>
        </p>
        <p class="text-neutral-500 dark:text-neutral-300">
        Руководство предприятия ООО «ИМЗ» откликнулось на просьбу Администрации Михайловского сельского поселения, Красносулинского района о возможности финансирования части работ, направленных на…
        </p>
      </div>
    </div>

    <div class="mb-12 flex flex-wrap" key={news.id}>
      <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <Link to ={`/news/${news.id}`}><img src={news10} class="w-full" alt="Louvre" /></Link>
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
        </div>
      </div>

      <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
        <h5 class="mb-3 text-lg font-bold">ПО СЛОЖИВШЕЙСЯ ТРАДИЦИИ ПРЕДСТАВИТЕЛИ ООО «ИМЗ» НАВЕСТИЛИ И ПОЗДРАВИЛИ ЧЕПУРОВА НИКОЛАЯ ДАНИЛОВИЧА- ВЕТЕРАНА ВОВ В ЕГО ДЕНЬ РОЖДЕНИЯ.</h5> 
        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Опубликовано <u>15.05.2022</u></small>
        </p>
        <p class="text-neutral-500 dark:text-neutral-300">
        В этом году Николай Данилович отмечает 100-летие.
        </p>
      </div>
    </div>


  </section>
</div>
    <Footer />
    </div>
  );
}
