module.exports = {
	entry: {
		App: "./app/Scripts/App.js",
		Vendor: "./app/Scripts/Vendor.js"
	},  
	output: {
		path: "./app/temp/scripts",
		filename: "[name].js"
	}, 
	module: {
		loaders: [
		{
			loader: 'babel',
			query: {
				presets: ['es2015']
			},
			test: /\.js$/,
			exclude: /node_modules/
		}
		]
	}
}
