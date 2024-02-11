import { YMaps, Map } from '@pbe/react-yandex-maps';

export default function Wherewe() {
  
    return (

      <div className='relative'>
        <div className='wherewe__before absolute bg-blue-800 z-10 h-full'></div>
      <div className="max-w-7xl width-full mx-auto container relative">
        <div className='absolute z-10 h-full h bg-blue-800 text-white w-2/4 grid place-items-center pr-10'>
          <div>
          <h1 className='font-bold'>Исаевский машиностроительный завод</h1>
          <p><br/>
          <p>имеет выгодное логистическое расположение находясь рядом с трассой М4 "Дон", а также к площадке завода подведены железнодорожные пути.</p>
          <br />
          Для сотрудников предприятия предусмотрен корпоративный транспорт.
          </p>
          </div>
        </div>
	<div class="full-width">
  <YMaps>
  <Map         width="100vw"
        height="80vh" defaultState={{ center: [48.04806331746245, 40.24870622452088], zoom: 14.5 } }>
  </Map>
</YMaps>
	</div>
</div>
</div>







    )
}

