module.exports = {
	entry: './app/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		modules: [__dirname, 'node_modules'],
		alias: {
			RecursivePageBuilder: 'app/builder/RecursivePageBuilder',
			BaselineContainer: 'app/components/containers/BaselineContainer',
			Body: 'app/components/containers/Body',
			CenterContainer: 'app/components/containers/CenterContainer',
            HDivider: 'app/components/containers/HDivider',
			HorizontalContainer: 'app/components/containers/HorizontalContainer',
			FeatureContainer: 'app/components/FeatureContainer',
            H1: 'app/components/H1',
            Header: 'app/components/Header',
			IconText: 'app/components/IconText',
			IconTextBox: 'app/components/IconTextBox',
			Intro: 'app/components/Intro',
			Paragraph: 'app/components/Paragraph',
			RoundBtn: 'app/components/RoundBtn',
			RoundBtnGroup: 'app/components/RoundBtnGroup',
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
