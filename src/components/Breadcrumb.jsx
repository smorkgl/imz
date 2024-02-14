import react, {useState, useEffect} from 'react'
import BreadCrumbTriangle from '../img/breadcrumbtriangle.svg'
import {Link} from "react-router-dom";

export default function Breadcumb() {
  const [path, setPath] = useState('')
  const [pathLink, setPathLink] = useState('')

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/imz/news') {
      setPath('Новости')
      setPathLink('/imz/news')
    }
    if (currentPath === '/imz/job') {
      setPath('Вакансии')
      setPathLink('/imz/job')
    }
  }, []);
    return (
            <div className="space-x-4 py-3 2xl max-w-6xl width-full mx-auto container">
    <nav aria-label="breadcrumb"> 
      <ol class="flex">
        <li><Link to={`/`}><a href="#" class="text-gray-600">Главная</a></Link></li>
        <img src={BreadCrumbTriangle} className='w-5'/>
        <li><Link to={`${pathLink}`}><a href="#" class="text-gray-600">{path}</a></Link></li>
      </ol>
    </nav>
    </div>
    )
}