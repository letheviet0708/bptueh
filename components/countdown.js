import React from 'react';
import moment from 'moment';
import countdown from 'countdown';

class Countdown extends React.Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount() {
        this.interval = setInterval(() => {

            const endtime = "October 26 2021"
            
            const total = Date.parse(endtime) - Date.parse(new Date());
            const seconds = Math.floor( (total/1000) % 60 );
            const minutes = Math.floor( (total/1000/60) % 60 );
            const hours = Math.floor( (total/(1000*60*60)) % 24 );
            const days = Math.floor( total/(1000*60*60*24) )
            this.setState({ days, hours, minutes});
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { days, hours, minutes } = this.state;
        return(        
            <div id="countdownS">    
            <h1>CÒN</h1>
                <div id="countDown" > 
                    <div id="cngay">
                        <div className="timbox">
                            <span>{days}</span>
                        </div>
                        <h3>NGÀY</h3>
                        
                    </div>
                    <div id="cgio">
                        <div className="timbox">
                            <span>{hours}</span>
                        </div>
                        <h3>GIỜ</h3>
                    </div>
                    <div id="cphut">
                        <div className="timbox">
                            <span>{minutes}</span>
                        </div>
                        <h3>PHÚT</h3>
                    </div>
                </div>
            <h1>HẾT HẠN NỘP CV</h1>
            </div>
        )
    }
}

export default Countdown;