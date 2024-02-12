import Header from '../components/Header'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import TopMain from '../components/TopMain'
import Breadcumb from '../components/Breadcrumb'

export default function Contact() {
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
      <div className='bg-blue-800'>
        <div>
        test
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}
