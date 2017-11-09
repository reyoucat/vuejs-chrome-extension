# vuejs-chrome-extension

> A chrome extension made in Vue.js project sample.

## Build Setup

``` bash
# install dependencies
> npm install

# Generate an extension file for development.
> npm run build
```
Now, Go to "chrome://extensions/" and load (unpacked extension...) the "extension-src" folder.

You can develop from now on extension.

## Make Auto .CRX File
You need to generate your private key file.

1. Go to "chrome://extensions/" and Pack extension.

2. Root dir is "extension-src" selected and Private Key is blank. Now Press OK.

``` bash
# make .crx file
> npm run makefile
```

3. Check output folder.

## Repeatedly creating.
``` bash
# make .crx file
> npm run build-watch

# make .crx file
> npm run makefile-watch
```

> Vue.js 크롬 확장프로그램 프로젝트 샘플입니다.

## 빌드 셋업

``` bash
# install dependencies
> npm install

# 크롬 확장 프로그램을 개발할 수 있도록 파일을 만듭니다. 
> npm run build
```
이제 크롬의 "chrome://extensions/" 으로가서 (압축해제된 확장프로그램) 버튼을 눌러 "extension-src" 폴더를 불러옵니다

여기서부터는 이제 확장프로그램을 개발할 수 있습니다.

## .CRX 파일 자동 생성하기.
프로젝트마다, 개인 키 파일이 필요한데요.

1. "chrome://extensions/" (확장프로그램 압축)을 눌러요.

2. 루트 디렉토리는 "extension-src" 선택하고, 개인키는 비워두고 OK 누르면 됩니다.

``` bash
# make .crx file
> npm run makefile
```
3. "output" 폴더 확인해보세요.

## 변경이 있으면, 반복 파일 생성.
``` bash
# make .crx file
> npm run build-watch

# make .crx file
> npm run makefile-watch
```
