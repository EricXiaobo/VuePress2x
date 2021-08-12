"use strict";(self.webpackChunkvuepress=self.webpackChunkvuepress||[]).push([[577],{3180:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-1956b8ae",path:"/Javascript/",title:"git入门",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"一、生成/添加SSH公钥【转载自码云】",slug:"一、生成-添加ssh公钥【转载自码云】",children:[]},{level:2,title:"二、码云、Github同时配置ssh key【转载自CSDN】",slug:"二、码云、github同时配置ssh-key【转载自csdn】",children:[]},{level:2,title:"三、上传",slug:"三、上传",children:[]}],filePathRelative:"Javascript/readme.md",git:{updatedTime:1628632948e3,contributors:[]}}},9359:(s,n,a)=>{a.r(n),a.d(n,{default:()=>i});const e=(0,a(6252).uE)('<h1 id="git入门" tabindex="-1"><a class="header-anchor" href="#git入门" aria-hidden="true">#</a> git入门</h1><h2 id="一、生成-添加ssh公钥【转载自码云】" tabindex="-1"><a class="header-anchor" href="#一、生成-添加ssh公钥【转载自码云】" aria-hidden="true">#</a> 一、生成/添加SSH公钥【转载自码云】</h2><p>Gitee 提供了基于SSH协议的Git服务，在使用SSH协议访问仓库之前，需要先配置好账户/仓库的SSH公钥。</p><ul><li>你可以按如下命令来生成 sshkey:</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen -t rsa -C <span class="token string">&quot;xxxxx@xxxxx.com&quot;</span>  \n<span class="token comment"># Generating public/private rsa key pair...</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>注意：这里的 xxxxx@xxxxx.com 只是生成的 sshkey 的名称，并不约束或要求具体命名为某个邮箱。 现网的大部分教程均讲解的使用邮箱生成，其一开始的初衷仅仅是为了便于辨识所以使用了邮箱。</p></div><ul><li>按照提示完成三次回车，即可生成 ssh key。通过查看 ~/.ssh/id_rsa.pub 文件内容，获取到你的 public key</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/id_rsa.pub\n<span class="token comment"># ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC6eNtGpNGwstc....</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="/images/git/02.png" alt=""><img src="/images/git/01.png" alt=""></p><ul><li>添加后，在终端（Terminal）中输入</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> -T git@gitee.com\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="/images/git/03.png" alt=""> 😎 添加成功后，就可以使用SSH协议对仓库进行操作了。</p><h2 id="二、码云、github同时配置ssh-key【转载自csdn】" tabindex="-1"><a class="header-anchor" href="#二、码云、github同时配置ssh-key【转载自csdn】" aria-hidden="true">#</a> 二、码云、Github同时配置ssh key【转载自CSDN】</h2><ul><li>进入到ssh目录</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.ssh  \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>通过下面的命令，依次生成两个平台的key</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen -t rsa -C <span class="token string">&quot;xxxxxxx@qq.com&quot;</span> -f <span class="token string">&quot;github_id_rsa&quot;</span>\nssh-keygen -t rsa -C <span class="token string">&quot;xxxxxxx@qq.com&quot;</span> -f <span class="token string">&quot;gitee_id_rsa&quot;</span>  \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><p>完成后，.ssh文件夹生成以下文件 <img src="/images/git/04.png" alt=""></p></li><li><p>把public key复制到gitee和github 执行命令cat github_id_rsa.pub把第二行到结尾的内容复制到github的ssh中保存</p></li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>同样的操作，添加gitee的ssh</p></div><p><img src="/images/git/05.png" alt=""></p><ul><li>创建config文件解决ssh冲突 在.ssh文件夹下执行命令vi config 文件中添加以下内容，按ZZ保存。</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># gitee</span>\nHost gitee.com\nHostName gitee.com\nPreferredAuthentications publickey\nIdentityFile ~/.ssh/gitee_id_rsa\n\n<span class="token comment"># github</span>\nHost github.com\nHostName github.com\nPreferredAuthentications publickey\nIdentityFile ~/.ssh/github_id_rsa\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>最后测试环节 执行</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> -T git@github.com或ssh -T git@gitee.com\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>😎 成功则返回Hi xxx! You&#39;ve successfully authenticated, but GITEE.COM does not provide shell access.</p><h2 id="三、上传" tabindex="-1"><a class="header-anchor" href="#三、上传" aria-hidden="true">#</a> 三、上传</h2><ul><li>在本地创建git仓库</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> homeworks   //创建名为homeworks的文件夹\n<span class="token builtin class-name">cd</span> homeworks   //定位到文件夹homeworks\n<span class="token function">git</span> init   //初始化仓库\n<span class="token function">touch</span> README.md  创建介绍文件（可忽略）\n<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>    //或 <span class="token function">git</span> <span class="token function">add</span> -A或git <span class="token function">add</span> <span class="token string">&quot;其他文件&quot;</span> //添加文件到本地仓库\n<span class="token function">git</span> commit -m <span class="token string">&quot;first commit&quot;</span>   //添加文件描述信息\n<span class="token function">git</span> remote <span class="token function">add</span> origin https://gitee.com/xxxxxxx/homeworks.git //链接远程仓库地址，创建主分支<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token function">git</span> push -u origin master  //把本地仓库的文件推送到远程仓库\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>本地已有git仓库</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> existing_git_repo\n<span class="token function">git</span> remote <span class="token function">add</span> origin https://gitee.com/xxxxxx/homework.git\n<span class="token function">git</span> push -u origin master\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',30),i={render:function(s,n){return e}}}}]);