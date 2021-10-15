import { Component } from "react";
import Image from "next/image"


class Members extends Component {

    constructor (props){
        super(props);
        this.state = {
            imageToShow:0,
            lightboxDisplay: false,
            imglist:[
                "/temsimg/large/chutich.png",
                "/temsimg/large/cre.png",
                "/temsimg/large/TT.png",
                "/temsimg/large/KT.png",
                "/temsimg/large/SCENO.png",
                "/temsimg/large/VIDEO.png",
                "/temsimg/large/HR.png",
            ]
        }
    }

    componentDidMount() {
        this.setState({
            lightboxDisplay: false
        })
    }

    setImageToShow = (image) => {
        this.setState({imageToShow: image})
    }

    setLightBoxDisplay = (flag) => {
        this.setState({lightboxDisplay : flag});
    }
    showImage = (image) => {
        //console.log("hihi")
        this.setImageToShow(image);
        this.setLightBoxDisplay(true);
    }

    hideLightBox = () => {
        this.setLightBoxDisplay(false);
    }

    showNext = (e) => {
        e.stopPropagation();
        if (this.state.imageToShow >= this.state.imglist.length - 1) {
            this.setLightBoxDisplay(false);
        } else {
            let nextImage = this.state.imageToShow + 1;
            this.setImageToShow(nextImage);
        }
    }

  //show previous image in lightbox
    showPrev = (e) => {
        e.stopPropagation();
        if (this.state.imageToShow <= 0) {
            this.setLightBoxDisplay(false);
        } else {
            let nextImage = this.state.imageToShow - 1;
            this.setImageToShow(nextImage);
        }
    }
  
    render(){
        return (
            <div>
                <div className="row photos" data-bss-baguettebox="">

                    {this.props.images &&
                        this.props.images.map( (data, index) => {
                            return(
                                <div className="col-sm-6 col-md-4 item" key = {index} style={{paddingTop:"20px"}}>     
                                <div onClick={() => this.showImage(data)} 
                                    dangerouslySetInnerHTML={{ __html: `<img class="cardI" src="${data.img}" />` }} >               
                                    {/*<Image height = "352" width = "600"
                                        className="img-fluid img-item" 
                                        src={data.img} 
                                        onClick={() => this.showImage(data)}/>    
                                        */}               
                                </div>
                                </div>
                            )
                        }
                    )}
                </div>
                <section id="members">
                    <div className="section">
                        <h1>MEMBERS</h1>
                        <div dangerouslySetInnerHTML={{ __html: `<img id= "memberimg"src="/temsimg/large/chutich.png" />`}}></div>
                        <div id="teamsimg">
                            <div onClick={() => this.showImage(1)} dangerouslySetInnerHTML={{ __html: `<img class= "teamimg"src="/temsimg/CRE.png" />`}}></div>
                            <div onClick={() => this.showImage(2)} dangerouslySetInnerHTML={{ __html: `<img class= "teamimg"src="/temsimg/TT.png" />`}}></div>
                            <div onClick={() => this.showImage(3)} dangerouslySetInnerHTML={{ __html: `<img class= "teamimg"src="/temsimg/KT.png" />`}}></div>
                            <div onClick={() => this.showImage(4)} dangerouslySetInnerHTML={{ __html: `<img class= "teamimg"src="/temsimg/SCENO.png" />`}}></div>
                            <div onClick={() => this.showImage(5)} dangerouslySetInnerHTML={{ __html: `<img class= "teamimg"src="/temsimg/VIDEO.png" />`}}></div>
                            <div onClick={() => this.showImage(6)} dangerouslySetInnerHTML={{ __html: `<img class= "teamimg"src="/temsimg/HR.png" />`}}></div>
                        </div>
                    </div>
                </section>
                {
                    this.state.lightboxDisplay ? 
                    <div id="lightbox" onClick={this.hideLightBox} >
                        <div id="view" className="center-screen">
                            <div className="cardCon">
                                <div dangerouslySetInnerHTML={{ __html: 
                                    `<img class="lightbox-img" src="${this.state.imglist[this.state.imageToShow]}"/>
                                `}}></div>
                            </div>
                            
                        </div>
                        <div className="imgnav">
                            <button className="btnnav" onClick={this.showPrev}>⭠</button>
                            <button className="btnnav" onClick={this.showNext}>⭢</button>
                        </div>
                    </div>
                    : ""
                }  
            </div>
        );
    }
}

export default Members;