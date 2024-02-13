import React, {useEffect, useState} from 'react';

import Header from '../components/Header'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import TopMain from '../components/TopMain'
import Breadcumb from '../components/Breadcrumb'

export default function Contact() {
  
  const [vacancies, setVacancies] = useState([])
  
  console.log(vacancies)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetch("https://api.hh.ru/vacancies?employer_id=1882136&per_page=100")
    .then(response => {
      return response.json()
    })
    .then(data => {
      let test = new Set(data.items)
      console.log(test)
    })
  }
  
  return (
    <div className="font-['Ubuntu']">
    <Header/>
    <Nav />
    <Carousel />
    <TopMain />
    <Breadcumb />
    <div className="py-3 2xl max-w-6xl width-full mx-auto container relative">
      <h1>Вакансии</h1>
      <p className='pt-5'>Актуальные вакансии ООО "ИМЗ"</p>
        <div className='bg-white p-3 mt-5'>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-blue-800 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Вакансия (КЛИКАБЕЛЬНА)
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
        {vacancies.map((vacancy, id) => (
            <tr key = {id} class="odd:bg-white odd:dark:bg-gray-900 even:bg-blue-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <a href={vacancy.alternate_url}>{vacancy.name}</a>  
                </th>
                <td class="px-6 py-4">
                    {vacancy.experience.name}
                </td>
                <td class="px-6 py-4">
                {vacancy.salary ? vacancy.salary.from + ' руб.' : 'Не указана'}
                </td>
            </tr>
                ))}
        </tbody>
    </table>
</div>

        </div>
    </div>
    <Footer />
    </div>
  );
}
