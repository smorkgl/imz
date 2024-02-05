import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Wherewe() {
  
    return (
      <div className='flex'>
        <div>ИМЗ находится:</div>
        <div>
          <YMaps>
  <Map  width={"100%"} height={"100%"} defaultState={{ center: [48.04806331746245, 40.26770622452088], zoom: 14 }}>
    <Placemark defaultGeometry={[55.751574, 40.283856]} />
  </Map>
</YMaps>
</div>
</div>
    )
}

