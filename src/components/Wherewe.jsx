import { YMaps, Map } from '@pbe/react-yandex-maps';

export default function Wherewe() {
  
<<<<<<< Updated upstream
    return (
      <YMaps>
      <Map         width="100vw"
            height="80vh" defaultState={{ center: [48.04806331746245, 40.26770622452088], zoom: 14 } }>
      </Map>
    </YMaps>
=======
    return (  <div className='relative'>
          <YMaps>
  <Map         width=""
        height="100vh" defaultState={{ center: [48.04506331746245, 40.24270622452088], zoom: 14.5 } }>
  </Map>
</YMaps>
<div className='wherewe-box absolute left-0 top-0 h-full w-2/5 bg-blue-800 text-white flex place-items-center w-100'>
<div className='mx-auto w-96'>
  <h1>ИМЗ находится на очень оживленном участке трассы М4</h1>
</div>
</div>
</div>
>>>>>>> Stashed changes
    )
}

