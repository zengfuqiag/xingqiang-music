<template>
	<div class="recommend" ref="recommend">
		<scroll ref="scroll" class="recommend-content" :data="discList">
			<div>
				<div v-if="recommend.length" class="slider-wrapper" ref="sliderWrapper">
					<slider>
						<div v-for="item in recommend">
			              <a :href="item.linkUrl">
			                <img class="needsclick" @load="loadImage" :src="item.picUrl">
			              </a>
			            </div>
					</slider>
				</div>
				<div class="recommend-list">
					<h1 class="list-title">热闹歌手推荐</h1>
					<ul>
						<li v-for="item in discList" class="itme">
							<div class="icon">
								<img width="60" height="60" v-lazy="item.picUrl">
							</div>
							<div class="text">
								<h2 class="name" v-html="item.songListAuthor"></h2>
								<p class="desc" v-html="item.songListDesc"></p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="loading-container" v-show="!discList.length">
				<loading></loading>
			</div>
			
		</scroll>
	</div>
</template>

<script>
	import Loading from 'base/loading/loading'
	import Scroll from 'base/scroll/scroll'
	import Slider from 'base/slider/slider'
	import {getRecommend, getDiscList} from 'api/recommend'
	import {ERR_OK} from 'api/config'
	import {playlistMixin} from 'common/js/mixin'
	export default{
		mixins:[playlistMixin ], 
		data(){
			return {
				recommend:[],
				discList:[]
			}
		},
		created(){
			this._getRecommend()
		},
		components:{
			Slider,
			Scroll,
			Loading
		},
		methods: {
			handlePlaylist(playlist){
				const bottom = playlist.length > 0 ? '60px' : ''
				this.$refs.recommend.style.bottom = bottom
				this.$refs.scroll.refresh()
			},
			_getRecommend(){
				getRecommend().then((res) => {
		          if (res.code === ERR_OK) {
		            this.recommend = res.data.slider
		            this.discList = res.data.songList;
		           
		          }
		        })
			},
			_getDiscList(){
				getDiscList().then((res) => {
		          if (res.code === ERR_OK) {
		            
		            console.log(res.data)
		          }
		        })
			},
			loadImage(){
				if(!this.checkLoaded){
					this.$refs.scroll.refresh()  
					this.checkLoaded = true
				}
				
			}
		
		}
	}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable"
	.recommend
		position:fixed;
		top:88px;
		bottom:0;
		width:100%;
		.recommend-content
			height:100%;
			overflow:hidden;
			.slider-wrapper
				position:relative;
				width:100%;
				overflow:hidden;
			.recommend-list
				.list-title
					height:65px;
					line-height:65px;
					text-align:center;
					font-size:$font-size-medium;
					color:$color-theme;
				.itme
					display:flex;
					box-sizing:border-box;
					align-items:center;
					padding: 0 20px 20px 20px;
					.icon
						flex:0 0 60px;
						width:60px;
						padding-right:20px;
					.text 
						display:flex;
						flex-direction:column;
						flex:1;
						line-height:20px;
						overflow:hidden;
						font-size:$font-size-medium;
						.name
							margin-bottom:10px;
							color:$color-text;
						.desc
							color:$color-text-d;
		.loading-container
			position:absolute;
			width:100%;
			top:50%;
			transform: translataY(-50%)

</style>