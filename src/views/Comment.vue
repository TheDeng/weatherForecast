<template>
  <div>
   <van-notice-bar text="欢迎您使用本软件，该新闻数据来源网易头条" left-icon="volume-o" />
   <div style="width:100%;height:100%;">
    <van-sidebar  v-model="activeKey" @change="onChange" style="float:left;">
      <van-sidebar-item title="社会" />
      <van-sidebar-item title="国内" />
      <van-sidebar-item title="国际" />
      <van-sidebar-item title="娱乐" />
      <van-sidebar-item title="体育" />
      <van-sidebar-item title="军事" />
      <van-sidebar-item title="科技" />
      <van-sidebar-item title="财经" />
      <van-sidebar-item title="时尚" />
    </van-sidebar>
      <div>
          <a :href="sj[0].url" style="color:black;">
            <span style="color:black;font-size:16px;text-indent:2em;display:block;padding-left:0px;">1.{{sj[0].title}}</span>
            <span style="color:black;font-size:12px;text-align:right;display:block;">{{sj[0].date}}</span>
          </a>
          <a :href="sj[1].url" style="color:black;">
            <span style="color:black;font-size:16px;text-indent:2em;display:block;padding-left:0px;">2.{{sj[1].title}}</span>
            <span style="color:black;font-size:12px;text-align:right;display:block;">{{sj[1].date}}</span>
          </a>
          <a :href="sj[2].url" style="color:black;">
            <span style="color:black;font-size:16px;text-indent:2em;display:block;padding-left:0px;">3.{{sj[2].title}}</span>
            <span style="color:black;font-size:12px;text-align:right;display:block;">{{sj[2].date}}</span>
          </a>
          <a :href="sj[3].url" style="color:black;">
            <span style="color:black;font-size:16px;text-indent:2em;display:block;padding-left:0px;">4.{{sj[3].title}}</span>
            <span style="color:black;font-size:12px;text-align:right;display:block;">{{sj[3].date}}</span>
          </a>
          <a :href="sj[4].url" style="color:black;">
            <span style="color:black;font-size:16px;text-indent:2em;display:block;padding-left:0px;">5.{{sj[4].title}}</span>
            <span style="color:black;font-size:12px;text-align:right;display:block;">{{sj[4].date}}</span>
          </a>
          <a :href="sj[5].url" style="color:black;">
            <span style="color:black;font-size:16px;text-indent:2em;display:block;padding-left:0px;">6.{{sj[5].title}}</span>
            <span style="color:black;font-size:12px;text-align:right;display:block;">{{sj[5].date}}</span>
          </a>
          <a :href="sj[7].url" style="color:black;">
            <span style="color:black;font-size:16px;text-indent:2em;display:block;padding-left:0px;">7.{{sj[6].title}}</span>
            <span style="color:black;font-size:12px;text-align:right;display:block;">{{sj[6].date}}</span>
          </a>
          <a :href="sj[8].url" style="color:black;">
            <span style="color:black;font-size:16px;text-indent:2em;display:block;padding-left:0px;">8.{{sj[7].title}}</span>
            <span style="color:black;font-size:12px;text-align:right;display:block;">{{sj[7].date}}</span>
          </a>
          <a :href="sj[9].url" style="color:black;">
            <span style="color:black;font-size:16px;text-indent:2em;display:block;padding-left:0px;">9.{{sj[8].title}}</span>
            <span style="color:black;font-size:12px;text-align:right;display:block;">{{sj[8].date}}</span>
          </a>
          <a :href="sj[10].url" style="color:black;">
            <span style="color:black;font-size:16px;text-indent:2em;display:block;padding-left:0px;">10.{{sj[9].title}}</span>
            <span style="color:black;font-size:12px;text-align:right;display:block;">{{sj[9].date}}</span>
          </a>
      </div>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" replace to="/" icon="home-o">出行</van-tabbar-item>
      <van-tabbar-item name="fire" replace to="/fire" icon="fire-o">景点</van-tabbar-item>
      <van-tabbar-item name="comment" replace to="/comment" icon="comment-o">新闻</van-tabbar-item>
      <van-tabbar-item name="service" replace to="/service" icon="service-o">语音</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from 'vue';
export default {
  data() {
    return {
      active:'comment',
      currentPage: 1,
      activeKey: 0,
      even:['shehui','guonei','guoji','yule','tiyu','junshi','keji','caijing','shishang'],
      sj:[],
      tj:"shehui",
    }
  },
  methods:{
    onChange(index) {
      this.tj=this.even[index];
      var that=this;
      console.log(this.tj)
    that.$axios({
      methods:"get",
      params:{
        type:this.tj
      },
      url:"/news/toutiao/index?key=02167c50ba3b083041a6f7e25cb89d6b"
    }).then(response=>{
      this.sj=response.data.result.data;
    })
    },
    getnews(){
      var that=this;
      that.$axios({
      methods:"get",
      params:{
        type:this.tj
      },
      url:"/news/toutiao/index?key=02167c50ba3b083041a6f7e25cb89d6b"
    }).then(response=>{
      this.sj=response.data.result.data;
    })
    }
  },
  mounted(){
    this.getnews()
  },
}
</script>
<style>
  img{
    display:block;
    margin:20px auto;
  }
</style>