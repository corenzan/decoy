all: decoy.js
	@head -3 decoy.js > decoy.min.js
	@curl -s -d output_info=compiled_code --data-urlencode "js_code@decoy.js" http://closure-compiler.appspot.com/compile >> decoy.min.js