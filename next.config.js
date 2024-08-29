/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        SERVER_URL: process.env.SERVER_URL,
        APP_URL: process.env.APP_URL
    },
    images: {
        remotePatterns: [
            {protocol:"https", hostname: 'rskrf.ru'},
            {protocol:"https", hostname: 'images.prom.ua'},
            {protocol:"https", hostname: 'cdnkz.sportmaster.com'},
            {protocol:"https", hostname: 'a.lmcdn.ru'},
            {protocol:"https", hostname: 'krossteam.co'},
            {protocol:"https", hostname: 'flomaster.top'},
            {protocol:"https", hostname: 'fineshoes.ru'},
            {protocol:"https", hostname: 'goods-photos.static1-sima-land.com'},
            {protocol:"https", hostname: 'st2.depositphotos.com'},
            {protocol:"https", hostname: 'st.depositphotos.com'},
            {protocol:"https", hostname: 'media.istockphoto.com'},
            {protocol:"https", hostname: 'encrypted-tbn0.gstatic.com'},
            {protocol:"https", hostname: 'www.shutterstock.com'},
            {protocol:"https", hostname: 'i.simpalsmedia.com'},
            {protocol:"https", hostname: "cojo.ru" },
                    

        ],
      }
}

module.exports = nextConfig
