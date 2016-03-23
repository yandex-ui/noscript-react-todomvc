install:
	npm install

yate:
	npm run yate

build:
	./node_modules/.bin/babel app.js --out-file app.build.js

watch:
	./node_modules/.bin/babel app.js --watch --out-file app.build.js

server: yate build
	node server.js
