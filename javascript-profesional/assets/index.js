const video = document.querySelector("video")
      const button = document.querySelector("button")
      const buttonPause = document.querySelector("#pause")
      function MediaPlayer(config){
        this.media = config.el
      }
      MediaPlayer.prototype.play = function(){
        this.media.play();
      }
      MediaPlayer.prototype.pause = function(){
        this.media.pause();
      }
      const player = new MediaPlayer({el: video});
      button.onclick = () => player.play();
      buttonPause.onclick = () => player.pause();