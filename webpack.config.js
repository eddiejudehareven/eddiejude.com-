module.exports = {
	entry: "./app/Scripts/App.js",
	output: {
		path: "./app/temp/scripts",
		filename: "App.js"
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