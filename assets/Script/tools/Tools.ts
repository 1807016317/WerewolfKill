/*
* name:Tools
* describe：工具类
* author:wangquanyou
* time:2020/5/24
*/

export default class Tools {

	//日志输出
	static log(methodID: number, msg: string): void {
		if (typeof msg !== "string" || typeof methodID !== "number") {
			throw new Error("Expected string or number, got right typeof parameters.");
		}
		console.log("mthID:" + methodID + ", " + "msg:" + msg);
	}
}

//module.exports = Tools;