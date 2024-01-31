import { Outlet, Link, NavLink } from "react-router-dom";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import dots from '../img/dots.svg'
import close from '../img/close.svg'

export default function Nav() {
  const [isDropdownVisibleAbout, setDropdownVisibleAbout] = useState(false)
  const [isDropdownVisibleManuf, setDropdownVisibleManuf] = useState(false)
  const [isDropdownVisibleProd, setDropdownVisibleProd] = useState(false)
  const [isDropdownVisibleCont, setDropdownVisibleCont] = useState(false)
  const [isDropdownVisibleFaq, setDropdownVisibleFaq] = useState(false)

  const handleMouseEnterAbout = () => {
    setDropdownVisibleAbout(true);
  }
  const handleMouseLeaveAbout = () => {
    setDropdownVisibleAbout(false);
  }
  
  const handleMouseEnterManuf = () => {
    setDropdownVisibleManuf(true);
  }
  const handleMouseLeaveManuf = () => {
    setDropdownVisibleManuf(false);
  }

  const handleMouseEnterProd = () => {
    setDropdownVisibleProd(true);
  }
  const handleMouseLeaveProd = () => {
    setDropdownVisibleProd(false);
  }

  const handleMouseEnterCont = () => {
    setDropdownVisibleCont(true);
  }
  const handleMouseLeaveCont = () => {
    setDropdownVisibleCont(false);
  }
  
  const handleMouseEnterFaq = () => {
    setDropdownVisibleFaq(true);
  }
  const handleMouseLeaveFaq = () => {
    setDropdownVisibleFaq(false);
  }

  const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='bg-blue-800'>
          <div className="max-w-5xl width-full mx-auto container flex justify-between cursor-pointer text-white font-bold relative"> 
          <div className="dots__container absolute h-12 leading-12 flex justify-center items-center cursor-pointer hover:bg-blue-700 hover:rounded px-4" onClick={() => setIsOpen(true)}>
          <img src={dots} className="dots w-7"  /></div>
          <Transition appear show={isOpen} as={Fragment}>
  <Dialog as="div" open={isOpen} onClose={() => setIsOpen(false)}>
  <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100" 
            leaveTo="opacity-0">
      <div className='absolute top-0 h-screen w-screen bg-white/100 p-10'>
          <Dialog.Panel>
           <div className="flex flex-wrap text-2xl gap-40">
            <div className="font-semibold w-60">
              <div className="cursor-pointer hover:bg-gray-100 p-3">
              ГЛАВНАЯ
              </div>
            </div>
            <div className="flex flex-col gap-3 w-60">
              <div className="font-semibold cursor-pointer hover:bg-gray-100 p-3">
                О ИМЗ
              </div>
              <div className="cursor-pointer hover:bg-gray-100 p-3">
                Новости
              </div>
              <div className="cursor-pointer hover:bg-gray-100 p-3">
                О нас
              </div>
              <div className="cursor-pointer hover:bg-gray-100 p-3">
                Проекты
              </div>
              <div className="cursor-pointer hover:bg-gray-100 p-3">
                Гостиница
              </div>
              <div className="cursor-pointer hover:bg-gray-100 p-3">Стоянка</div>
              </div>
              <div className="flex flex-col gap-3 w-60">
                <div className="font-semibold cursor-pointer hover:bg-gray-100 p-3 ">ПРОИЗВОДСТВО</div>
                <div className="cursor-pointer hover:bg-gray-100 p-3">Производственные мощности</div>
                <div className="cursor-pointer hover:bg-gray-100 p-3">Сертификаты</div>
              </div>
              <div className="flex flex-col gap-3 w-60">
              <div className="font-semibold cursor-pointer hover:bg-gray-100 p-3">ПРОДУКЦИЯ</div>
              <div className="cursor-pointer hover:bg-gray-100 p-3">Труба профильная</div>
              <div className="cursor-pointer hover:bg-gray-100 p-3">Балки</div>
              <div className="cursor-pointer hover:bg-gray-100 p-3">Металлоконструкции</div>
              <div className="cursor-pointer hover:bg-gray-100 p-3">Продукция</div>
              <div className="cursor-pointer hover:bg-gray-100 p-3">Заказ продукции</div>
              </div>
              <div className="font-semibold w-60">
                <div className="cursor-pointer hover:bg-gray-100 p-3">ПОСТАВЩИКАМ</div></div>
              <div className="font-semibold w-60">
                <div className="cursor-pointer hover:bg-gray-100 p-3">ВАКАНСИИ</div></div>
              <div className="flex flex-col gap-3 w-60">
                <div className="font-semibold w-60 cursor-pointer hover:bg-gray-100 p-3">КОНТАКТЫ</div>
                <div className="cursor-pointer hover:bg-gray-100 p-3">Офис продаж</div>
                <div className="cursor-pointer hover:bg-gray-100 p-3">Написать письмо</div>
                <div className="cursor-pointer hover:bg-gray-100 p-3">Заказ продукции</div>
              </div>
              <div className="flex flex-col gap-3 w-60">
                <div className="font-semibold cursor-pointer hover:bg-gray-100 p-3">FAQ</div>
                <div className="cursor-pointer hover:bg-gray-100 p-3">ГОСТ продукции</div>
                <div className="cursor-pointer hover:bg-gray-100 p-3">Калькулятор металлопроката</div>
              </div>
              
           </div>
          </Dialog.Panel>
          <img src={close} className="absolute cursor-pointer top-5 right-5 w-5"/>
      </div>
      </Transition.Child>
  </Dialog>
  </Transition>
          <Link to={`/`}><div className="h-12 leading-12 flex justify-center items-center cursor-pointer hover:bg-blue-700 hover:rounded px-4">
          <p>ГЛАВНАЯ</p>
          </div></Link>
          <div className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-blue-700 hover:rounded px-4" onMouseEnter={handleMouseEnterAbout} onMouseLeave={handleMouseLeaveAbout}>
          <p>О ИМЗ</p>
          {isDropdownVisibleAbout &&     <div className="dropdown-menu absolute z-50 text-black">
      <ul>
      <Link to={`/imz/news`}><li>Новости</li></Link>
        <Link to ={`/imz/about`}><li>О нас</li></Link>
        <Link to ={`/imz/projects`}><li>Проекты</li></Link>
        <Link to ={`/imz/hotel`}><li>Гостиница</li></Link>
        <Link to ={`/imz/parking`}><li>Стоянка</li></Link>
      </ul>
    </div>}
          </div>
          <div className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-blue-700 hover:rounded px-4" onMouseEnter={handleMouseEnterManuf} onMouseLeave={handleMouseLeaveManuf}>
          <p>ПРОИЗВОДСТВО</p>
          {isDropdownVisibleManuf &&     <div className="dropdown-menu absolute z-50 text-black">
      <ul>
        <li>Производственные мощности</li>
        <li>Сертификаты</li>
      </ul>
    </div>}
          </div>
          <div className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-blue-700 hover:rounded px-4" onMouseEnter={handleMouseEnterProd} onMouseLeave={handleMouseLeaveProd}>
          <p>ПРОДУКЦИЯ</p>
          {isDropdownVisibleProd &&     <div className="dropdown-menu absolute z-50 text-black">
      <ul>
        <li>Труба профильная</li>
        <li>Балки</li>
        <li>Металлоконструкции</li>
        <li>Продукция</li>
        <li>Заказ продукции</li>
      </ul>
    </div>}
          </div>
          <div className="h-12 leading-12 flex justify-center items-center cursor-pointer hover:bg-blue-700 hover:rounded px-4">
          <p>ПОСТАВЩИКАМ</p>
          </div>
          <Link to ={`/imz/job`} style={{ textDecoration: 'none' }}><div className="h-12 leading-12 flex justify-center items-center cursor-pointer hover:bg-blue-700 hover:rounded px-4">
          <p>ВАКАНСИИ</p>
          </div></Link>
          <div className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-blue-700 hover:rounded px-4" onMouseEnter={handleMouseEnterCont} onMouseLeave={handleMouseLeaveCont}>
          <p>КОНТАКТЫ</p>
          {isDropdownVisibleCont &&     <div className="dropdown-menu absolute z-50 text-black">
      <ul>
        <li>Офис продаж</li>
        <li>Написать письмо</li>
        <li>Заказ продукции</li>
      </ul>
    </div>}
          </div>
          <div className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-blue-700 hover:rounded px-4" onMouseEnter={handleMouseEnterFaq} onMouseLeave={handleMouseLeaveFaq} >
          <p>FAQ</p>
          {isDropdownVisibleFaq &&  <div className="dropdown-menu absolute z-50 text-black">
      <ul>
        <li>ГОСТ продукции</li>
        <li>Калькулятор металлопроката</li>
      </ul>
    </div>}
          </div>
          <span></span>
          </div>
  </nav>
    )
}