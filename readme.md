#  练习 - 学生成绩单-命令行版

## Tasking
* [Tasking image](https://ws3.sinaimg.cn/large/006tNc79ly1fyyi60a1jlj31360u0q7o.jpg)
* [Tasking text](https://ws4.sinaimg.cn/large/006tNc79ly1fyyiccubwyj315k0u0wmh.jpg)

## 思路描述
* 该项目使用了'readline-sync'实现与命令行的交互
* 为了实现需求，该项目创建了三个class，分别为Student, Score, 和Scoresheet。
    1. Student class 包含了学生的姓名，学号和一个Score对象。
    2. Score class 包含了一个Map对象（储存各科成绩），以及求平均分和总分的两个方法。
    3. Scoresheet class 包含了以下内容：
        * 一个Set对象：储存需要打印成绩的Student对象
        * 一个Map对象：以学号为键储存已添加的所有Student对象
        * scoresheetTitle：字符串，成绩单的表头
        * appendStudent：向当前Scoresheet对象中添加要打印的Student对象
        * getTotalScore: 取得所有已添加学生的总分
        * getAverage & getMedian: 求得所有学生总分的平均分和中位数
        * printScoreSheet: 向命令行输出成绩单
* 主体思路如下：
    * 添加学生：首先设置了一个全局变量currentStudents<Map>用来储存添加的Student对象，并用学生的学号作为键值。取得用户输入后，将其处理成为三部分（姓名，学号，成绩）。先判断该学生是否已经添加（通过学号在currentStudents中查询）。如果该学生已经存在，则更新该学生的成绩。如果该学生还未添加，则新建一个Score对象储存成绩，新建一个Student对象储存学生信息，并将其加入currentStudents中。
    * 生成成绩单：首先判断currentStudents是否为空，如果是，则提示用户并未添加任何学生。如果currentStudents不为空，则通过用户输入的学号从currentStudents中提取出该学生的成绩，并将其输出到命令行中。
    * 如果用户输入的格式有误时，提示用户正确的格式。
    * 添加完学生/生成成绩单后返回主界面。

## 测试
* 由于不清楚如何在测试的过程中从命令行抓取输入的数据，因此我将使用该程序进行交互的过程截图保存了下来。
* 添加学生：
    1. 当正确格式的信息被输入时，系统应该保存该信息并且提示该学生的成绩被添加；当错误格式的信息被输入时，系统应该提示正确的输入格式。
    2. 成功添加学生成绩后，该学生的成绩应该能够被打印出来。同时，在计算全班总分平均分和中位数时，也应该将其计算在内。
    3. 成功添加学生成绩后，应该返回主菜单。
* 生成成绩单：
    1. 当输入正确格式的信息时，成绩单应该被打印在命令行中；当输入错误格式的信息时，系统应该提示正确的输入格式。
    2. 当输入不存在的学号时，不会报错，并在命令行中打印输入的其他学号学生的成绩。
    3. 成功打印成绩单后，应该返回主菜单。
* 退出：选择该选项时应该退出程序。
* 当用户在主菜单下输入除了'1,2,3'以外的内容时，不进行任何操作并且返回主菜单。
* 测试截图：[Test screenshot](https://ws1.sinaimg.cn/large/006tNc79ly1fyyjtbe3n1j30u01szale.jpg)


## 需求描述
我们现在做一个命令行应用。当程序启动的时候，我们会看到一个命令行的主界面：
```
1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：
```
如果我们输入1，那么界面就会变成：
```
请输入学生信息（格式：姓名, 学号, 学科: 成绩, ...），按回车提交：
```
如果输入格式不正确，就返回：
```
请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：
```
如果输入格式正确就会返回
```
学生xxx的成绩被添加
```
然后打印
```
1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：
```
等于回到了主界面。
如果我们在主界面输入了2，那么界面就会变成：
```
请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：
```
如果我们输入的不正确，就会打印：
```
请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：
```
如果输入的格式正确，则会打印成绩单并回到主界面。
```
成绩单
姓名|数学|语文|英语|编程|平均分|总分
========================
张三|75|95|80|80|82.5|330
李四|85|80|70|90|81.25|325
========================
全班总分平均数：xxx
全班总分中位数：xxx
```
如果我们输入的学号不存在，该学号在计算时就会被忽略。

## 作业要求
1. 画 Task 图；
1. 编写测试代码；
1. 使用同步 IO。

## 如何使用

首先初次下载完需要安装依赖：
```
  npm install
```

然后才能执行测试：

```
  npm test
```

可以通过测试来检测本地代码是否完成作业要求，测试通过即可提交到github，把git库地址填到答题页面，并提交表单。

## 参考资料
1. [npm 下载安装](https://github.com/npm/npm)
2. [node 下载安装](https://github.com/creationix/nvm)
3. [jasmine用法](http://jasmine.github.io/2.4/introduction.html)
4. [git用法1](https://github.com/doggy8088/Learn-Git-in-30-days/blob/master/docs/02%20%E5%9C%A8%20Windows%20%E5%B9%B3%E5%8F%B0%E5%BF%85%E8%A3%9D%E7%9A%84%E4%B8%89%E5%A5%97%20Git%20%E5%B7%A5%E5%85%B7.markdown)
5. [git用法2](https://try.github.io/levels/1/challenges/1)
6. [git简易指南](http://gitref.org/zh/index.html)
7. [github用法](https://guides.github.com/activities/hello-world/)
1. [像机器一样思考](https://www.zybuluo.com/jtong/note/403738)

## 答题流程
- 请用户仔细阅读题目要求和题目描述

- 在命令行中使用以下命令在用户本地任意目录下clone此题目库
```
git clone repo_of_this_template
```
NOTE：如果提示git命令未找到请先阅读参考资料
- 用任意编辑器打开clone下来的文件夹，内部会存在两个文件夹
```
spec  //测试文件夹
src   //源文件
```
`请在src文件下的main.js文件内实现main函数`

- 完成函数后，使用以下命令设置github远程仓库地址 (my_url代表你自己的新的github地址)
```
 git remote set-url origin my_url
```
- 请使用**git提交(commit)**并**上传(push)**，之后将此github仓库地址(用户自建的) eg:（https://github.com/username/repo） 填入到提交地址一栏
- 获取分支
- 提交
- 等待结果


## 如何本地运行

首先初次下载完需要安装依赖：

```
  npm install
```

然后才能执行测试：

```
  npm test
```

可以通过测试来检测本地代码是否完成作业要求，测试通过即可提交到github，把git库地址填到答题页面，并提交表单。
