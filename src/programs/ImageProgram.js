import React, {Component} from 'react';
import Image from '../components/Image';
import Text from '../components/Text';

export default class ImageProgram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageIndex: -1,
            currentImage: {},
            running: false,
            ended: true
        };
    }

    componentDidMount() {
        if(this.hasImageData()){
            this.start();
        };
    }

    async hasImageData(){
        if(!this.props.images.length) console.log("no data found");
        try{
            if(this.props.images.length) {
                await this.setState({
                    imageIndex: 0
                })
            }
            return (this.imageIndexIsGood())
        }
        catch (e){
            console.log(e);
        }
    }

    imageIndexIsGood(){
        if(this.state.imageIndex > -1 && this.state.imageIndex < this.props.images.length){
            return true;
        } else return false
    }

    async start(){
        await this.setState({
            imageIndex: 0,
            currentImage: this.props.images[0],
            ended: false,
            running: true
        });
        setTimeout(() => {
            this.nextImage();
        }, this.state.currentImage.delay * 1000);
    }

    play(){
        this.setState({
            running: true
        });
        this.nextImage();
    }

    playPause(){
        this.setState({
            running: !this.state.running
        })
    }

    stop(){
        this.setState({
            ended: true
        })
    }

    nextImage(reset) {
        let newIndex = this.state.imageIndex + 1;

        // if last video, repeat
        if(this.state.imageIndex === this.props.images.length -1){
                this.start();

        // go to next video
        } else {
            this.setState({
                imageIndex: newIndex,
                currentImage: this.props.images[newIndex]
              });
            setTimeout(()=>{
                  this.nextImage();
            }, this.state.currentImage.delay * 1000)
        }

    }

    render() {
        return(
            <div>
                {this.state.currentImage && this.state.currentImage.text ? < Text text={this.state.currentImage}/> : null}
                {this.state.currentImage && this.state.currentImage.url ? < Image image={this.state.currentImage}/>: null}
            </div>
        )
    }
  }