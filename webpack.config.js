module.exports = {
	entry: './app/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		modules: [__dirname, 'node_modules'],
		alias: {
			FormBuilder: 'app/builder/FormBuilder',
			RecursivePageBuilder: 'app/builder/RecursivePageBuilder',
			BaselineContainer: 'app/components/containers/BaselineContainer',
			Body: 'app/components/containers/Body',
			CenterContainer: 'app/components/containers/CenterContainer',
			Fill: 'app/components/containers/Fill',
			FillConctainer: 'app/components/containers/FillContainer',
			FillNone: 'app/components/containers/FillNone',
            HDivider: 'app/components/containers/HDivider',
			HorizontalContainer: 'app/components/containers/HorizontalContainer',
			SwitchButtonContainer: 'app/components/containers/SwitchButtonContainer',
			FeatureGroup: 'app/components/FeatureGroup',
			FormSubmit: 'app/components/FormSubmit',
			FormTextArea: 'app/components/FormTextArea',
			FormTextInput: 'app/components/FormTextInput',
            H1: 'app/components/H1',
            H2: 'app/components/H2',
            Header: 'app/components/Header',
			IconText: 'app/components/IconText',
			IconTextBox: 'app/components/IconTextBox',
			ImageGroup: 'app/components/ImageGroup',
			Intro: 'app/components/Intro',
			P1: 'app/components/P1',
			Paragraph: 'app/components/Paragraph',
			RoundBtn: 'app/components/RoundBtn',
			RoundBtnGroup: 'app/components/RoundBtnGroup',
			SwitchButton: 'app/components/SwitchButton',
			SwitchButtonGroup: 'app/components/SwitchButtonGroup',
			VerticalMenu: 'app/components/VerticalMenu',
            About: 'app/pages/About',
            Home: 'app/pages/Home',
			MakerDashboard: 'app/pages/MakerDashboard',
			RegisterMakerDesigner: 'app/pages/RegisterMakerDesigner',
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
