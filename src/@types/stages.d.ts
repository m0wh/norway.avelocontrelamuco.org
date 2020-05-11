/* eslint-disable camelcase */

interface Block {
  type: string,
  data: any
}

interface Place {
  name: string,
  countryISO: string,
  lat: number,
  latTxt: string,
  lng: number,
  lng_txt: string
}

interface Stage {
  id: string,
  index: number,
  slug: string,
  title: string,
  date: string,
  distance: number,
  elevationGain: number,
  verticalDrop: number,
  from: Place,
  to: Place,
  content: Block[]
}

interface Image {
  img: string,
  stage: {
    title: string,
    path: string
  }
}
