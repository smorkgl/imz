import { YMaps, Map } from '@pbe/react-yandex-maps';

export default function Wherewe() {
  
    return (
      <YMaps>
      <Map         width="100vw"
            height="80vh" defaultState={{ center: [48.04806331746245, 40.26770622452088], zoom: 14 } }>
      </Map>
    </YMaps>
    )
}

