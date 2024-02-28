import React, {useEffect, useState} from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";

import Header from '../components/Header'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import TopMain from '../components/TopMain'
import Breadcumb from '../components/Breadcrumb'
import ArrowDown from '../img/arrow_down.svg'

export default function Job() {

  const [vacancies, setVacancies] = useState([])
  // Добавление доп. информации о вакансии
  const [isOpen, setIsOpen] = useState(false)
  // Получение index вакансии по её клику
  const [selectedInfo, setSelectedInfo] = useState()
 // Отфильтрованный массив (убирает дубликаты вакансий)
 const [isDropdownVisibleJobSort, setIsDropdownVisibleJobSort] = useState(false)
 // Загрузка
 const [isLoading, setIsLoading] = useState(true);
 // Стрелка напротив вакансии

  const filteredData = vacancies.reduce((accumulator, current) => {
    const existingObject = accumulator.find(item => item.name === current.name)
    if (!existingObject) {
      accumulator.push(current);
    }
      return accumulator;
  }, [])


  useEffect(() => {
    fetch("https://api.hh.ru/vacancies?employer_id=1882136&per_page=100")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setVacancies(data.items)
      setIsLoading(false)
    })
  }, [])
  
  // Отфильтрованный массив (А-Я)

  const strAscending = [...filteredData].sort((a, b) =>
  a.name > b.name ? 1 : -1,
);

  // Обработчик и передача ключа ID вакансии
  const setInfo = (id) => {
    setSelectedInfo(id)
    setIsOpen(!isOpen)
    
  }

  return (
    <div className="font-['Ubuntu']">
    <Header/>
    <Nav />
    <Carousel />
    <TopMain />
    <Breadcumb />
    <div className="py-3 2xl max-w-6xl width-full mx-auto container">
      <h1 className='font-bold'>Вакансии</h1>
      <p className='pt-5'>Актуальные вакансии ООО "ИМЗ"</p>
      </div>
      <div className='2xl max-w-6xl width-full mx-auto container mb-10'>
      <button className='bg-white text-black text-sm border-black border-2 rounded-lg pr-10 relative' onClick={() => setIsDropdownVisibleJobSort(!isDropdownVisibleJobSort)}>Все сферы деятельности<img src={ArrowDown} className='w-4 absolute right-2 top-2.5 '/></button>
      {isDropdownVisibleJobSort && <div className='job__border_container w-60 text-sm mt-2 rounded-lg absolute bg-white z-50'><ul>
        <li className='p-0 pl-4 py-1 cursor-pointer border-b hover:bg-blue-800 hover:text-white'>Все сферы деятльности</li>
        <li className='p-0 pl-4 py-1 cursor-pointer border-b hover:bg-blue-800 hover:text-white'>Производство</li>
        <li className='p-0 pl-4 py-1 cursor-pointer border-b hover:bg-blue-800 hover:text-white'>Информационные технологии</li>
        <li className='p-0 pl-4 py-1 cursor-pointer border-b hover:bg-blue-800 hover:text-white'>Производство</li>
        <li className='p-0 pl-4 py-1 cursor-pointer border-b hover:bg-blue-800 hover:text-white'>Бухгалтерия, учёт, финансы</li>
        <li className='p-0 pl-4 py-1 cursor-pointer border-b hover:bg-blue-800 hover:text-white'>Безопасность</li>
        <li className='p-0 pl-4 py-1 cursor-pointer border-b hover:bg-blue-800 hover:text-white'>Продажи</li>
        <li className='p-0 pl-4 py-1 cursor-pointer border-b hover:bg-blue-800 hover:text-white'>Транспорт, логистика</li>
        <li className='p-0 pl-4 py-1 cursor-pointer border-b hover:bg-blue-800 hover:text-white'>Медицина</li>
        <li className='p-0 pl-4 py-1 cursor-pointer border-b hover:bg-blue-800 hover:text-white'>Маркетинг, реклама, PR</li>
        <li className='p-0 pl-4 py-1 cursor-pointer border-b hover:bg-blue-800 hover:text-white'>Руководство/развитие предприятия</li>
        <li className='p-0 pl-4 py-1 cursor-pointer border-b hover:bg-blue-800 hover:text-white'>Управление проектом</li>
        <li className='p-0 pl-4 py-1 cursor-pointer border-b hover:bg-blue-800 hover:text-white'>Управление персоналом</li>
        </ul></div>}
      
        {isLoading ? (
        <p className='mt-10 text-lg font-bold'>Вакансии загружаются...</p>
        ) : (strAscending.map((vacancy, id) => ( 
            <div className="bg-white text-black px-10 py-5 pr-32 mt-5 shadow-xl shadow-blue-800/10 rounded-xl relative cursor-pointer" key={id} onClick={() => setInfo(id)}>
  <div>
  <div className='flex justify-between font-bold'>
    <h3 className=''>{vacancy.name}</h3>
    <p>{vacancy.salary ? vacancy.salary.from + ' руб.' : 'Не указана'}</p>
  </div>
  <p className='mt-3'>{vacancy.experience.name}</p>
</div>
<img src={ArrowDown} className='w-10 absolute right-5 top-7'/>
{isOpen && selectedInfo === id && 
<div className='mt-5 animate-fade animate-duration-[150ms]'><p className='font-semibold'>Обязанности:</p> <div className=''>{vacancy.snippet.responsibility}</div><br /><p className='font-semibold'>Требования:</p>{vacancy.snippet.requirement}
<div>
<button className="bg-blue-800 text-white hover:bg-white hover:text-black font-semibold py-2 px-4 border border-black hover:border-black transition-all rounded mt-5">
  <a href={vacancy.alternate_url}>ОТПРАВИТЬ РЕЗЮМЕ</a>
</button>
</div>
</div>}
</div>
        )))}

        <div className='mt-10'>
        <p>По вопросам трудоустройства: </p>
        <br/>
        <p>Отдел кадров: +7(863)333-31-34 доб. 220, 221</p>
        <br />
        <p> Начальник отдела кадров</p>
        <br />
        <p>Порошина А.Ю. доб. 128</p>

        <br />
        <p> Отдел кадров работает с понедельника по пятницу с 8:00 до 17:00.  Перерыв с 12:00 до 13:00.</p>
        </div>
        </div>
    <Footer />
    </div>
  );
}
