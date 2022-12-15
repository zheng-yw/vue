module.exports = (api, options, rootOptions) => {
	api.extendPackage({
		scripts: {
			"serve": "vue-cli-service serve",
			"build": "build " + options.cname,
			"lint": "vue-cli-service lint"
		},
		dependencies: {
			"core-js": "^3.6.5",
			"vue": "^2.6.11"
		},
		devDependencies: {
			"@vue/cli-plugin-babel": "~4.5.12",
			"@vue/cli-plugin-eslint": "~4.5.12",
			"@vue/cli-service": "~4.5.12",
			"babel-eslint": "^10.1.0",
			"eslint": "^6.7.2",
			"eslint-plugin-vue": "^6.2.2",
			"vue-template-compiler": "^2.6.11"
		}
	});
  if (options.eui) {
    api.extendPackage({
      dependencies: {
        "element-ui": "^2.15.6"
      }
    });
  }
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path]);
  });
  api.render('./template');
  if(options.cname != 'Hello') {
    api.render(files => {
      Object.keys(files)
        .filter(path => path.startsWith('src/components'))
        .forEach(path => {
          let key = path.replace(/Hello/g, options.cname);
          files[key] = files[path];
          delete files[path];
        });
    });
  }
};