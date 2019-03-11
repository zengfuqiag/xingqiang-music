/*
* @Author: 小强
* @Date:   2019-01-05 15:20:39
* @Last Modified by:   小强
* @Last Modified time: 2019-02-17 12:26:16
*/
import {getLyric} from 'api/song'
import {ERR_OK} from 'api/config'
export default class Song{
	constructor({id, mid, singer, name, album, duration, images,url}){
		this.id = id
		this.mid = mid
		this.singer = singer
		this.name = name
		this.album = album
		this.duration = duration
		this.images = images 
		this.url = url
	}

	getLyric(){
		// getLyric(this.mid).then((res) => {
		// 	console.log(res)
		// 	if(res.code === ERR_OK){
		// 		this.lyric = res.lyric
		// 		console.log(this.lyric)
		// 	}
		// })
	}
}

export function createSong(musicDate, vkey){
	return new Song({
		id: musicDate.songid,
		mid: musicDate.songmid,
		singer: filterSinger(musicDate.singer),
		name: musicDate.songname,
		album: musicDate.albumname,
		duration: musicDate.interval,
    	images: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicDate.albummid}.jpg?max_age=2592000`,
    	//url: `http://ws.stream.qqmusic.qq.com/${musicDate.songmid}.m4a?fromtag=46`
    	url: `http://dl.stream.qqmusic.qq.com/C400${musicDate.songmid}.m4a?fromtag=38&guid=5931742855&vkey=${vkey}`
  
	})
}

function filterSinger(singer){
	let ret = []
	if(!singer){
		return ''
	}
	singer.forEach((s) => {
		ret.push(s.name)
	})
	return ret.join('/')
}