# 项目日志

## 2015-07-01 10:15

* 整合底部导航条功能，将功能集合在common.ja，删除各文件的.nav部分
* fix部分页面的导航条冲突的bug

## 2015-06-30 08:57

* 增补page/ward，我要抽奖页面
* 增补page/award_suc，抽奖成功
* 增补page/award_fail，抽奖失败


## 2015-06-26 20:35

* 新增page/wash_order_suc，完成洗车订单详情页，提交成功状态
* 新增page/insurance，完成保险理赔导航功能页面
* 新增page/myinsurance，完成我的保单页面，含待确认保单和历史保单
* 新增page/insurance_query，完成我的保单查询页面
* 新增page/insurance_price，完成精准报价页面--输入城市、年龄、驾龄查询报价
* 新增page/insurance_price_01，完成精准报价页面--输入保费参考价格查询报价
* 新增page/insurance_price_02，完成精准报价页面--输入车牌号、姓名等信息查询报价
* 新增page/miaosha，完成爆品秒杀页面
* 新增page/entering，完成信息录入页面，其中还剩五六项在PSD图没看到，需要完善
* 新增page/insurance_confirm，完成保单确认页面，图片可伸缩
* 新增page/insurance_history，完成历史保单查询页面
* 新增page/insurance_pay，完成保单代缴页面

## 2015-06-26 09:41

* 新增page/wash_detail，完成1元洗车提交订单页面
* 新增page/wash_order_detail，完成1元洗车订单详情页面，含星级评分展示和用户评价
* 新增page/comment，完成用户评价页面，可选择星级评分并输入评价内容
* 新增page/maintain，完成上门保养功能导航页面
* 新增page/maintain_order，完成上门保养订单提交页面

## 2015-06-25 09:02

* 新增page/search，实现搜索展示页面功能，这个页面功能较复杂，花费时间太多了

## 2015-06-24 08:44

* 新增page/index，实现主菜单页面功能


## 2015-06-18 22:03

* 本次更新二期第四部分--个人信息相关
* 新增page/vip，完成VIP服务页面，集成各功能入口，URL暂未加
* 新增page/user_center，完成个人中心页面
* 新增page/user_info，完成会员信息页面
* 新增page/user_credit，完成我的积分页面


## 2015-06-18 09:59

* 本次更新补增6月17日的工作进展
* 新增page/phone，完成绑定手机号页面ui
* 新增page/phone_change，完成更换手机号页面ui
* 新增page/addr，完成常用地址页面ui
* 新增page/addr_search，完成添加常用地址页面ui
* 新增page/mycar，完成我的车辆页面ui
* 新增page/nickname，完成修改昵称页面ui
* 新增page/sex，完成选择性别页面ui
* 新增page/order_detail，完成订单详情页的订单完成状态页面
* 新增page/order_detail_overtime，完成订单详情页的订单逾期状态页面
* 新增page/order_detail_waiting，完成订单详情页的订单处理中状态页面

## 2015-06-16 23:58

* 编写tab选项卡插件，丰富扩展
* 新增page/mycoupons，完成我的优惠券和历史优惠券两个页面
* 新增page/myorder，完成我的订单和历史订单两个页面
* 类似的小条目页面比较难调ui，花费时间多，后续考虑抽象公共样式

## 2015-06-15 23: 40

* 完成提交订单弹框部分
* 新增page/exchange，完成积分兑换功能模板，包含兑换成功和失败的提示ui

## 2015-06-15 21:51

* 新增page/change，完成家政换证静态说明页面
* 新增page/newcar，完成新车上牌页面，包含banner轮播图
* 新增page/order_pay，完成在线支付页面ui展示
* 新增page/order_upload，完成订单中照片上传页面，其中功能部分未写，该模板包含上传前和上传完成。
* 新增page/order_wait，完成订单提交等待结果页面
* 新增page/secondhand，完成二手车过户说明页，包含轮播banner图展示
* 新增page/validatecar，完成年检/验车说明页，包含轮播图展示

## 2015-06-15 18:20

* 驾考预约-登录页面点击忘记密码点击失效，需要给一个url （fixed）
* 驾考预约-登录页面的登录和注册按钮在ios上显示靠下（fixed）
* 驾考预约-登录页面的登录和注册按钮样式失效（暂未修改）
* inform页面: 头像问题,头像是动态的,不能使用css,图片为正方形,需要用css3变为圆形,所有带头像的页面都需要使用正方形图片（fixed）

## 2015-06-14 23:27

* 添加事件处理机制，增设事件中心，观察者模式调度事件处理 -> event_center.js
* 为所有页面添加fastclick，解决移动端触摸延迟、点透等多种BUG，并在页面DOMContentLoaded初始化后添加
* 合并公共依赖的js文件为common.js一个文件
* 新增page/city，完成城市选择页面，点击城市增加选中效果等
* 新增page/service，完成驾管服务菜单页面，实现banner展示，完成菜单ui及点击跳转。
* 新增page/announce，完成交管局公告展示页面
* 新增page/commission，完成车务代办页面展示ui，包含banner展示和事务跳转功能
* 新增page/card，完成驾驶证页面，包含家政换证、补正、降级、审验、转正等多个功能页的入口，以及banner的展示区ui

## 2015-06-14 16:59

* 本次增补6月13日工作进展情况
* 新增page/addcar，完成添加车辆页面ui，输入省份、车牌号、身份证号以及发动机号后保存添加
* 新增page/dispose，完成违章处理页面，含banner展示、领取优惠券、车辆认证、违章查询信息等信息，点击快速处理按钮进行违章处理操作
* 新增page/upload，完成图片上传模板页，其中包括上传前和上传完成两部分功能，逻辑部分未写
* 新增page/order，完成订单提交页面ui展示，展示内容包括违章信息及相关费用展示
* 新增page/handle，该页面为违章处理入口页，包含banner区，领取优惠券、添加车辆、车辆认证、违章查询等功能入口

## 2015-06-12 23:47

* 比较累，开发效率严重下降；需要自己照顾身体了，这是coding的本钱
* 今天工作量以页面为主，ui效果较多
* 新增page/query，编写查询页面，输入车牌号和身份证号等信息后提交查询
* 新增page/peccancy，违章查询结果页面的模板，其中包含查询到结果和未查询到两种情况，后端后续套用该模板展示即可
* 新增page/auth，完成车辆认证页面，其中链接部分需后续加上

## 2015-06-11 23:11

* 新增modal自定义弹框插件 static/js/modal目录下引用
* 新增page/register，编写注册页面
* 新增page/confirm，完成驾考信息确认页面，含返回和确认预约功能。
* 新增page/course，完成驾考科目选择页面，选择后应展示对应状态并提交选择的科目信息到后端，含逻辑demo。
* 新增page/select，完成选择考场页面，其中交互部分有demo示例。功能包含预约成功和失败。
* 新增page/wait，完成排队信息页面

## 2015-06-10 23:40

* 新增page/login，完成登录页面，登录提交信息功能未写逻辑
* 新增page/inform，完成驾考通知页
* 新增page/forget，完成预约驾考页模板，其中包括轮播图功能；该模板可包含忘记密码、未检测到信息、预约成功以及预约失败四种情况。
* 需要思考前端组件化的友好实现，目前公用部分资源存放于static各目录下。

## 2015-06-10 01:06

* 使用grunt搭建基础开发环境
* 使用less编写样式，实时解析成css
* 配置实时监听各文件修改，文件变化后，同步编译并输出到浏览器，无需刷新
* 引用基本文件，css的重置和基础响应式文件；js的有zepto fastclick modjs

