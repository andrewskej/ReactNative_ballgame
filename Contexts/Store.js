import React, { Component, createContext } from 'react'; 

const { Provider, Consumer: StoreConsumer } = createContext();

class StoreProvider extends Component{
    state = {
        balls:['red','yellow','green'],
        time:10,
        point:0
    }

    action= {


    }

    countDownBegin = ()=>{
        if(counting){
            clearInterval(counting)
        }
       const counting = setInterval(()=> {
            this.countDown()
            if(this.state.time < 0){
                this.countDownReset()
            }   
        },1000)
    }

    countDown = () => {
        const {time} = this.state;
        this.setState({time:time-1},()=>{
        })
    }

    countDownReset = () => {
        this.setState({time:10})
    }

    pointUp = () => {
        this.setState({point: this.state.point+1})
    }

    pointDown = () => {
        this.setState({point: this.state.point-1})
    }


    componentDidMount(){
        this.countDownBegin();
    }


	render() {
		const { state, action } = this;
		const stateAndAction = { state, action };

		return <Provider value={stateAndAction}>{this.props.children}</Provider>;
	}

}

export { StoreProvider, StoreConsumer };
