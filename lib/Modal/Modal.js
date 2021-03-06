import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Icon from '../Icon';
import Text from '../Text';
import Flexbox from '../Flexbox';
import Button from '../Button';
import colors from '../subatomic/colors';

/**
* The Modal component is rendered in any given container, avoiding z-index an position conflicts. Your application must have the logic to show or hide the Modal component.
*/
class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown);
    }

    onKeyDown({ which }) {
        const { onClose } = this.props;
        if(onClose && which == 27) onClose();
    }

    avoidClose(e) {
        e.stopPropagation();
    }

    render() {
        const { classes, children, onClose, title, mainBtn, show, secBtn, size, onTransitionEnd } = this.props;
        return (
            <div className={`${classes.overlay} ${show ? classes.overlayShow : classes.overlayHide}${!onClose ? ` ${classes.noClose}` : ''}`} onClick={onClose} onTransitionEnd={onTransitionEnd}>
                <div className={classes.cardWrapper}>
                    <div className={classes.cardBlock} onClick={this.avoidClose}>
                        <Card shadow={5} className={`${classes.card}${size ? ` ${classes[size]}` : ''}${show ? ` ${classes.cardShow}` : ` ${classes.cardHide}`}`}>
                            <Flexbox display="flex" justifyContent="end" alignItems="start" className={classes.top}>
                                {title && (
                                    <Flexbox flex="1">
                                        <Text heading className={classes.title}>{title}</Text>
                                    </Flexbox>
                                )}
                                {onClose && (
                                    <div className={classes.closeIcon}>
                                        <Icon iconName="close" width={24} height={24} colors={[colors.grey900]} onClick={onClose} />
                                    </div>
                                )}
                            </Flexbox>
                            <div className={classes.content}>
                                {children}
                            </div>
                            {mainBtn && (
                                <div className={classes.bottom}>
                                    {secBtn && (
                                        <Button
                                            theme="ghostGrey"
                                            className={classes.secBtn}
                                            onClick={secBtn.onClick}
                                            href={secBtn.href}
                                            target={secBtn.target}
                                            loading={secBtn.loading}
                                            disabled={secBtn.disabled}
                                            id={secBtn.id}
                                        >
                                            {secBtn.text}
                                        </Button>)
                                    }
                                    <Button
                                        className={classes.mainBtn}
                                        onClick={mainBtn.onClick}
                                        href={mainBtn.href}
                                        target={mainBtn.target}
                                        loading={mainBtn.loading}
                                        disabled={mainBtn.disabled}
                                        id={mainBtn.id}
                                    >
                                        {mainBtn.text}
                                    </Button>
                                </div>
                            )}
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.defaultProps = {
    size: 'md'
};

Modal.propTypes = {
    /** prop */
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    /** Boolean value to show or hide the Modal component. */
    show: PropTypes.bool,
    /** DOM Element to append the Modal component into it. If you don't specify a container the Modal will be rendered in the exact same DOM position you used it. This can in some cases generate problems with z-index or position. */
    container: PropTypes.object,
    /** Function to call when the overlay or close icon are clicked or when you press the Esc key. */
    onClose: PropTypes.func,
    /** Size of the Modal. Select any of these: sm, md, lg. */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    /** Title to display at the top of the Modal. */
    title: PropTypes.string,
    /** Object with props for the main button. It will render a Button with the main theme. */
    mainBtn: PropTypes.shape({
        text: PropTypes.string,
        onClick: PropTypes.func,
        href: PropTypes.string,
        target: PropTypes.string,
        disabled: PropTypes.bool,
        loading: PropTypes.bool
    }),
    /** Object with props for the secondary button. It will render a Button with the ghostGrey theme. (NOTE: If you don't send a mainBtn object the secBtn will not work) */
    secBtn: PropTypes.shape({
        text: PropTypes.string,
        onClick: PropTypes.func,
        href: PropTypes.string,
        target: PropTypes.string,
        disabled: PropTypes.bool,
        loading: PropTypes.bool
    }),
    /** This function is used by an internal wrapper component to manage the hiding animation and unmounting properly. */
    onTransitionEnd: PropTypes.func
};

export default Modal;
