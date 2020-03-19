import GoogleMapsApiLoader from 'google-maps-api-loader'

export default async (context, inject) => {
  const google = await GoogleMapsApiLoader({
    apiKey: context.env.googleApiKey
  })

  inject('google', google)
}