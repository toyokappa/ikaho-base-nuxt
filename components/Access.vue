<template lang="pug">
  #access
    h3.label
      | Access
    #map
    .place
      h3.name
        | 伊香保BASE (IKAHO BASE)
      .address
        .jp
          | 〒377-0008 群馬県渋川市渋川3789-1
        .en
          | 3789-1,Shibukawa,Shibukawashi,Gunmaken
        .tel
          | TEL 0279-25-8777
      .info
        .car
          h4.how お車をご利用の場合
          p 渋川伊香保ICから車にて10分。
          p 渋川伊香保IC(35号方面) → 藤ノ木東の交差点を左折 → 入沢の交差点にて33号に合流 → 左手に黄色い烏骨鶏の看板が見えたら左折 → そのまま左下り坂を降り突き当りの建物。
          p 無料駐車場がございますのでご安心ください。
        .bas
          h4.how 公共交通手段をご利用の場合
          p 渋川駅からバスにて9駅(約12分)。
          p 渋川駅3版乗り場から伊香保線 伊香保温泉行きに乗車。
    .google-map-button
      a(
        href="https://www.google.co.jp/maps/place/%E4%BC%8A%E9%A6%99%E4%BF%9DBASE+%26:freedom/@36.4979545,138.9644516,14.73z/data=!4m8!1m2!2m1!1z5LyK6aaZ5L-d44OZ44O844K5!3m4!1s0x601e61d1e5c383ed:0xc8ab54f0fe24e418!8m2!3d36.5026142!4d138.9687108?hl=ja"
        target="_blank"
      )
        | Google Map

</template>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'
import mapIcon from '@/assets/map_icon.svg'

export default {
  data () {
    return {
      map: null
    }
  },
  async created () {
    const google = await GoogleMapsApiLoader({
      apiKey: 'AIzaSyAjTNoOK8zsoUkatbD2WqPzsa7db59xfOQ'
    })
    const latlng = new google.maps.LatLng(36.502653, 138.968719)
    const map = new google.maps.Map(document.querySelector('#map'), {
      center: latlng,
      zoom: 13
    })
    new google.maps.Marker({
      position: latlng,
      map,
      icon: {
        url: mapIcon,
        scale: 8
      }
    })
  }
}
</script>

<style lang="sass" scoped>
#access
  .label
    text-align: center
    margin-bottom: 30px
  #map
    width: 100%
    height: 500px
    margin-bottom: 30px
  .place
    color: #1F2233
    font-size: 11px
    letter-spacing: 1px
    margin-bottom: 30px
    .name
      padding-bottom: 20px
      border-bottom: 2px solid #1F2233
      margin-bottom: 20px
    .address
      line-height: 2
      margin-bottom: 30px
    .info
      line-height: 2
      .car
        margin-bottom: 20px
  .google-map-button
    a
      color: #1F2233
      text-decoration: none
      padding: 15px 30px
      border: 1px solid #1F2233
      box-sizing: border-box
      transition: 0.3s
      &:hover
        color: white
        background-color: #1F2233
</style>