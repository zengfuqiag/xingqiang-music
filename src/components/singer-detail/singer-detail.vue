<template>
	<transition name="slider">
		<music-list :songs="songes" :title="title" :bg-image="bgImage"></music-list>
	</transition>

</template>

<script>
	import {mapGetters} from 'vuex'
	import {getSingerDetail, getSongVkey, } from 'api/singer'
	import {ERR_OK} from 'api/config'
	import {createSong} from 'common/js/song'
	import MusicList from 'components/music-list/music-list'

	export default{
		data(){
			return {
				songes:[]
			}
		},
		components: {
			MusicList: MusicList
		},
		computed:{
			title(){
				return this.singer.name
			},
			bgImage(){
				return this.singer.avatar
			},
			...mapGetters([
				'singer'
			])
		},
		created(){
			this._getDetail()
		},
		methods:{
			_getDetail(){
				if (!this.singer.id) {
		          this.$router.push('/singer')
		          return
		        }
				getSingerDetail(this.singer.id).then((res) => {
					if(res.code === ERR_OK){
						this.songes = this._normalizeSongs(res.data.list)
					}
				})
			},
			_normalizeSongs(list){
				let ret = []
				list.forEach((item) => {
					let {musicData} = item
					getSongVkey(musicData.songmid).then((res) => {
			          const vkey = res.data.items[0].vkey;
			          if(musicData.songid && musicData.albummid){
							ret.push(createSong(musicData,vkey))
						}
			        })
					
				})
				return ret
			}
		}
	}

</script>

<style scopde lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable"
	.slider-enter-active,.slider-leave-active
		transition: all 0.3s
	.slider-enter,.slider-leave-to
		transform: translate3d(100%, 0, 0)
</style>