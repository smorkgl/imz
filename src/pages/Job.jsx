import React, {useEffect, useState} from 'react';

import Header from '../components/Header'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import TopMain from '../components/TopMain'
import Breadcumb from '../components/Breadcrumb'

export default function Contact() {
  
  const [vacancies, setVacancies] = useState([])
  const [sort1, setSort1] = useState(false)
  
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

  const strAscending = [...filteredData].sort((a, b) =>
  a.name > b.name ? 1 : -1,
);

  
  return (
    <div className="font-['Ubuntu']">
    <Header/>
    <Nav />
    <Carousel />
    <TopMain />
    <Breadcumb />
    <div className="py-3 2xl max-w-6xl width-full mx-auto container relative mb-5">
      <h1 className='font-bold'>Вакансии</h1>
      <p className='pt-5'>Актуальные вакансии ООО "ИМЗ"</p>
        <div className='test mt-5'>
        <div class="test relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-blue-800 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Вакансия (КЛИКАБЕЛЬНА)
                    <button onClick={() => setSort1(true)}>test</button>
                </th>
                <th scope="col" class="px-6 py-3">
                    Опыт работы
                </th>
                <th scope="col" class="px-6 py-3">
                    Зарплата
                </th>
            </tr>   
        </thead>
        <tbody>
        {filteredData.map((vacancy, id) => (
            <tr key = {id} class="odd:bg-white odd:dark:bg-gray-900 even:bg-blue-50 even:dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="job__container_row_vacancy_name px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white transition-all">
                    <a href={vacancy.alternate_url}>{vacancy.name}</a>  
                </th>
                <td class="job__container_row_vacancy_experience_name px-6 py-4">
                    {vacancy.experience.name}
                </td>
                <td class="job__container_row_vacancy_salary px-6 py-4 px-6 py-4">
                {vacancy.salary ? vacancy.salary.from + ' руб.' : 'Не указана'}
                </td>
            </tr>
                ))}
        </tbody>
    </table>
</div>

        </div>
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
