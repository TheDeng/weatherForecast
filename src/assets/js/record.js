function Recorder (stream) {
    var audioContext = new AudioContext()
    var sourceNode = audioContext.createMediaStreamSource(stream)
    var scriptNode = audioContext.createScriptProcessor(4096, 1, 1)
    var audioData = {
      size: 0,
      buffer: [],
      input: function (data) {
        this.buffer.push(new Float32Array((data)))
        this.size += data.length
      },
      getData: function () {
        var sampleBits = 16
        var inputSampleRate = 44100
        var outputSampleRate = 16000
        var bytes = this.decompress(this.buffer, this.size, inputSampleRate, outputSampleRate)
        var dataLen = bytes.length * (sampleBits / 8)
        var buffer = new ArrayBuffer(dataLen) // For PCM , 浏览器无法播放pcm格式音频
        var data = new DataView(buffer)
        var offset = 0
        data = this.reshapeData(sampleBits, offset, bytes, data)
        return new Blob([data], { type: 'audio/pcm' })
      },
      // 将二维数组转成一维数组
      decompress: function (buffer, size, inputSampleRate, outputSampleRate) {
        var data = new Float32Array(size)
        var offset = 0
        for (var i = 0; i < buffer.length; i++) {
          data.set(buffer[i], offset)
          offset += buffer[i].length
        }
        // 降采样
        var interval = parseInt(inputSampleRate / outputSampleRate)
        var length = data.length / interval
        var result = new Float32Array(length)
        var index = 0; var j = 0
        while (index < length) {
          result[index] = data[j]
          j += interval
          index++
        }
        return result
      },
      reshapeData: function (sampleBits, offset, bytes, data) {
        var s
        for (var i = 0; i < bytes.length; i++, offset += (sampleBits / 8)) {
          s = Math.max(-1, Math.min(1, bytes[i]))
          data.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true)
        }
        return data
      }
    }
    // 监听录音的过程
    var buffers = []
    scriptNode.onaudioprocess = event => {
      audioData.input(event.inputBuffer.getChannelData(0))
     }
    this.start = function () {
      sourceNode.connect(scriptNode)
      scriptNode.connect(audioContext.destination)
    }
    this.stop = function () {
      sourceNode.disconnect()
      scriptNode.disconnect()  }
    this.getBlob = function () {
      return audioData.getData()
     }
     this.getBase64=function(file) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        let fileResult = "";
        reader.readAsDataURL(file);
　　　　　//开始转
        reader.onload = function() {
          fileResult = reader.result;
        };
　　　　　//转 失败
        reader.onerror = function(error) {
          reject(error);
        };
　　　　　//转 结束  咱就 resolve 出去
        reader.onloadend = function() {
          resolve(fileResult);
        };
      });
    }
   }

   //获取录音权限
  Recorder.get = function (callback) {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) { // 务必分开写then
      var rec = new Recorder(stream)
      callback(rec)
    })
  }
  export { Recorder }