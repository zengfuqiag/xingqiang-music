/*
* @Author: 小强
* @Date:   2019-02-14 20:33:20
* @Last Modified by:   小强
* @Last Modified time: 2019-02-17 12:24:48
*/
import {commonParams, options} from './config'
import axios from 'axios'
export function getLyric(mid) {
	const url = '/api/lyric'

	const data = Object.assign({}, commonParams, {
	    songmid: mid,
	    platform: 'yqq',
	    hostUin: 0,
	    needNewCode: 0,
	    categoryId: 10000000,
	    pcachetime: +new Date(),
	    format: 'json'
	})
	// return axios.get(url, { 
	//     params: data
	// }).then((res) => {
	//     return Promise.resolve(res.data)
	// })
}