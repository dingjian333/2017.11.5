		
		const fx = {
			template:`
				<div>
					<ul class="ul1">
						<li>
							<router-link to="/gx">	
								个性推荐
							</router-link>
						</li>
						<li>
							<router-link to="/gd">	
								歌单
							</router-link>
						</li>
						<li>
							<router-link to="/dt">	
								主播电台
							</router-link>
						</li>
						<li>
							<router-link to="/phb">	
								排行榜
							</router-link>
						</li>
					
					</ul>
					<router-view></router-view>
				</div>
			`
		};
		
		const wd = {
			template:"<div>我的音乐</div>"
		}
		const py = {
			template:"<div>我的朋友</div>"
		}
		const zh = {
			template:"<div>我的账号</div>"
		}
		
		//子路由
		const gd = {
			template:"<div>我的歌单</div>"
		}
		const dt = {
			template:"<div>我的电台</div>"
		}
		const phb = {
			template:"<div>我的排行榜</div>"
		}
		
		
		const gx = {
			data(){
				return{
					result:[]
				}
			},
			created(){
				axios.get("data.json").then((res)=>{
					this.result = res.data.data
					console.log(res)
				})
			},
			template:`
			<div>
				<div class="swiper-container lb">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<img src="img/banner1.png"/>
						</div>
						<div class="swiper-slide">
							<img src="img/banner2.png"/>
						</div>
						<div class="swiper-slide">
							<img src="img/banner3.png"/>
						</div>
					</div>
					<div class="swiper-pagination"></div>
				</div>
				
			<div class="main">
				<div>
					<img src="img/list1.png"/>
					<p>私人FM</p>
				</div>
				<div>
					<img src="img/list2.png"/>
					<p>每日歌曲推荐</p>
				</div>
				<div>
					<img src="img/list3.png"/>
					<p>云音乐热歌榜</p>
				</div>
			</div>
				
			<p class="p1">推荐歌单 ></p>	
				

		<div class="fot">
			<ul>
				<li v-for="str in result">
					<img :src="str.img"/>
					<p>{{str.p}}</p>
				</li>
			</ul>
		</div>
				
	</div>`,
	//配置轮播
		mounted(){
			setTimeout(function(){
				new Swiper(".lb",{
				autoplay:1000,
				loop:true,  
				pagination:".swiper-pagination",
				autoplayDisableOnInteraction:false,
				paginationClickable: true,
			})	
			},200)
			
		}
		}
		//配置路由
		const routes =[
			{
				path:"/fx",
				component:fx,
				children:[
					{path:"/gx",component:gx},
					{path:"/gd",component:gd},
					{path:"/dt",component:dt},
					{path:"/phb",component:phb},
					{path:"/",redirect:"/gx"}
				]
			},
			{path:"/wd",component:wd},
			{path:"/py",component:py},
			{path:"/zh",component:zh},
			{path:"/",redirect:"/fx"}
		];
		
		const router = new VueRouter({
			routes
		});
		
		new Vue({
			el:"#app",
			router
		})
		
		
		
		
		