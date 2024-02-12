import Header from '../components/Header'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import TopMain from '../components/TopMain'
import BreadCrumbTriangle from '../img/breadcrumbtriangle.svg'

export default function Contact() {
  return (
    <div className="font-['Ubuntu']">
    <Header/>
    <Nav />
    <Carousel />
    <TopMain />
    <div className="space-x-4 py-3 2xl max-w-7xl width-full mx-auto container relative">
      <nav aria-label="breadcrumb"> 
        <ol class="flex space-x-2">
          <li><a href="#" class="after:ml-2 text-gray-600">Главная</a></li>
          <img src={BreadCrumbTriangle} className='w-5'/>
          <li><a href="#" class="after:ml-2 text-gray-600">Вакансии</a></li>
        </ol>
      </nav>
      </div>
    <Footer />
    </div>
  );
}
