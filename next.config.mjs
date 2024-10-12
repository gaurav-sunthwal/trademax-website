/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|ogv)$/,  // Handle video files
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/media/',  // Public path for accessing files
              outputPath: 'static/media/',  // Output path for the files
              name: '[name].[hash].[ext]',  // Naming convention for output files
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
