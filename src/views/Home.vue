<template>
  <div class="bj" style="width:100vw;height:100vh;">
  <img class="bjt" src="../assets/images/shanping.png" style="width:100vw;height:400px;display:block;margin-top:-20px;"></img>
  <span style="display:block;position:absolute;color:#fff;top:10px;left:140px;"><i class="iconfont icon-dingwei"></i>{{user.city}}</span>
  <span style="display:block;position:absolute;top:80px;left:140px;font-size:38px;color:#fff">{{weather.realtime.temperature}}℃</span>
  <span style="display:block;position:absolute;top:160px;left:160px;font-size:30px;color:#fff">{{weather.realtime.info}}</span>
<van-row type="flex" style="text-align:center">
  <van-col span="8">{{(weather.future[0].date).slice(5)}}</van-col>
  <van-col span="8">{{(weather.future[1].date).slice(5)}}</van-col>
  <van-col span="8">{{(weather.future[2].date).slice(5)}}</van-col>
</van-row>
<van-row type="flex" style="text-align:center">
  <van-col span="8">{{(weather.future[0].temperature)}}</van-col>
  <van-col span="8">{{(weather.future[1].temperature)}}</van-col>
  <van-col span="8">{{(weather.future[2].temperature)}}</van-col>
</van-row>
<van-row type="flex" style="text-align:center">
  <van-col span="8">{{(weather.future[0].weather)}}</van-col>
  <van-col span="8">{{(weather.future[1].weather)}}</van-col>
  <van-col span="8">{{(weather.future[2].weather)}}</van-col>
</van-row>
<van-row type="flex" style="text-align:center">
  <van-col span="8">{{(weather.future[0].direct)}}</van-col>
  <van-col span="8">{{(weather.future[1].direct)}}</van-col>
  <van-col span="8">{{(weather.future[2].direct)}}</van-col>
</van-row>
  <div style="width:100%;height:200px;margin-top:20px;box-sizing:border-box;">
    <ul style="width:25%;height:100px;float:left;box-sizing:border-box;border:1px solid #000;border-bottom:0px;border-right:0px">
      <li style="width:100%;height:60px;text-align:center;line-height:80px">
          <i class="iconfont icon-yusan" style="font-size:30px"></i>
      </li>
      <li style="width:100%;height:40px;text-align:center;line-height:20px;font-size:14px">不带伞</li>
    </ul>
    <ul style="width:25%;height:100px;float:left;box-sizing:border-box;border:1px solid #000;border-bottom:0px;border-right:0px">
      <li style="width:100%;height:60px;text-align:center;line-height:80px">
          <i class="iconfont icon-yifu" style="font-size:30px"></i>
      </li>
      <li style="width:100%;height:40px;text-align:center;line-height:20px;font-size:14px">冷</li>
    </ul>
    <ul style="width:25%;height:100px;float:left;box-sizing:border-box;border:1px solid #000;border-bottom:0px;border-right:0px">
      <li style="width:100%;height:60px;text-align:center;line-height:80px">
          <i class="iconfont icon-taiyang" style="font-size:30px"></i>
      </li>
      <li style="width:100%;height:40px;text-align:center;line-height:20px;font-size:14px">紫外线较弱</li>
    </ul>
    <ul style="width:25%;height:100px;float:left;box-sizing:border-box;border:1px solid #000;border-bottom:0px">
      <li style="width:100%;height:60px;text-align:center;line-height:80px">
          <i class="iconfont icon-icon-test" style="font-size:30px"></i>
      </li>
      <li style="width:100%;height:40px;text-align:center;line-height:20px;font-size:14px">易感冒</li>
    </ul>
        <ul style="width:25%;height:100px;float:left;box-sizing:border-box;border:1px solid #000;border-right:0px">
      <li style="width:100%;height:60px;text-align:center;line-height:80px">
          <i class="iconfont icon-lanqiu" style="font-size:30px"></i>
      </li>
      <li style="width:100%;height:40px;text-align:center;line-height:20px;font-size:14px">不易运动</li>
    </ul>
    <ul style="width:25%;height:100px;float:left;box-sizing:border-box;border:1px solid #000;border-right:0px">
      <li style="width:100%;height:60px;text-align:center;line-height:80px">
          <i class="iconfont icon-xichefuwu" style="font-size:48px"></i>
      </li>
      <li style="width:100%;height:40px;text-align:center;line-height:20px;font-size:14px">易洗车</li>
    </ul>
    <ul style="width:25%;height:100px;float:left;box-sizing:border-box;border:1px solid #000;border-right:0px">
      <li style="width:100%;height:60px;text-align:center;line-height:80px">
          <i class="iconfont icon-yu" style="font-size:30px"></i>
      </li>
      <li style="width:100%;height:40px;text-align:center;line-height:20px;font-size:14px">易钓鱼</li>
    </ul>
    <ul style="width:25%;height:100px;float:left;box-sizing:border-box;border:1px solid #000">
      <li style="width:100%;height:60px;text-align:center;line-height:80px">
          <i class="iconfont icon-jiaotongdeng" style="font-size:30px"></i>
      </li>
      <li style="width:100%;height:40px;text-align:center;line-height:20px;font-size:14px">交通良好</li>
    </ul>
  </div>
    <van-tabbar v-model="active" style="margin-top:1rem">
      <van-tabbar-item name="home" replace to="/" icon="home-o">出行</van-tabbar-item>
      <van-tabbar-item name="fire" replace to="/fire" icon="fire-o">景点</van-tabbar-item>
      <van-tabbar-item name="comment" replace to="/comment" icon="comment-o">新闻</van-tabbar-item>
      <van-tabbar-item name="service" replace to="/service" icon="service-o">语音</van-tabbar-item>
    </van-tabbar>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
  天气数据来源于聚合数据网
</van-divider>
  </div>
</template>
<script>
import screen from '../assets/images/screen.png';
import shanping from '../assets/images/shanping.png';
export default {
  data() {
    return {
      active: 'home',
      user:{
        'ip':'183.200.227.113',
        'city':'吕梁市',
      },
      weather:[],
      shanping,
      screen
    }
  },
  mounted(){
    this.ready(),
    this.getCity(),
    this.getWeather()
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
      url:"/api/siteTools/app/IP/query.php?key=485832e690d473997d7d38e1b95241a4"
    }).then(response=>{
      console.log(response);
      this.user.city=response.data.result.City;
    })
},
  getWeather:function(){
    var that=this;
    that.$axios({
      methods:"get",
      params:{
        city:that.user.city.slice(0,-1)
      },
      url:"/api/simpleWeather/query?key=c4323442427d036476015f94e9f8b063"
    }).then(response=>{
      this.weather=response.data.result;
    })
  }
  }
}
</script>
<style scoped>
.van-row{
  margin-top:20px;
}
/* 底部内容开始 */
.footer{
  width:100%;
  height:300px;
  background:#e4e4e4;  
  float: left;
  padding: 20px 0;
  margin:0 auto;
}
.footer li{
  float:left;
}

/* 底部内容结束 */

</style>
