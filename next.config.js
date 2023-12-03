/** @type {import('next').NextConfig} */
// module.exports = {
//     async redirects() {
//     return [
//         {
//             source: '',
//             destination: '/homepage',
//             permanent: true,
//         },
//         {
//             source: '/',
//             destination: '/homepage',
//             permanent: true
//         }
//     ]
// },
// }
const nextConfig = {
    webpack: (config) => {
        config.externals = [...config.externals, { canvas: 'canvas' }]; // required to make Konva & react-konva work
        return config;
    },
}

module.exports = nextConfig
