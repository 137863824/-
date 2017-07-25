### grunt : js的构建工具       基础 Nodejs
grunt : 主要作用是对多个js文件或者css文件进行合并和压缩,还具有代码检测,文件监视,等功能
http://www.gruntjs.net/   请参考官网 （中文）

### grunt工具的使用流程:
(1),安装nodejs ,在项目目录下打开命令行,输入命令 npm init 初始化一个package.json文件

(2),安装grunt,首先需要先将Grunt命令行（CLI）安装到全局环境中, 安装指令    npm install -g grunt-cli

(3),本地安装grunt模块,命令行cli会优先执行本地模块,因为可能不同的项目需要使用同一个模块的不同版本
     npm install grunt --save         

(4),安装需要使用的插件
	文件合并
	npm install grunt-contrib-concat --save
	文件压缩(js文件)
	npm install grunt-contrib-uglify --save
	文件压缩(css文件)
	npm install grunt-contrib-cssmin --save
	监视工具
	npm install grunt-contrib-watch --save
	检查语法
	npm install grunt-contrib-jshint --save
	删除文件
	npm install grunt-contrib-clean --save
	复制文件
	npm install grunt-contrib-copy --save
	
(5),在项目目录下新建一个 gruntfile.js 文件, 与 package.json文件在同一目录下, 它是grunt的配置文件, 
文件中设置grunt任务, 详情见   gruntfile.js

(6),执行grunt任务   命令行输入执行指令
	grunt concat  执行文件合并任务
	grunt uglify  执行文件压缩任务
	grunt watch  执行文件监视任务
	grunt         执行默认的default任务