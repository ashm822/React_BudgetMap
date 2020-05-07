import React from 'react';
import { Nav } from 'reactstrap'


class SlideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isClosed: true };
    }

    toggle = ()=>{
        this.setState(prev=>({ isClosed: !prev.isClosed }))
    }

    render() {
        const closed = this.state.isClosed ? {
            position: "absolute",
            left: "-200px",
            width: 200
        } : {width: 200}
        return (
            <>
              <button onClick={this.toggle}><i className="fa fa-bars ml-2"></i></button>
                <div className="sidenav rounded bg-grey z-depth-3" style={closed}> 
                    <a href="javascript:void(0)" className="closebtn" onClick={this.toggle}>×</a>
                    <a href="/">About</a>
                    <hr />
                    <a href="/">Services</a>
                    <a href="/">Clients</a>
                    <a href="/">Contact</a>
                </div>
            </>
        );
    }
}

export default SlideNav;