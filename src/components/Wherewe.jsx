import { YMaps, Map } from '@pbe/react-yandex-maps';

export default function Wherewe() {
  
    return (
      <div className='space-x-4 py-3 2xl max-w-7xl width-full mx-auto container mt-5 relative flex justify-between'>
        <div>ИМЗ находится:</div>
          <YMaps>
  <Map         width="70vw"
        height="70vh" defaultState={{ center: [48.04806331746245, 40.26770622452088], zoom: 14 } }>
  </Map>
</YMaps>
</div>
    )
}

