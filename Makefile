all: double.js
	@curl -s -d output_info=compiled_code --data-urlencode "js_code@double.js" http://closure-compiler.appspot.com/compile > double.min.js