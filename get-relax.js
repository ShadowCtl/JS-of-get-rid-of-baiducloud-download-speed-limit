// ==UserScript==
// @name         解决百度云大文件下载限制
// @namespace    undefined
// @version      0.0.6
// @description  一行代码，解决百度云大文件下载限制
// @author       funianwuxin
// @match        http://pan.baidu.com/*
// @match        https://pan.baidu.com/*
// @match        http://yun.baidu.com/*
// @match        https://yun.baidu.com/*
// @match        https://eyun.baidu.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

Object.defineProperty(Object.getPrototypeOf(navigator),'platform',{get:function(){return 'sb_baidu';}})


(function(){
var href=location.href;
/http:/.test(href)?location.href='https'+href.slice(4):0;
}());

/正则匹配的字符/.test(从哪个字符串中寻找)？如果找到执行此：没找到执行此
										 ？location.href='https'+href.slice(4)拼装成
										 				  https:+//nj02-bdg-recsys-es12-bd-miner.baijincdn.com/file/6b89a287add8a45b7ba05b53bac075b0?sdk_id=258&task_id=3025080500615184395&business_id=4097&bkt=p3-000030a954e2defb200637a42cc47814d150&xcode=b098002ba6bf3a75d58b95e2e0a646fe1c5337b7f0819442316128a2cdfcce4d&fid=906040179-250528-57149659743478&time=1482379114&sign=FDTAXGERLBH-DCb740ccc5511e5e8fedcff06b081203-5rfNbY6t8oBTGrUz6GjhLj0bPJM%3D&to=sds&fm=Qin,B,M,mn&sta_dx=591011284&sta_cs=44247&sta_ft=zip&sta_ct=7&sta_mt=7&fm2=Qingdao,B,M,mn&newver=1&newfm=1&secfm=1&flow_ver=3&pkey=140084353a63b8369ed685febe10a761d2d78f4ee4730000233a1dd4&sl=72745038&expires=8h&rt=sh&r=319211448&mlogid=8268218558458353671&vuk=-&vbdid=443894935&fin=Metasploitable_ubuntu-book.zip&fn=Metasploitable_ubuntu-book.zip&slt=pm&uta=0&rtype=1&iv=0&isw=0&dp-logid=8268218558458353671&dp-callid=0.1.1&sdk_id=258&hps=1&csl=137&csign=Vm4%2BukKXgwmHO46f1QWS%2BWre1JQ%3D



    