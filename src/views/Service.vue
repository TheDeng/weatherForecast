<template>
  <div>
  <form action="/" style="margin-top:2rem">
  <van-search
    v-model="value"
    show-action
    placeholder="地名不加省市"
    @search="onSearch"
    @cancel="onCancel"
  />

  </form>




    <div style="width:80px;height:40px;background:blue;text-align:center;line-height:40px;margin-top:470px;float:right;color:#fff"  @touchstart="streamRecord" @touchend="streamRecordEnd" > 语音搜索</div>


    <van-tabbar v-model="active">
      <van-tabbar-item name="home" replace to="/" icon="home-o">出行</van-tabbar-item>
      <van-tabbar-item name="fire" replace to="/fire" icon="fire-o">景点</van-tabbar-item>
      <van-tabbar-item name="comment" replace to="/comment" icon="comment-o">新闻</van-tabbar-item>
      <van-tabbar-item name="service" replace to="/service" icon="service-o">语音</van-tabbar-item>

    </van-tabbar>
  </div>
</template>
<script>
import { Toast } from 'vant';
import {$} from '../assets/js/jquery'
import { Recorder } from '../assets/js/record.js'
var recorder=null
export default {
  data() {
    return {

      active:'service',
      value: '',
      weather:[],
      wenzi:'',
      area: 'province',
      temp: null,
      token:'24.ed010746f7cbca3dc33087314a248929.2592000.1589872660.282335-19051097',
      speech:"",
      len:0,
      files:null,
      citys:"",
      src:"",
      datafile:''



    }
  },
  methods: {


    say(words) {
      var speech = window.speechSynthesis;
      var speak = new SpeechSynthesisUtterance();
      speak.text = words;
      speech.speak(speak);
    },

    onSearch() {
      var that = this;
      that.$axios({
        methods: "get",
        params: {
          city: that.value
        },
        url: "/api/simpleWeather/query?key=c4323442427d036476015f94e9f8b063"
      }).then(response => {
        this.weather = response.data.result;
        console.log(this.weather)
        this.wenzi = this.weather.city + ',今天' + this.weather.future[0].weather + ',' + this.weather.future[0].temperature + ',' + this.weather.future[0].direct + '。' + '明天' + this.weather.future[0].weather + ',' + this.weather.future[1].temperature + ',' + this.weather.future[1].direct
        this.wenzi = this.wenzi.replace(/\//g, '到')
        var speech = window.speechSynthesis;
        var speak = new SpeechSynthesisUtterance();
        speak.text = this.wenzi;
        speech.speak(speak);
      })
    },
    onCancel() {
      Toast('取消');
    },
    //按下调用语音接口，开始进行录音
    streamRecord(e) {

      e.preventDefault()
      Recorder.get(function (rec) {
        recorder = rec
        recorder.start()
        console.log("开始录音")
      })
    },
    //获取百度API接口使用用到的token，30天只需要调用一次，调用一次可以记录下来持久化保存
    getToken() {
      this.$axios({
        methods: "post",
        params: {
          client_id: "qK7ZhrF9Kn7u3WIni9NWXxm8",
          client_secret: "bn2pQOb2QGdnRY5U1w5RHkhPNBWB6RRl",
          grant_type: "client_credentials"
        },
        // data:that.file,
        url:"/read/oauth/2.0/token"
      }).then((res) => {
        this.token = res.data.access_token
        console.log(this.token)
      })
    },


    //停止录音
    streamRecordEnd(e) {

      e.preventDefault()
      recorder.stop()
      //三十天获取一次TOKEN即可
      // this.getToken()
      // console.log(this.token)
      this.files = recorder.getBlob()  //得到需要的pcm文件
      this.len=this.files.size //获得音频文件的大小
      //异步获取音频文件的base64编码,调用的接口是recorder所有的getBase64
      let promise=recorder.getBase64(this.files)
      promise.then((res)=>{
        //这一步是最坑的,获取完base64编码，结果只有后半部分是可以的
        this.speech=res.split(',')[1]
        //获取到speech参数后就可以调用百度API接口进行识别了
        this.identify()

      })

    },
    //具体的调用api进行识别的函数
    identify() {
      //post数据
      let postdata={
                "format": "pcm",
                "rate": 16000,
                "dev_pid": 1537,
                "channel": 1,
                "token": this.token,
                "cuid": "my_own_app_shop",
                "len": this.len,
                "speech": this.speech

      }
     //请求接口
      this.$axios.post( "/files/server_api",postdata).then(response => {
        //用局部数据city变量保存获取到的城市
        let city=response.data.result[0]
        //去掉city后的逗号
        this.value=city.substring(0,city.length-1)
        //调用方法获取并朗读天气
        this.onSearch()
      })
    },


    beforeDestroy() {
      if (recorder !== null) {
        recorder.stop()
        recorder = null
      }
    },
  }
}
</script>
