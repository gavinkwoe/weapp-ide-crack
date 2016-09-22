##相关资源

开发群：QQ（452137839）

开发工具v0.9：https://pan.baidu.com/s/1jI6orRo （密码：a9wc）

Demo源代码：https://pan.baidu.com/s/1mhUq4rQ （密码：uch3）

##破解步骤

***Mac测试可用，Windows测试可用***

1. 下载开发工具，并安装（***注意：一定要安装0.9版本***）
2. 打开『微信Web开发者工具』的程序目录
	* Windows：使用资源管理器查看
	* Mac：右键点击图标，选择『显示包内容』
3. 进入程序目录后，替换以下文件
	* /Resources/app.nw/app/dist/components/create/createstep.js
	* /Resources/app.nw/app/dist/stroes/projectStores.js
		* 注意，这里微信工程师拼写错了，***是stroes没错***！！！
4. 运行『微信Web开发者工具』
5. 创建项目
6. 重启『微信Web开发者工具』**（重要）**
7. 打开刚刚创建的项目
8. Good luck

##使用教程

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

##常见问题
1. 找不到所要替换的文件
	* 问题原因：开发工具版本不正确，老版本不支持
	* 解决方案：确保下载的程序版本在0.9.092100以上
2. Failed to load resource: net::ERR_NAME_NOT_RESOLVED http://1709827360.appservice.open.weixin.qq.com/appservice
	* 问题原因：通常是由于系统设置了代理如Shadowsocks等。
	* 解决方案：关闭代理，或者依次点击工具栏“动作”-"设置"，选择“不使用任何代理，勾选后直连网络”。

##工具截图

![IDE](https://cloud.githubusercontent.com/assets/876707/18745196/f4f0488e-80f3-11e6-844b-f45d7e52a23c.png)

![IDE](https://cloud.githubusercontent.com/assets/876707/18745200/f7a74870-80f3-11e6-83cf-df00f7f87f56.png)

##相关链接

http://www.geek-zoo.com
