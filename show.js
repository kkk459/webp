function show(content) {
  window.document.getElementById("app").innerText = "Hello," + content;
}
console.log('123')
// 通过 CommonJS 规范导出 show 函数
module.exports = show;
