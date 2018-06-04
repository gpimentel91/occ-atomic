import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Waypoint from 'react-waypoint';

import Container from '../Container';
import Hidden from '../Hidden';
import Visible from '../Visible';
import SightLogo from '../SightLogo';

class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            shadow: true
        };
        this.removeShadow = this.removeShadow.bind(this);
        this.addShadow = this.addShadow.bind(this);
    }
    
    removeShadow() {
        this.setState({
            shadow: false
        });
    }
    
    addShadow() {
        this.setState({
            shadow: true
        });
    }
    
    render() {
        const { shadow } = this.state;
        const { classes, logo, nav, menu, title, active, messagesIcon } = this.props;
        return (
            <div id="mainNav" className={classes.navbar}>
                <div className={`${classes.master} ${shadow ? classes.shadow : ''}`}>
                    <div className={classes.content}>
                        <Hidden xs>
                            {logo}
                        </Hidden>
                        <Visible xs>
                            <div className={classes.title}>{title}</div>
                        </Visible>
                        <div className={classes.user}>
                            {(messagesIcon.hasOwnProperty('active') && messagesIcon.active) && (
                                <a id={messagesIcon.id} href={messagesIcon.href} className={classes.messages}>
                                    <i className={classes.bubble} />
                                </a>
                                )}
                            {menu}
                        </div>
                        <Hidden xs>
                            {nav}
                        </Hidden>
                    </div>
                </div>
                <Visible xs>
                    <div className={classes.separate}>
                        <Waypoint topOffset={60} onEnter={this.removeShadow} onLeave={this.addShadow}>
                            <div className={!shadow ? classes.shadow : ''}>
                                {nav}
                            </div>
                        </Waypoint>
                    </div>
                </Visible>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object,
    logo: PropTypes.node,
    title: PropTypes.string,
    active: PropTypes.string,
    nav: PropTypes.node,
    menu: PropTypes.node,
    messagesIcon: PropTypes.object
};

Header.defaultProps = {
    messagesIcon: {}
};

export default Header;