import react, {useState, useEffect} from 'react'
import BreadCrumbTriangle from '../img/breadcrumbtriangle.svg'
import {Link} from "react-router-dom";

export default function Breadcumb() {
  const [path, setPath] = useState('')
  const [pathLink, setPathLink] = useState('')

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/news') {
      setPath('Новости')
      setPathLink('/news')
    }
    if (currentPath === '/job') {
      setPath('Вакансии')
      setPathLink('/job')
    }
  }, []);
    return (
            <div className="space-x-4 py-3 2xl max-w-6xl width-full mx-auto container">
    <nav aria-label="breadcrumb"> 
      <ol class="flex">
        <li><Link to={`/`}><a href="#" class="text-gray-600 hover:text-blue-800 transition-all">Главная</a></Link></li>
        <img src={BreadCrumbTriangle} className='w-5'/>
        <li><Link to={`${pathLink}`}><a href="#" class="text-gray-600 hover:text-blue-800 transition-all">{path}</a></Link></li>
      </ol>
    </nav>
    </div>
    )
}