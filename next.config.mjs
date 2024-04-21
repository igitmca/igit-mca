/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            //https://lh3.googleusercontent.com/a/AEdFTp4G_RtQlLgxnTX5NVPIZm9zYdItIcfgqaKEJ-AqEQ=s96-c
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            //https://firebasestorage.googleapis.com/v0/b/blogproject-7e5c5.appspot.com/o/c%2B%2B.svg?alt=media&token=2f9d5ae6-0927-49b9-b0be-61969c3bb768
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
            }
        ]
    }
};

export default nextConfig;
