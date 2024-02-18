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

  const filteredData = vacancies.reduce((accumulator, current) => {
    const existingObject = accumulator.find(item => item.name === current.name)
    if (!existingObject) {
      accumulator.push(current);
    }
      return accumulator;
  }, [])


  useEffect(() => {
    fetchData()
  }, [])
  

  const fetchData = () => {
    fetch("https://api.hh.ru/vacancies?employer_id=1882136&per_page=100")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setVacancies(data.items)
    })
  }

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
    
        {strAscending.map((vacancy, id) => ( 
            <div className="bg-white text-black px-10 py-3 pr-32 mt-5 border-2 border-black relative" key={id}>
  <div>
  <div className='flex justify-between font-bold'>
    <h3 className=''>{vacancy.name}</h3>
    <p>{vacancy.salary ? vacancy.salary.from + ' руб.' : 'Не указана'}</p>
  </div>
  <p className='mt-3'>{vacancy.experience.name}</p>
</div>
<img src={ArrowDown} className='w-10 absolute right-5 top-5 cursor-pointer' onClick={() => setInfo(id)}/>
{isOpen && selectedInfo === id && 
<div className='mt-5 animate-fade animate-duration-[150ms]'><p className='font-semibold'>Обязанности:</p> <div className=''>{vacancy.snippet.responsibility}</div><br /><p className='font-semibold'>Требования:</p>{vacancy.snippet.requirement}
<div>
<button class="bg-blue-800 text-white hover:bg-white hover:text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-black transition-all rounded mt-5">
  <a href={vacancy.alternate_url}>ОТПРАВИТЬ РЕЗЮМЕ</a>
</button>
</div>
</div>}
</div>

        ))}

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