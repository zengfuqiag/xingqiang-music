/*
* @Author: 小强
* @Date:   2018-12-15 22:48:36
* @Last Modified by:   小强
* @Last Modified time: 2019-01-12 11:16:44
*/
export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const currentSong = (state) =>{
	return state.playlist[state.currentIndex] || {}
}
