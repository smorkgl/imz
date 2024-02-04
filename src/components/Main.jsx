import news1 from '../img/news1.jpg'
import news2 from '../img/news2.jpg'
import news3 from '../img/news3.jpg'
import news4 from '../img/news4.jpg'
import newsicon from '../img/newsicon.svg'
import video from '../img/video.svg'
import qr from '../img/qr.gif'
import tube from '../img/tube.svg'
import next from '../img/next.svg'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { Outlet, Link, NavLink } from "react-router-dom";
import {useState} from 'react';
import camera from '../img/camera.svg';
import photo1 from '../img/photo1.jpg'
import photo2 from '../img/photo2.jpg'
import photo6 from '../img/photo6.jpg'


export default function Main() {
    const [isDropdownVisibleNews1, setDropdownVisibleNews1] = useState(false)
    const [isDropdownVisibleNews2, setDropdownVisibleNews2] = useState(false)
    const [isDropdownVisibleNews3, setDropdownVisibleNews3] = useState(false)
    const [isDropdownVisibleNews4, setDropdownVisibleNews4] = useState(false)
  
    const handleMouseEnterNews1 = () => {
      setDropdownVisibleNews1(true);
    }
    const handleMouseLeaveNews1 = () => {
      setDropdownVisibleNews1(false);
    }
    const handleMouseEnterNews2 = () => {
      setDropdownVisibleNews2(true);
    }
    const handleMouseLeaveNews2 = () => {
      setDropdownVisibleNews2(false);
    }
    const handleMouseEnterNews3 = () => {
      setDropdownVisibleNews3(true);
    }
    const handleMouseLeaveNews3 = () => {
      setDropdownVisibleNews3(false);
    }
    const handleMouseEnterNews4 = () => {
      setDropdownVisibleNews4(true);
    }
    const handleMouseLeaveNews4 = () => {
      setDropdownVisibleNews4(false);
    }

    return (
        <div className="space-x-4 py-3 2xl max-w-7xl width-full mx-auto container mt-5 relative">
            <div className='flex justify-between'>
            <div>
            <div className='flex gap-2'>
            <img src={newsicon} className='w-5'/>
            <p className="text-2xl">Последние новости:</p>
            </div>
            <div className="work__line2 mt-2" />
            <div className='flex flex-wrap gap-20 mt-5'>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow relative">
    <a href="#">
        <div className="relative" onMouseEnter={handleMouseEnterNews1} onMouseLeave={handleMouseLeaveNews1}>
        <img class="rounded-t-lg min-h-72" src={news1} alt="" />
        <div className='absolute top-0 right-0 m-2 bg-white px-4 py-2 rounded-md font-bold text-blue-800'>1 сен</div>
        {isDropdownVisibleNews1 && <div className='absolute top-0 bg-black/50 h-full w-full flex items-center justify-center rounded-lg'><img src={next} className="img__next w-20"/></div>}</div>
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">ИСАЕВСКИЙ МАШИНОСТРОИТЕЛЬНЫЙ ЗАВОД ПОЗДРАВИЛ ДЕТЕЙ, МЕТАЛЛУРГОВ, БУДУЩИХ ПЕРВОКЛАССНИКОВ, С ДНЕМ ЗНАНИЙ!</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">Исаевский машиностроительный завод вручил подарки первоклассникам. В этом году 13 детей - сотрудников ООО "ИМЗ" впервые переступят порог школы.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Продолжение
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow relative">
    <a href="#">
    <div className="relative" onMouseEnter={handleMouseEnterNews2} onMouseLeave={handleMouseLeaveNews2}>
        <img class="rounded-t-lg min-h-72" src={news2} alt="" />
        <div className='absolute top-0 right-0 m-2 bg-white px-4 py-2 rounded-md font-bold text-blue-800'>19 авг</div>
        {isDropdownVisibleNews2 && <div className='absolute top-0 bg-black/50 h-full w-full flex items-center justify-center rounded-lg'><img src={next} className="img__next w-20"/></div>}</div>
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">19 АВГУСТА В П. МОЛОДЕЖНЫЙ КРАСНОСУЛИНСКОГО РАЙОНА СОСТОЯЛОСЬ ОТКРЫТИЕ ДЕТСКОЙ ИГРОВОЙ ПЛОЩАДКИ</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">В День рождение поселка Молодежный при финансовой поддержке ООО «ИМЗ» состоялось открытие детской игровой и спортивной площадки.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Продолжение
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow relative">
    <a href="#">
    <div className="relative" onMouseEnter={handleMouseEnterNews3} onMouseLeave={handleMouseLeaveNews3}>
        <img class="rounded-t-lg min-h-72" src={news3} alt="" />
        <div className='absolute top-0 right-0 m-2 bg-white px-4 py-2 rounded-md font-bold text-blue-800'>14 июл</div>
        {isDropdownVisibleNews3 && <div className='absolute top-0 bg-black/50 h-full w-full flex items-center justify-center rounded-lg'><img src={next} className="img__next w-20"/></div>}</div>
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">14 ИЮЛЯ СОСТОЯЛАСЬ ТОРЖЕСТВЕННАЯ ЦЕРЕМОНИЯ ПОДПИСАНИЯ ДОПОЛНИТЕЛЬНОГО СОГЛАШЕНИЯ МЕЖДУ ИСАЕВЫМ РАМЗАНОМ МУСАЕВИЧЕМ И НАЧАЛЬНИКОМ ГУФСИН РОССИИ ПО РОСТОВСКОЙ ОБЛАСТИ ДМИТРИЕМ НИКОЛАЕВИЧЕМ БЕЗРУКИХ.</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">Подписание данного соглашения предусматривает строительство и введение в эксплуатацию второго здания - общежития, изолированного участка, функционирующего, как исправительный центр (ИУФИЦ) на 110…</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Продолжение
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow relative">
    <a href="#">
    <div className="relative" onMouseEnter={handleMouseEnterNews4} onMouseLeave={handleMouseLeaveNews4}>
        <img class="rounded-t-lg min-h-72"  src={news4} alt="" />
        <div className='absolute top-0 right-0 m-2 bg-white px-4 py-2 rounded-md font-bold text-blue-800'>14 июл</div>
        {isDropdownVisibleNews4 && <div className='absolute top-0 bg-black/50 h-full w-full flex items-center justify-center rounded-lg'><img src={next} className="img__next w-20"/></div>}</div>
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">14 ИЮЛЯ ИСАЕВСКИЙ МАШИНОСТРОИТЕЛЬНЫЙ ЗАВОД ОТМЕТИЛ СВОЙ ПРОФЕССИОНАЛЬНЫЙ ПРАЗДНИК-ДЕНЬ МЕТАЛЛУРГА!</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">По случаю Дня металлурга на производственной площадке состоялась церемония награждения</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Продолжение
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<Link to={`/imz/news`}><a href="#" class="inline-flex items-center p-3 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 -mt-10">
            Предыдущие записи
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        </Link>
</div>
</div>
<div>
<div className="">
    <div className='flex gap-5'>
        <img src={video} className="w-6"/>
<p className="text-2xl">Видео о ИМЗ:</p>
</div>
            <div className="work__line2 mt-2" />
<div className='iframe-video flex flex-col gap-12 mt-5'>
  <div className='video-box'>
      <LiteYouTubeEmbed 
        id="7YzIpIORxOY"
    />
    </div>
    <div className='video-box'>
      <LiteYouTubeEmbed 
        id="8hb_LDeW-_0"
    />
    </div>
    <div className='video-box'>
      <LiteYouTubeEmbed 
        id="nGbtapJ6E6A"
    />
    </div>
  </div>
</div>
<div className="mt-16">
<div className='flex gap-2'>
        <img src={camera} className="w-6"/>
<p className="text-2xl ">Фотогалерея:</p>
</div>
<div className="work__line2 mt-2" />
<div className='photo-container flex flex-col gap-12 mt-5'>
  <div className='overflow-hidden video-box'>
  <img src={photo1} className='hover:scale-110 transition duration-500 cursor-pointer object-cover'/>
  </div>
  <div className='overflow-hidden video-box'>
  <img src={photo2} className='hover:scale-110 transition duration-500 cursor-pointer object-cover'/>
  </div>
  <div className='overflow-hidden video-box'>
  <img src={photo6} className='hover:scale-110 transition duration-500 cursor-pointer object-cover'/>
  </div>
</div>
</div>
<div className='mt-16'>
  <div className='flex gap-2'>
        <img src={tube} className="w-6"/>
<p className="text-2xl ">Продукция:</p>
</div>
            <div className="work__line2 mt-2" />
            <div className='production-box mt-10 rounded-lg overflow-hidden'>
  <img src={qr} className='hover:scale-110 transition duration-500 cursor-pointer object-cover'/>
</div>
</div>
</div>
</div>
<div>
  </div>
</div>

    )
}
