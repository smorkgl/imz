import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Wherewe() {
    return (
<YMaps>
  <Map defaultState={{ center: [48.04806331746245, 40.26770622452088], zoom: 14 }}>
    <Placemark defaultGeometry={[55.751574, 40.283856]} />
  </Map>
</YMaps>
    )
}

