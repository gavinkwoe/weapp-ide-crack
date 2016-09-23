#微信应用号/小程序开发IDE

<img src="https://cloud.githubusercontent.com/assets/876707/18773863/cca59fae-8185-11e6-9d7b-050ba646b456.png" width = "172" height = "150" alt="LOGO" align=center />

***注意：先下0.7版用于登录，再下0.9版用于开发，目前只能本地编译，不能上传***

##下载声明

* 相关代码纯属技术研究与爱好，请在学习使用后删除
* 相关下载资源均来自于QQ群，与作者及贡献者本人无关
* 当微信官方提供正式版本后，请支持微信官方，一起把应用号做的更好

##相关资源

* 开发群：
	* 一群（452137839）（满）
	* 二群（160108745）

* 开发工具 v0.7
	* 百度: https://pan.baidu.com/s/1pLxqFzH （密码: bwt9）
	* 360: https://yunpan.cn/ckvTYFHWzYYFV （提取码：e09b）

* 开发工具 v0.9
  * 百度: https://pan.baidu.com/s/1pLTKIqJ （密码: iswg）
  * 360: https://yunpan.cn/ckvXjEbnFYMSC （提取码：f9ca）

* Demo源代码
  * 百度: https://pan.baidu.com/s/1o8hJFuU （密码: bsky）
  * 360: https://yunpan.cn/ckvXAacJjvsgR （提取码：3327）

##贡献者名单

感谢大家的贡献！

| 时间 | 贡献者 | 贡献内容 |
|--------|------------|---------------|
| 2016.09.23 | importcjj | 去除调用接口必须在mp后台配置的限制 |
| 2016.09.23 | AlayshChen | 去除请求URL域名限制 |
| 2016.09.23 | qdsang | 解决无法创建App问题 |
| 2016.09.22 | loulin | 补充常见问题 |
| 2016.09.22 | fakefish | 修复0.7下载链接 |
| 2016.09.22 | QFish | 补充常见问题 |

##破解步骤

***Mac测试可用，Windows测试可用***

1. 下载开发工具，并安装（***注意：一定要安装0.9版本***）
2. 打开『微信Web开发者工具』的程序目录
  * Windows：使用资源管理器查看
  * Mac：右键点击图标，选择『显示包内容』
3. 进入程序目录后，替换以下文件（只需要替换0.9版本里的，0.7版本用来登陆）：
  * Windows：
    * \package.nw\app\dist\components\create\createstep.js
    * \package.nw\app\dist\stroes\projectStores.js
    * \package.nw\app\dist\weapp\appservice\asdebug.js
  * Mac：
    * /Resources/app.nw/app/dist/components/create/createstep.js
    * /Resources/app.nw/app/dist/stroes/projectStores.js
    * /Resources/app.nw/app/dist/weapp/appservice/asdebug.js  

  注意，这里微信工程师拼写错了，***是stroes没错***！！！

  **[替换的文件点击这里下载](https://github.com/gavinkwoe/weapp-ide-crack/archive/master.zip)**

4. Good luck

##扫码无法登录问题 please bind your wechat account to the appid first

* 先使用0.7版本[[Windows](http://dldir1.qq.com/WechatWebDev/release/0.7.0/wechat_web_devtools_0.7.0_x64.exe)|[Mac] (http://dldir1.qq.com/WechatWebDev/release/0.7.0/wechat_web_devtools_0.7.0.dmg)]的进行扫码登陆
* 登陆成功后，再用[0.9版本](https://pan.baidu.com/s/1pLTKIqJ)打开就直接进入了

##项目创建

1. 运行『微信Web开发者工具』
2. 通过微信扫描二维码
3. 创建项目
  * AppID：随便填
  * 项目名称：随便填
  * 本地开发目录：选择一个目录
4. 点击「添加项目」
  * 此时如果出错，先退出再重进
  * 此时，能够看到项目列表了
5. 打开项目
6. 开始开发
7. Good luck

##学习资料

* NoteDown版本
	* 框架入门
		* http://wxopen.notedown.cn/framework/MINA.html
	* 组件入门
		* http://wxopen.notedown.cn/component/
	* API入门
		* http://wxopen.notedown.cn/api/

##Demo运行

* 创建项目
* 打开项目所在目录
* 下载「Demo源代码」并解压覆盖
* 打开项目
* Good luck

##常见问题
1. 找不到所要替换的文件
  * 问题原因：开发工具版本不正确，老版本不支持
  * 解决方案：确保下载的程序版本在0.9.092100以上
2. Failed to load resource: net::ERR_NAME_NOT_RESOLVED http://1709827360.appservice.open.weixin.qq.com/appservice
  * 问题原因：通常是由于系统设置了代理如Shadowsocks等。
  * 解决方案：关闭代理，或者依次点击工具栏“动作”-"设置"，选择“不使用任何代理，勾选后直连网络”。
3. 修复asdebug.js报错
  * 问题原因：TypeError: Cannot read property 'MaxRequestConcurrent' of undefined
  * 解决方案：替换 /Resources/app.nw/app/dist/weapp/appservice/asdebug.js  
4. 扫码登录失败
  * 问题原因：please bind your wechat account to the appid first
  * 解决方案：先使用0.7版本的进行扫码登陆，登陆成功后，再用0.9的版本打开就直接进入了。
    * 0.7版本地址：http://dldir1.qq.com/WechatWebDev/release/0.7.0/wechat_web_devtools_0.7.0.dmg

##工具截图

![IDE](https://cloud.githubusercontent.com/assets/876707/18745196/f4f0488e-80f3-11e6-844b-f45d7e52a23c.png)

![IDE](https://cloud.githubusercontent.com/assets/876707/18745200/f7a74870-80f3-11e6-83cf-df00f7f87f56.png)

##相关链接

http://www.geek-zoo.com
