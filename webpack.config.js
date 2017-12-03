module.exports = {
	entry: './app/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		modules: [__dirname, 'node_modules'],
		alias: {
			BaselineContainer: 'app/components/BaselineContainer',
			Body: 'app/components/Body',
			CenterContainer: 'app/components/CenterContainer',
			FeatureContainer: 'app/components/FeatureContainer',
            H1: 'app/components/H1',
            HDivider: 'app/components/HDivider',
            Header: 'app/components/Header',
			HorizontalContainer: 'app/components/HorizontalContainer',
			IconText: 'app/components/IconText',
			Paragraph: 'app/components/Paragraph',
			RoundBtn: 'app/components/RoundBtn',
            Home: 'app/pages/Home',
            About: 'app/pages/About',
			BaseCss: 'app/styles/base'
		},
		extensions: ['.js', '.jsx', '.css']
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
