import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

class Radio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: props.selected
        };
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(props) {
        const { selected } = props;
        if (selected && this.state.selected != selected)
            this.setState({ selected });
    }

    onChange(option) {
        const { onChange } = this.props;
        if (!option.disabled) {
            this.setState({ selected: option.value });
            if (onChange) onChange(option.value);
        }
    }

    render() {
        const { selected } = this.state;
        const { classes, options, id, className, style } = this.props;
        return (
            <div id={id}>
                {options.map(option => (
                    <div
                        key={option.value}
                        className={`${classes.cont}${selected == option.value ? ` ${classes.active}` : ''}${option.disabled ? ` ${classes.disabled}` : ''}${className ? ` ${className}` : ''}`}
                        onClick={() => { this.onChange(option); }}
                        style={style}>
                        <div className={classes.radio} />
                        {option.label && <Text tag="label" className={classes.label}>{option.label}</Text>}
                        {option.right && <Text tag="label" mid className={classes.right}>{option.right}</Text>}
                    </div>
                ))}
            </div>
        );
    }
}

Radio.defaultProps = {
    options: []
};

Radio.propTypes = {
    classes: PropTypes.object,
    /** Default value for the radio. */
    selected: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    /** The function to call when the value of the radio group changes. */
    onChange: PropTypes.func,
    /** Array of options to switch the value of the radio. The options must have a value and a label. It can also have a 'right' label. The value must be unique. */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            label: PropTypes.string,
            right: PropTypes.string
        })
    ),
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Radio;