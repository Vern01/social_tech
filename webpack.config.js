module.exports = {
	entry: './app/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		modules: [
			__dirname,
			'node_modules',
			'app/components',
			'app/components/containers'
		],
		alias: {
			//Builders:
			DesignFormBuilder: 'app/builder/DesignFormBuilder',
			FormBuilder: 'app/builder/FormBuilder',
			RecursivePageBuilder: 'app/builder/RecursivePageBuilder',
			//Pages
      About: 'app/pages/About',
			CustomerLogin: 'app/pages/CustomerLogin',
			Dashboard: 'app/pages/Dashboard',
			DesignerDashboard: 'app/pages/DesignerDashboard',
      Home: 'app/pages/Home',
			MakerDashboard: 'app/pages/MakerDashboard',
			NewDesign: 'app/pages/NewDesign',
			PickMaker: 'app/pages/PickMaker',
			ProductView: 'app/pages/ProductView',
			RegisterMakerDesigner: 'app/pages/RegisterMakerDesigner',
			Search:'app/pages/Search',
			Test: 'app/pages/Test',
			BaseCss: 'app/styles/base',
			//Redux:
			reducers: 'app/reducers/reducers',
			actions: 'app/actions/actions',
			configureStore: 'app/store/configureStore'
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
