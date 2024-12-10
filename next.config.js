/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_SERVER_URL : process.env.NEXT_PUBLIC_SERVER_URL ,
        NEXT_PUBLIC_APP_URL : process.env.NEXT_PUBLIC_APP_URL 
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
            {protocol:"https", hostname: "ru.pngtree.com" },
            {protocol:"https", hostname: "img.freepik.com" },
            {protocol:"https", hostname: "twam.ru" },
          
                    

        ],
        
      },
    //   typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
    //     ignoreBuildErrors: true,
    //   },
}

module.exports = nextConfig
