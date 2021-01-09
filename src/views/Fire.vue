<template>
  <div class="bj">
  <span style="text-align:center;display:block;width:100%;font-size:20px;margin-top:15px">{{this.user.Province}}的旅游景点</span>
  <ul style="width:100%;heightauto;">
    <li style="width:100%;height:12rem;text-align:left;padding:1rem 2rem 1rem 1rem;box-sizing:border-box;">
        <div>1.{{this.fire.data.record[0].spot}}</div>
        <div>旅游等级:{{this.fire.data.record[0].grade}}</div>  
        <div>景点类型:{{this.fire.data.record[0].type}}</div>
        <div>开放时间:{{this.fire.data.record[0].opentime}}</div>
        <div>游玩天数:{{this.fire.data.record[0].visittime}}</div>
        <div>购票方式:{{this.fire.data.record[0].tel}}</div>
    </li>
    <li style="width:100%;height:12rem;text-align:left;padding:1rem 2rem 1rem 1rem;box-sizing:border-box;">
        <div>2.{{this.fire.data.record[1].spot}}</div>
        <div>旅游等级:{{this.fire.data.record[1].grade}}</div>  
        <div>景点类型:{{this.fire.data.record[1].type}}</div>
        <div>开放时间:{{this.fire.data.record[1].opentime}}</div>
        <div>游玩天数:{{this.fire.data.record[1].visittime}}</div>
        <div>购票方式:{{this.fire.data.record[1].tel}}</div>
    </li>
    <li style="width:100%;height:12rem;text-align:left;padding:1rem 2rem 1rem 1rem;box-sizing:border-box;">
        <div>3.{{this.fire.data.record[2].spot}}</div>
        <div>旅游等级:{{this.fire.data.record[2].grade}}</div>  
        <div>景点类型:{{this.fire.data.record[2].type}}</div>
        <div>开放时间:{{this.fire.data.record[2].opentime}}</div>
        <div>游玩天数:{{this.fire.data.record[2].visittime}}</div>
        <div>购票方式:{{this.fire.data.record[2].tel}}</div>
    </li>
    <li style="width:100%;height:12rem;text-align:left;padding:1rem 2rem 1rem 1rem;box-sizing:border-box;">
        <div>4.{{this.fire.data.record[3].spot}}</div>
        <div>旅游等级:{{this.fire.data.record[3].grade}}</div>  
        <div>景点类型:{{this.fire.data.record[3].type}}</div>
        <div>开放时间:{{this.fire.data.record[3].opentime}}</div>
        <div>游玩天数:{{this.fire.data.record[3].visittime}}</div>
        <div>购票方式:{{this.fire.data.record[3].tel}}</div>
    </li>
    <li style="width:100%;height:12rem;text-align:left;padding:1rem 2rem 1rem 1rem;box-sizing:border-box;">
        <div>5.{{this.fire.data.record[4].spot}}</div>
        <div>旅游等级:{{this.fire.data.record[4].grade}}</div>  
        <div>景点类型:{{this.fire.data.record[4].type}}</div>
        <div>开放时间:{{this.fire.data.record[4].opentime}}</div>
        <div>游玩天数:{{this.fire.data.record[4].visittime}}</div>
        <div>购票方式:{{this.fire.data.record[4].tel}}</div>
    </li>
    <li style="width:100%;height:12rem;text-align:left;padding:1rem 2rem 1rem 1rem;box-sizing:border-box;">
        <div>6.{{this.fire.data.record[5].spot}}</div>
        <div>旅游等级:{{this.fire.data.record[5].grade}}</div>  
        <div>景点类型:{{this.fire.data.record[5].type}}</div>
        <div>开放时间:{{this.fire.data.record[5].opentime}}</div>
        <div>游玩天数:{{this.fire.data.record[5].visittime}}</div>
        <div>购票方式:{{this.fire.data.record[5].tel}}</div>
    </li>
    <li style="width:100%;height:12rem;text-align:left;padding:1rem 2rem 1rem 1rem;box-sizing:border-box;">
        <div>7.{{this.fire.data.record[7].spot}}</div>
        <div>旅游等级:{{this.fire.data.record[6].grade}}</div>  
        <div>景点类型:{{this.fire.data.record[6].type}}</div>
        <div>开放时间:{{this.fire.data.record[6].opentime}}</div>
        <div>游玩天数:{{this.fire.data.record[6].visittime}}</div>
        <div>购票方式:{{this.fire.data.record[6].tel}}</div>
    </li>
    <li style="width:100%;height:12rem;text-align:left;padding:1rem 2rem 1rem 1rem;box-sizing:border-box;">
        <div>8.{{this.fire.data.record[7].spot}}</div>
        <div>旅游等级:{{this.fire.data.record[7].grade}}</div>  
        <div>景点类型:{{this.fire.data.record[7].type}}</div>
        <div>开放时间:{{this.fire.data.record[7].opentime}}</div>
        <div>游玩天数:{{this.fire.data.record[7].visittime}}</div>
        <div>购票方式:{{this.fire.data.record[7].tel}}</div>
    </li>
  </ul>
  <div style="text-align:center;display:block;width:100%;padding-bottom:2rem">没有更多了</div>
    <van-tabbar v-model="active" style="margin-top:1rem">
      <van-tabbar-item name="home" replace to="/" icon="home-o">出行</van-tabbar-item>
      <van-tabbar-item name="fire" replace to="/fire" icon="fire-o">景点</van-tabbar-item>
      <van-tabbar-item name="comment" replace to="/comment" icon="comment-o">新闻</van-tabbar-item>
      <van-tabbar-item name="service" replace to="/service" icon="service-o">语音</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import screen from '../assets/images/screen.png';
import shanping from '../assets/images/shanping.png';
export default {
  data() {
    return {
      active: 'fire',
      user:{
        'ip':'',
        'Province':'陕西',
      },
      fire:[],
    }
  },
  beforeMount(){
    this.ready(),
    this.getCity()
  },
  mounted(){
    this.getfire()
  },
  methods:{
    ready:function(){
      //获取本地IP地址
               //js 引入 <!-- 获取本机ip  -->
               //<script src="http://pv.sohu.com/cityjson?ie=utf-8">
      var cip=returnCitySN["cip"];
 //给vuedata对象里的字段赋值
 this.user.ip=cip
    },
  getCity:function(){
    var that=this;
    that.$axios({
      methods:"get",
      params:{
        ip:this.user.ip
      },
      url:"/api/ip/ipNew?key=f9e2f0e097e7e14c4b30f7c254a2da1b"
    }).then(response=>{
      this.user.Province=response.data.result.Province;
    })
},
  getfire:function(){
    var that=this;
     that.$axios({
      methods:"get",
      params:{
        ip:this.user.ip
      },
      url:"/api/ip/ipNew?key=f9e2f0e097e7e14c4b30f7c254a2da1b"
    }).then(response=>{
      this.user.Province=response.data.result.Province;
        that.$axios({
      headers:{
        'Authorization':'APPCODE e70496e65b6b4d6da639d0c4f124ed1f'
        },
      methods:"get",
      params:{
        province:that.user.Province
      },
      url:"/fires/lianzhuo/scenicspot?AppCode=e70496e65b6b4d6da639d0c4f124ed1f"
    }).then(response=>{
      that.fire=response.data;
    })
    })
  }
  }
}
</script>
<style scoped>
.van-row{
  margin-top:20px;
}
</style>
