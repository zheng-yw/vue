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
      "url-loader": "^4.1.1",
			"vue-template-compiler": "^2.6.11"
		},
    eslintConfig: {
      "rules": {
        "no-underscore-dangle": "off",
        "no-console": "off",
        "no-alert": "off",
        "no-new-func": "off",
        "max-len": [
          "error",
          {
            "code": 200
          }
        ]
      }
    }
	});
  if (options.eui) {
    api.extendPackage({
      dependencies: {
        "element-ui": "^2.15.6"
      }
    });
  }
  if (options.sto) {
    api.extendPackage({
      dependencies: {
        "vuex": "^3.1.1"
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
  if (!options.sto) {
    api.render(files => {
      delete files['src/store/index.js'];
    });
  }
};