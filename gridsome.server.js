// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addSchemaTypes }) => {
    addSchemaTypes(`
      type Place {
        name: String
        countryISO: String
        lat: Float
        latTxt: String
        lng: Float
        lngTxt: String
      }

      type Stage implements Node @infer {
        from: Place
        to: Place
      }
    `)
  })

  api.createPages(() => {})
}
