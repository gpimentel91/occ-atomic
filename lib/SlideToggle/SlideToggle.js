import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

class SlideToggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
        this.toggle = this.toggle.bind(this);
    }

    componentWillReceiveProps(props) {
        const { value } = props;
        if (this.state.value != value)
            this.setState({ value });
    }

    toggle() {
        const { onChange, id, disabled } = this.props;
        if (!disabled) {
            let value = !this.state.value;
            this.setState({ value });
            if (onChange) onChange(value, id);
        }
    }

    render() {
        const { value } = this.state;
        const { classes, label, disabled, id, className, style } = this.props;
        return (
            <div id={id} className={`${classes.cont}${disabled ? ` ${classes.disabled}` : ''}${className ? ` ${className}` : ''}`} style={style}>
                <div className={`${classes.switch}${value ? ` ${classes.checked}` : ''}`} onClick={this.toggle}>
                    <span className={classes.slider}>
                        <span className={classes.icon} />
                    </span>
                </div>
                {label && <Text tag="label" className={classes.label}>{label}</Text>}
            </div>
        );
    }
}

SlideToggle.propTypes = {
    classes: PropTypes.object,
    /** Default value for the slide. */
    value: PropTypes.bool,
    /** The function to call when the value of the slide changes. */
    onChange: PropTypes.func,
    /** Disable the slide. */
    disabled: PropTypes.bool,
    /** Text to display next to the slide.  */
    label: PropTypes.node,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default SlideToggle;