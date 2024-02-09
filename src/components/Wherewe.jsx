import { YMaps, Map } from '@pbe/react-yandex-maps';

export default function Wherewe() {
  
    return (
      <div className='max-w-5xl width-full mx-auto container'>
          <YMaps>
  <Map         width="100vv"
        height="80vh" defaultState={{ center: [48.04506331746245, 40.24270622452088], zoom: 14.5 } }>
  </Map>
</YMaps>
<div>
  test
</div>
</div>
    )
}

