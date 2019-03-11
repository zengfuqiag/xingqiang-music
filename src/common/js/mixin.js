/*
* @Author: 小强
* @Date:   2019-02-17 14:48:27
* @Last Modified by:   小强
* @Last Modified time: 2019-02-17 14:58:12
*/
import {mapGetters} from 'vuex'
export const playlistMixin = {
	computed:{
		...mapGetters([
			'playlist'
		])
	},
	mounted(){
		this.handlePlaylist(this.playlist)
	},
	activated(){
		this.handlePlaylist(this.playlist)
	},
	watch:{
		playlist(newVal){
			this.handlePlaylist(newVal)
		}
	},
	methods:{
		handlePlaylist(){
			throw new Error('component must implement handlePlaylist methods')
		}
	}

}