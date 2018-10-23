export default function() {
  // Add .ts extension for store, middleware and more
  this.nuxt.options.extensions.push('ts')

  // Extend build
  this.extendBuild((config, { isServer }) => {
    const babelOptions = {
      presets: [
        [
          '@nuxtjs/app',
          {
            buildTarget: isServer ? 'server' : 'client'
          }
        ]
      ]
    }
    const babelLoader = {
      loader: 'babel-loader',
      options: babelOptions
    }
    const tsLoader = {
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    }

    // Add TypeScript loader
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        babelLoader,
        tsLoader
      ]
    })

    // Add .ts extension in webpack resolve
    if (!config.resolve.extensions.includes('.ts')) {
      config.resolve.extensions.push('.ts')
    }
  })
}
