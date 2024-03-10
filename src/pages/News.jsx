import React, { useEffect, useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import axios from "../axios.js";
import { useDispatch, useSelector } from "react-redux";
import news1 from "../img/news1.jpg";
import news2 from "../img/news2.jpg";
import news3 from "../img/news3.jpg";
import news4 from "../img/news4.jpg";
import news6 from "../img/news6.jpg";
import news7 from "../img/news7.jpg";
import news8 from "../img/news8.jpg";
import news10 from "../img/news10.jpg";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import no_image from "../img/no_image.png";
import { fetchPosts } from "../redux/slices/posts.js";

const NewsList = [
  {
    id: 1,
    title:
      "ПО СЛОЖИВШЕЙСЯ ТРАДИЦИИ ПРЕДСТАВИТЕЛИ ООО «ИМЗ» НАВЕСТИЛИ И ПОЗДРАВИЛИ ЧЕПУРОВА НИКОЛАЯ ДАНИЛОВИЧА- ВЕТЕРАНА ВОВ В ЕГО ДЕНЬ РОЖДЕНИЯ.",
    date: "15.05.2023",
    description: "В этом году Николай Данилович отмечает 100-летие.",
    full_description:
      "Николай Данилович родом из Харьковской области, из села Шевелевка. Окончил 3 класса церковно-приходской школы. Как и у всех сверстников того времени, рано началась его трудовая деятельность. С 14 лет стал работать на одной из шахт Донецкой области, в г. Енакиево. Молодой парень был трудолюбивым, ответственным, знающим свое дело, потому в первые годы войны оформили бронь, так как был очень нужен здесь. Но проработал он немного, еще до прихода немцев шахту взорвали. И начался тяжелый период   оккупации. В 1944 году после освобождения Донбасса его зачислили в 217-й запасной полк пулеметчиком. Снарядили всем необходимым, выдали оружие и направили на Берлин. Николай проработал столяром до самой пенсии. На селе он был хорошим мастером. Хуторяне его уважали за отзывчивость, готовность всегда прийти на помощь. Жили дружно, строили дом, мечтали о будущем. Воспитали сына Владимира и дочерей Надежду и Любовь. Жизнь на земле трудоемкая, они не боялись никакой работы, вели домашнее хозяйство. На столе у них всегда всего хватало сполна. Как-то с детства все были приучены к труду, ведь мать и отец у Николая Даниловича были трудягами, работали на шахте. Помнит он, как возили санками уголь. В семье есть давняя традиция отмечать праздник Великой Победы. Так было и в этот раз. Да еще и вековой юбилей грядет 12 мая! Хочется пожелать нашему дорогому юбиляру еще много радостных дней в добром здравии. Пусть всегда согревает Вас тепло ваших родных людей! Низко кланяемся Вам, фронтовик, за Ваш подвиг, совершенный в далеком 45-м!",
    img: news10,
  },
  {
    id: 2,
    title:
      "БЛАГОУСТРОЙСТВО СОЦИАЛЬНОЙ ИНФРАСТРУКТУРЫ В РАМКАХ ФЕДЕРАЛЬНОЙ ПРОГРАММЫ «КОМПЛЕКСНОЕ РАЗВИТИЕ СЕЛЬСКИХ ТЕРРИТОРИЙ»",
    date: "15.05.2023",
    description:
      "Руководство предприятия ООО «ИМЗ» откликнулось на просьбу Администрации Михайловского сельского поселения, Красносулинского района о возможности финансирования части работ, направленных на…",
    full_description:
      "Руководство предприятия ООО «ИМЗ» откликнулось на просьбу Администрации Михайловского сельского поселения, Красносулинского района о возможности финансирования части работ, направленных на благоустройство социальной инфраструктуры, в рамках Федеральной программы «Комплексное развитие сельских территорий» по возведению детской площадки в п. Молодежном.",
    img: no_image,
  },
  {
    id: 3,
    title:
      "ПРЕДСТАВИТЕЛЬ ООО «ИМЗ» ПОРОШИНА А.Ю. ПРИНЯЛА УЧАСТИЕ В ОБУЧАЮЩЕМ МЕРОПРИЯТИИ ОТ ПАО «СБЕРБАНК» НА ТЕМУ: «ДИЗАЙН-МЫШЛЕНИЕ», КОТОРОЕ СОСТОЯЛОСЬ В АДМИНИСТРАЦИИ Г. КРАСНЫЙ СУЛИН.",
    date: "25.05.2023",
    description:
      "В рамках мероприятия были также представлены возможности электронной площадки Белорусской универсальной товарной биржи.",
    full_description:
      "Мероприятие прошло в теплой и дружеской обстановке! С Уважением, Администрация!",
    img: news8,
  },
  {
    id: 4,
    title:
      "АДМИНИСТРАЦИЯ ООО «ИМЗ» ОРГАНИЗОВАЛА ДЛЯ СВОИХ СОТРУДНИКОВ ПОЕЗДКУ НА ФЕСТИВАЛЬ «ШОЛОХОВСКАЯ ВЕСНА», КОТОРЫЙ СОСТОЯЛСЯ В СТ. ВЕШЕНСКОЙ.",
    date: "30.05.2023",
    description:
      'В минувшую субботу 27 мая сотрудники ООО «ИМЗ» побывали на мероприятии «Шолоховская весна-2023" в ст. Вешенской.',
    full_description:
      "Всероссийский литературно-фольклорный фестиваль «Шолоховская весна» проводится в Ростовской области ежегодно с 1985 года в конце мая в одной из старинных левобережных станиц Дона – станице Вешенской, известной всему миру как родина Михаила Александровича Шолохова. Организаторами фестиваля являются министерство культуры Ростовской области, администрация Шолоховского района, музей-заповедник М.А. Шолохова, Областной дом народного творчества, творческие союзы. Кульминацией праздника, как обычно, стал вечерний гала-концерт на набережной Дона. Над гладью реки прозвучала музыка из оперы Ивана Дзержинского «Тихий Дон». Свои номера представили творческие коллективы из 16 регионов. Зрители увидели плац-парад военного оркестра штаба Южного округа войск нацгвардии России. В финале концерта долгожданным было выступление Александра Розенбаума. Завершился главный день празднования ярким фейерверком над Доном.",
    img: news7,
  },
  {
    id: 5,
    title:
      "ПРЕДСТАВИТЕЛЬ ООО «ИМЗ» ЯШОНКОВ В.В. В ЛИЦЕ ДИРЕКТОРА ПО ПРАВОВЫМ И ОБЩИМ ВОПРОСАМ ПРИНЯЛ УЧАСТИЕ В КОММУНИКАЦИОННОЙ СЕССИИ, ПРОВОДИМОЙ ПОД ПАТРОНАТОМ МИНИСТЕРСТВА ЭКОНОМИЧЕСКОГО РАЗВИТИЯ РО С ПРЕДСТАВИТЕЛЯМИ ДЕЛЕГАЦИИ РЕСПУБЛИКИ БЕЛАРУСЬ.",
    date: "31.05.2023",
    description:
      "В рамках мероприятия были также представлены возможности электронной площадки Белорусской универсальной товарной биржи.",
    full_description:
      "В рамках мероприятия были также представлены возможности электронной площадки Белорусской универсальной товарной биржи. Обсуждаемые вопросы касались сотрудничества в сфере станкостроения и машиностроения, водоснабжения, водоотведения, производства и поставки пассажирского электротранспорта. Основным итогом встречи стало знакомство с предполагаемыми поставщиками станочного оборудования с белорусской стороны. Надеемся, что завязавшиеся экономические связи будут иметь свой положительный итог для обеих сторон.",
    img: news6,
  },
  {
    id: 6,
    title:
      "ООО «ИСАЕВСКИЙ МАШИНОСТРОИТЕЛЬНЫЙ ЗАВОД» И ООО «ТОРГОВАЯ КОМПАНИЯ «ЮГСНАБ» ЗАКЛЮЧИЛИ СОГЛАШЕНИЕ О СОТРУДНИЧЕСТВЕ И СОВМЕСТНОЙ ДЕЯТЕЛЬНОСТИ.",
    date: "11.07.2023",
    description:
      "В ходе долгой совместной работы между ООО «ИМЗ» и ООО «ТК «ЮГСНАБ» было заключено соглашение...",
    full_description:
      "В ходе долгой совместной работы между ООО «ИМЗ» и ООО «ТК «ЮГСНАБ» было заключено соглашение, целью которого является реализация ООО «ТК «ЮГСНАБ» производимых ООО «ИМЗ» прямошовных электросварных труб и прочей продукции на всей территории РФ.",
    img: no_image,
  },
  {
    id: 7,
    title:
      "14 ИЮЛЯ ИСАЕВСКИЙ МАШИНОСТРОИТЕЛЬНЫЙ ЗАВОД ОТМЕТИЛ СВОЙ ПРОФЕССИОНАЛЬНЫЙ ПРАЗДНИК-ДЕНЬ МЕТАЛЛУРГА!",
    date: "27.07.2023",
    description:
      "14 ИЮЛЯ ИСАЕВСКИЙ МАШИНОСТРОИТЕЛЬНЫЙ ЗАВОД ОТМЕТИЛ СВОЙ ПРОФЕССИОНАЛЬНЫЙ ПРАЗДНИК-ДЕНЬ МЕТАЛЛУРГА!",
    full_description:
      "В торжественном мероприятии приняли участие почетные гости, среди которых: министр труда и социального развития Ростовской области Елена Владимировна Елисеева, Глава Администрации Красносулинского района Николай Александрович Альшенко, Первый заместитель министерства промышленности и энергетики Ростовской области Вячеслав Викторович Тимченко, начальник ГУФСИН России по Ростовской области Дмитрий Николаевич Безруких, генеральный директор ООО «ИМЗ» Ибрагим  Рамзанович Исаев, собственник предприятия Рамзан Мусаевич Исаев и большой коллектив ООО «ИМЗ». Благодарственными письмами и грамотой от Министерства Промышленности и энергетики РО были награждены: Ситников Н.Н., бригадир настройщик ТЭЦ, Запорожцев С.Б.-начальник производства, Иванов А.А.- зам.главного энергетика по  АСУ ТП, Иванков Б.Б.- бригадир-настройщик ТЭЦ, Картамышев К.А. -бригадир-настройщик ТЭСЦ, Писаренко А.Н.- директор по развитию. Благодарственными письмами Администрации Красносулинского района были награждены: Головченко А.Е. -электросварщик труб на стане, Самигулина Ф.Д. -машинист крана, Селезнев И.Н. -электрогазосварщик, Ездаков В.П. -мастер по ремонту кранового оборудования, Гусева Т.Г- контрольный мастер ОТК. Благодарственными письмами генерального директора были награждены: Казаченко Д.А. -резчик труб и заготовок, Попова Ю.В. -бухгалтер КТПЗ, Пономарева В.В. -контролер ОТК, Лушпа А.В.- электромонтер, Выходцев А.Н.- электромонтер, Щербина И.В. -бухгалтер ИМЗ, Евдокимов В.С. -электросварщик труб на стане, Кудрявцева А.В. -зам.глав бух, Потапова Е.А.-начальник коммерческого отдела , а также денежной премией были награждены работники ГУФСИН: Дунаев А.А., Приходько А.С., Губанов Э.А, Пасхалов А.А., Михайленко Е.В, Чумаков В.А. Сегодня «Исаевский машиностроительный завод» является динамично развивающимся предприятием, на благо которого трудится более 330 человек. Администрация ООО «ИМЗ» от всей души поздравляет металлургов с их профессиональным праздником, желает крепкого здоровья и благополучия!",
    img: news4,
  },
  {
    id: 8,
    title:
      "14 ИЮЛЯ СОСТОЯЛАСЬ ТОРЖЕСТВЕННАЯ ЦЕРЕМОНИЯ ПОДПИСАНИЯ ДОПОЛНИТЕЛЬНОГО СОГЛАШЕНИЯ МЕЖДУ ИСАЕВЫМ РАМЗАНОМ МУСАЕВИЧЕМ И НАЧАЛЬНИКОМ ГУФСИН РОССИИ ПО РОС ТОВСКОЙ ОБЛАСТИ ДМИТРИЕМ НИКОЛАЕВИЧЕМ БЕЗРУКИХ.",
    date: "18.07.2023",
    description:
      "Подписание данного соглашения предусматривает строительство и введение в эксплуатацию второго здания - общежития, изолированного участка, функционирующего, как исправительный центр (ИУФИЦ) на 110….",
    full_description:
      " Подписание  соглашения на строительство и введение в эксплуатацию второго здания - общежития, изолированного участка, функционирующего, как исправительный центр (ИУФИЦ) на 110 мест на территории завода.",
    img: news3,
  },
  {
    id: 9,
    title:
      "19 АВГУСТА В П. МОЛОДЕЖНЫЙ КРАСНОСУЛИНСКОГО РАЙОНА СОСТОЯЛОСЬ ОТКРЫТИЕ ДЕТСКОЙ ИГРОВОЙ ПЛОЩАДКИ",
    date: "22.08.2023",
    description:
      "В День рождение поселка Молодежный при финансовой поддержке ООО «ИМЗ» состоялось открытие детской игровой и спортивной площадки.",
    full_description:
      "В торжественном мероприятии принял участие представитель ООО «ИМЗ» - директор по развитию Писаренко А.Н. Современная детская игровая и спортивная площадка была построена в рамках мероприятий федерального проекта «Благоустройство сельских территорий» государственной программы «Комплексное развитие сельских территорий». Её оборудовали всем самым необходимым. Для детей установили современный игровой комплекс, песочницу, качели. Мероприятие прошло в теплой и дружественной атмосфере, под звуки веселых песен.",
    img: news2,
  },
  {
    id: 10,
    title:
      "ИСАЕВСКИЙ МАШИНОСТРОИТЕЛЬНЫЙ ЗАВОД ПОЗДРАВИЛ ДЕТЕЙ, МЕТАЛЛУРГОВ, БУДУЩИХ ПЕРВОКЛАССНИКОВ, С ДНЕМ ЗНАНИЙ!",
    date: "11.09.2023",
    description:
      'Исаевский машиностроительный завод вручил подарки первоклассникам. В этом году 13 детей - сотрудников ООО "ИМЗ" впервые переступят порог школы.',
    full_description:
      "Поздравлять будущих первоклассников и их родителей стало уже доброй традицией. В этом году ребятам вручили школьные наборы для трудового обучения и изобразительного искусства, различные канцелярские принадлежности, закладки, линейки и многие другие полезные предметы. Конечно же, каждый подарок сопровождался теплыми пожеланиями успехов в учебе, хорошего настроения, сил и крепкого здоровья первоклашкам и их родным!",
    img: news1,
  },
];

export const ReverseNewsList = NewsList.slice().reverse();

export default function News() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const isPostsLoading = posts.status === "loading";
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(posts.items);
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      <Carousel />
      <TopMain />
      <Breadcrumb />
      <div className="py-3 2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold">Новости</h1>
      </div>
      <div class="container my-12 mx-auto md:px-6">
        <section class="mb-32 text-center md:text-left">
          {isPostsLoading
            ? items.map((item, index) => (
                <div key={index} class="mb-12 flex flex-wrap animate-pulse">
                  <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12 ">
                    <div class="grid bg-gray-300 rounded-lg h-36 w-36 place-items-center news__img-container w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-12 h-12 text-gray-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                    <div>
                      <div class="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                        &nbsp;
                      </div>
                      <div class="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                        &nbsp;
                      </div>
                      <div class="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                        &nbsp;
                      </div>
                      <div class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-20 mt-5">
                        &nbsp;
                      </div>
                      <div class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72 mt-5">
                        &nbsp;
                      </div>
                      <div class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                        &nbsp;
                      </div>
                      <div class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                        &nbsp;
                      </div>
                      <div class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                        &nbsp;
                      </div>
                      <div class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                        &nbsp;
                      </div>
                      <div class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                        &nbsp;
                      </div>
                      <div class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                        &nbsp;
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : posts.items.map((news) => (
                <div key={news.id} class="mb-12 flex flex-wrap">
                  <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                    <Link to={`/news/${news.id}`}>
                      <div
                        class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        <img
                          src={news.img}
                          class="news__img-container w-full"
                          alt="Louvre"
                        />
                        <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                      </div>
                    </Link>
                  </div>

                  <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                    <Link to={`/news/${news.id}`}>
                      <h5 class="mb-3 text-lg font-bold">{news.title}</h5>
                    </Link>
                    <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                      <small>
                        Опубликовано <u>{news.date}</u>
                      </small>
                    </p>
                    <p class="text-neutral-500 dark:text-neutral-300">
                      {news.description}
                    </p>
                  </div>
                </div>
              ))}
        </section>
      </div>
      <Footer />
    </div>
  );
}
