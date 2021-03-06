import React from 'react';
import PropTypes from 'prop-types';

import Flexbox from '../Flexbox';

/** The SwitchGroup component will display a group of buttons that behave as radio buttons. */
class SwitchGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: props.selected ? props.selected : 0
        };
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        if (process.env.NODE_ENV === 'development') {
            console.warn('DEPRECATED: The SwitchGroup component will be removed soon. Use the Pill component instead.');
        }
    }

    onClick(button, index) {
        const { onClick } = this.props;
        this.setState({
            selected: index
        });
        if (onClick)
            onClick(button, index);
    }

    render() {
        const { selected } = this.state;
        const { classes, buttons } = this.props;
        return (
            <Flexbox display="flex">
                {buttons.map((button, index) => {
                    return (
                        <button
                            key={button.text}
                            className={`${classes.button}${selected == index ? ` ${classes.active}` : ''}`}
                            onClick={() => {this.onClick(button, index);}}>
                            {button.text}{button.sec ? <span className={classes.sec}>{button.sec}</span> : ''}
                        </button>
                    );
                })}
            </Flexbox>
        );
    }
}

SwitchGroup.propTypes = {
    classes: PropTypes.object,
    /** Array of objects with a text and a secondary text if necessary. */
    buttons: PropTypes.array,
    /** Function to call after clicking any button. */
    onClick: PropTypes.func,
    /** The default selected button. */
    selected: PropTypes.number
};

export default SwitchGroup;
