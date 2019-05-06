import React, {Component} from 'react';
import Video from './Video';

const videoList = [
    {
        url: "7qH4qyi1-Ys",
        title: 'hurtsthemost',
        id: "1",
        start: 10,
        end: 30,
        mute: 1,
        delay: 12
    },
    {
        url: "2SzeQqwhB1A",
        title: 'incaseyoudidntknow',
        id: "2",
        start: 5,
        end: 10,
        mute: 0,
        delay: 7
    },
    {
        url: "eM213aMKTHg",
        title: 'needyounow',
        id: "3",
        start: 100,
        end: 110,
        mute: 0,
        delay: 12
    },
    {
        url: "-2U0Ivkn2Ds",
        title: 'saysomething',
        id: "4",
        start: 0,
        end: 0,
        mute: 0,
        delay: 5
    },
    {
        url: "udnGW3E1vxY",
        title: 'whatsmineisyours',
        id: "5",
        start: 0,
        end: 0,
        mute: 0,
        delay: 10
    },
    {
        url: "0yW7w8F2TVA",
        title: 'sayyouwontletgo',
        id: "6",
        start: 0,
        end: 0,
        mute: 0,
        delay: 5
    },
    {
        url: "un-rfEyPBO4",
        title: 'alliwantisyou',
        id: "7",
        start: 0,
        end: 0,
        mute: 0,
        delay: 1
    },
    {
        url: "mdsfxsvaDTY",
        title: "howtoloveawoman",
        id: "8",
        start: 0,
        end: 0,
        mute: 0,
        delay: 3
    },
    {
        url: "L1zyds1dOzI",
        title: '',
        id: "9",
        start: 0,
        end: 0,
        mute: 0,
        delay: 1
    },
    {
        url: "MXTSYoHb4C0",
        title: '',
        id: "10",
        start: 0,
        end: 0,
        mute: 0,
        delay: 4
    },
    {
        url: "L1zyds1dOzI",
        title: '',
        id: "11",
        start: 0,
        end: 0,
        mute: 0,
        delay: 1
    },
    {
        url: "MXTSYoHb4C0",
        title: '',
        id: "12",
        start: 0,
        end: 0,
        mute: 0,
        delay: 10
    }
]
export default class VideoProgram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoIndex: 0,
            currentVideo: {}, 
            running: false,
            ended: true
        };
    }
  
    componentDidMount() {
        if(this.checkVideo()){
            this.start();
        };
    }

    hasVideoData(){
        if(!videoList.length) throw "no data found";
        try{
            if(videoList.length) return true
        }
        catch (e){
            console.log(e);
        }
    }

    videoIndexIsGood(){
        if(this.state.videoIndex > -1 && this.state.videoIndex < videoList.length){
            return true;
        } else return false
    }

    checkVideo(){
        if(this.hasVideoData() &&  this.videoIndexIsGood()){
            return true
        }
    }

    async start(){
        debugger
        console.log('start')
        await this.setState({
            videoIndex: 0,
            currentVideo: videoList[0],
            ended: false,
            running: true
        });
        setTimeout(() => {
            this.nextVideo();
        }, this.state.currentVideo.delay * 1000);
    }

    play(){
        this.setState({
            running: true
        });
        this.nextVideo();
    }

    playPause(){
        this.setState({
            running: !this.state.running
        })
    }

    stop(){
        console.log('stop')
        this.setState({
            ended: true
        })
    }

    nextVideo(reset) {
        let newIndex = ++this.state.videoIndex

        // if last video, repeat
        if(this.state.videoIndex === videoList.length){
                this.start();

        // go to next video
        } else {
            this.setState({
                videoIndex: newIndex,
                currentVideo: videoList[newIndex]
              });
            setTimeout(()=>{
                  this.nextVideo();
            }, this.state.currentVideo.delay * 1000)
        }
    
    }
  
    render() {
        console.log(this.state, 'state')
      return (
        < Video video={this.state.currentVideo}/>
      );
    }
  }