import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Input from '../Input';
import Droplist from '../Droplist';
import Label from '../Label';

class Autocomplete extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: props.inputProps.valueProp ? props.inputProps.valueProp : '',
            focus: false,
            labels: []
        };
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onClick = this.onClick.bind(this);
        this.addLabel = this.addLabel.bind(this);
        this.removeLabel = this.removeLabel.bind(this);
        this.removeSelected = this.removeSelected.bind(this);
        this.labels = [];
    }
    
    onChange(value) {
        const { onChange } = this.props;
        this.setState({
            value, focus: true
        });
        if (onChange) onChange(value);
    }
    
    onFocus() {
        const { onFocus } = this.props;
        this.setState({
            focus: true
        });
        if (onFocus) onFocus();
    }
    
    onBlur() {
        const { onBlur } = this.props;
        setTimeout(() => {
            this.setState({
                focus: false
            });
        }, 200);
        if (onBlur) onBlur();
    }
    
    onClick(item) {
        const { onClick, onChange, droplistProps, stackLabels } = this.props;
        const child = this.child;
        if (stackLabels) {
            this.child.onClear();
            this.setState({
                value: ''
            });
            this.child.child.focus();
            this.addLabel(item);
        } else {
            this.setState({
                value: item[droplistProps.itemTextKey], focus: false
            });
            if (onChange) onChange(item[droplistProps.itemTextKey]);
        }
        if (onClick) onClick(stackLabels ? this.labels : item);
    }
    
    addLabel(item) {
        this.labels.push(item);
        this.setState({labels: this.labels});
    }

    removeLabel(item) {
        const { droplistProps, onClick } = this.props;
        let pos = this.labels.map(label => { return label[droplistProps.itemIdKey];}).indexOf(item[droplistProps.itemIdKey]);
        this.labels.splice(pos, 1);
        this.setState({labels: this.labels});
        if (onClick) onClick(this.labels);
    }
    
    removeSelected() {
        const { labels } = this.state;
        const { droplistProps } = this.props;
        let cleanItems = [];
        if (droplistProps.groups) {
            droplistProps.items.map(group => {
                let cleanGroup = group[droplistProps.groupItemsKey].filter(item => {
                    const inLabels = labels.filter(label => {
                        return label[droplistProps.itemIdKey] == item[droplistProps.itemIdKey];
                    });
                    return !inLabels.length;
                });
                const modifiedGroup = Object.assign({}, group);
                modifiedGroup[droplistProps.groupItemsKey] = cleanGroup;
                if (cleanGroup.length) cleanItems.push(modifiedGroup);
            });
        } else {
            cleanItems = droplistProps.items.filter(item => {
                const inLabels = labels.filter(label => {
                    return label[droplistProps.itemIdKey] == item[droplistProps.itemIdKey];
                });
                return !inLabels.length;
            });
        }
        return cleanItems;
    }
    
    render() {
        const { value, focus, labels } = this.state;
        const { classes, id, inputProps, droplistProps, onClick, stackLabels, limit, limitPlaceholder, style } = this.props;
        const cleanItems = this.removeSelected();
        return (
            <div className={classes.autoComplete} id={id} style={style}>
                <Input
                    onRef={ref => { this.child = ref; }}
                    id={inputProps.id}
                    type={inputProps.type}
                    name={inputProps.name}
                    label={inputProps.label}
                    placeholder={((stackLabels && limit) && this.labels.length >= limit) ? limitPlaceholder : inputProps.placeholder}
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    selectOnFocus={inputProps.selectOnFocus}
                    clear={inputProps.clear}
                    disabled={(stackLabels && limit) && this.labels.length >= limit}
                    valueProp={value}
                    iconName={inputProps.iconName}
                    className={`${classes.input}${inputProps.className ? ` ${inputProps.className}` : ''}`} />
                {(value && focus) && (
                    <Droplist
                        items={cleanItems}
                        groups={droplistProps.groups}
                        groupNameKey={droplistProps.groupNameKey}
                        groupIdKey={droplistProps.groupIdKey}
                        groupItemsKey={droplistProps.groupItemsKey}
                        itemTextKey={droplistProps.itemTextKey}
                        itemTextRightKey={droplistProps.itemTextRightKey}
                        itemIdKey={droplistProps.itemIdKey}
                        term={value}
                        onClick={this.onClick}
                        className={`${classes.droplist}${droplistProps.className ? ` ${droplistProps.className}` : ''}`} />
                )}
                {(stackLabels && labels.length) ? (
                    <div className={classes.labels}>
                        {
                            labels.map(label => (
                                <Label key={label[droplistProps.itemIdKey]} onClose={() => {this.removeLabel(label);}}>{label[droplistProps.itemTextKey]}</Label>
                            ))
                        }
                    </div>
                ) : ''}
            </div>
        );
    }
}

Autocomplete.propTypes = {
    classes: PropTypes.object,
    id: PropTypes.string,
    inputProps: PropTypes.object.isRequired,
    droplistProps: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    stackLabels: PropTypes.bool,
    limit: PropTypes.number,
    limitPlaceholder: PropTypes.string,
    style: PropTypes.object
};

Autocomplete.defaultProps = {
    inputProps: {},
    droplistProps: {}
};

export default Autocomplete;