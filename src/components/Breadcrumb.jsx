import BreadCrumbTriangle from '../img/breadcrumbtriangle.svg'

export default function Breadcumb() {
    return (
            <div className="space-x-4 py-3 2xl max-w-6xl width-full mx-auto container">
    <nav aria-label="breadcrumb"> 
      <ol class="flex">
        <li><a href="#" class="text-gray-600">Главная</a></li>
        <img src={BreadCrumbTriangle} className='w-5'/>
        <li><a href="#" class="text-gray-600">Вакансии</a></li>
      </ol>
    </nav>
    </div>
    )
}