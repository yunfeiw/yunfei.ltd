/**
 * @description: 列表结构
 * @param arr 渲染节点
 * @param placeImg 预加载图图片
 */

function RenderList(obj) {
    this.list = obj.arr;
    this.placeImg = obj.placeImg;
    // 初始化
}
RenderList.prototype.init = function () {
    //骨架
    this.frame();
}
RenderList.prototype.frameUl = function () {
    var _ul = document.createElement('ul');
    _ul.className = "goods_list clear_float";
}
RenderList.prototype.frameList = function () {
    var fragument = document.createDocumentFragment();
    var _list = this.list;
    var placeImg = this.placeImg;
    for (var i = 0, len = _list.length; i < len; i++) {
        var _li = document.createElement('li');
        var _img = document.createElement('img');
        _img.setAttribute("_src",_list['src']);
        _img.setAttribute("src",placeImgf);
        _li.appendChild(_img);
    };
}