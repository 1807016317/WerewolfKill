/*
*	title: crypto
*	desc: password encryption and coding
*	auth: wangquanyou
*	date: 2020/6/16
*/

let crypto = require('crypto');

exports.md5 = function (content) {
	//创建 MD5 实例
	let md5 = crypto.createHash('md5');
	//加密内容的格式编码
	md5.update(content);
	//进行十六进制MD5加密
	return md5.digest('hex');	
}

exports.toBase64 = function(content){
	return new Buffer(content).toString('base64');
}

exports.fromBase64 = function(content){
	return new Buffer(content, 'base64').toString();
}
