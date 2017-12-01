module.exports = {
	entry: './app/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		modules: [__dirname, 'node_modules'],
		alias: {
			Body: 'app/components/Body.jsx',
			CenterContainer: 'app/components/CenterContainer.jsx',
            H1: 'app/components/H1.jsx',
            HDivider: 'app/components/HDivider.jsx',
            Header: 'app/components/Header.jsx',
			Paragraph: 'app/components/Paragraph.jsx',
            Home: 'app/pages/Home.jsx',
            About: 'app/pages/About.jsx',
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
