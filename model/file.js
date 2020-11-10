// 模型层,数据层,操作文件相关的事情
const { dir } = require("console");
const fs = require("fs");

/**
 *  读取文件夹中的内容
 * @param {String} dirName 被读取的文件夹名称
 */
function getContents(dirName, callback) {
  fs.readdir(dirName, function (err, files) {
    // 异步方法返回数据不能使用return
    // return files;
    /* if(err){
      callback(err,null);
    }else{
      callback(null,files);
    } */
    callback(err, files);
  });
}
/**
 * 根据给定的名称创建文件夹
 * @param {String} dirName 创建的文件夹名称
 */
function create(dirName, callback) {
  fs.mkdir(dirName, function (err) {
    callback(err);
  });
}
// 暴露
module.exports = {
  getContents: getContents,
  create: create,
};
