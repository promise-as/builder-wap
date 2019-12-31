'use strict';

theaMsForm($('.sign-in'));

var headLi = document.querySelectorAll('.ej-nav li');
var contItem = document.querySelectorAll('.ej-cont .cont-item');
/**
 * tab切换
 * @param { object } headEle 头部元素
 * @param { object } contEle 内容元素
 * @param { string } className 类名
 */
function tabHandle(headEle, contEle, className) {
  headEle.forEach(function (ele, index) {
    ele.onclick = function () {
      contEle.forEach(function (ele2) {
        ele2.classList.remove(className);
        contEle[index].classList.add(className);
      });
    };
  });
}
tabHandle(headLi, contItem, 'cur');