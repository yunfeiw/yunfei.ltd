/**
 * @description: 列表结构
 * @param arr 渲染节点
 * @param placeImg 预加载图图片
 */

function RenderList(obj) {
    this.root = obj.root;
    this.list = obj.list;
    this.placeImg = obj.placeImg;
    // 初始化
    this.init();
}
RenderList.prototype.init = function () {
    //骨架
    this.frameUl();
}
RenderList.prototype.frameUl = function () {
    var _ul = document.createElement('ul');
    _ul.className = "goods_list clear_float";
    var list = this.frameList();
    _ul.appendChild(list);
    this.root.appendChild(_ul);
}
RenderList.prototype.frameList = function () {
    var fragument = document.createDocumentFragment();
    var _list = this.list;
    for (var i = 0, len = _list.length; i < len; i++) {
        var _li = this.frameLi(_list[i]);
        fragument.append(_li);
    };
    return fragument;
}
RenderList.prototype.frameLi = function (item) {
    var placeImg = this.placeImg;
    var _li = document.createElement('li');
    // create a link
    var _a = document.createElement('a');
    _a.setAttribute("href", item.href || "");
    _a.setAttribute("title", item.title || "");
    _a.setAttribute("target", "__brank");
    // create img
    var _img = document.createElement('img');
    _img.setAttribute("_src", item['src']);
    _img.setAttribute("src", placeImg);
    _img.onload = function () {
        _img.setAttribute("src", item['src']);
    }
    _a.appendChild(_img);
    _li.appendChild(_a);
    return _li;
}