/*
* @Author: 小强
* @Date:   2019-02-13 21:35:31
* @Last Modified by:   小强
* @Last Modified time: 2019-02-13 22:27:37
*/
function getRadomInt(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min)
}
export function shuffle(arr){
	let _arr = arr.slice()
	for(let i = 0; i < _arr.length; i++){
		let j = getRadomInt(0, i)
		let t = _arr[i]
		_arr[i] = _arr[j]
		_arr[j] = t
	}
	return _arr
}