/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack: (config, { webpack }) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    config.externals.push({
      sharp: "commonjs sharp",
      canvas: "commonjs canvas",
    })
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser",
      })
    )
    return config
  }
}

module.exports = nextConfig
