module.exports = {
	entry: './app/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		modules: [__dirname, 'node_modules'],
		alias: {
			Header: 'app/components/Header.jsx',
			Body: 'app/components/Body.jsx',
			Home: 'app/components/Home.jsx',
			About: 'app/components/About.jsx',
			BaseCss: 'app/styles/base.css'
		},
		extensions: ['.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
    devtool: 'cheap-module-eval-source-map'
};
