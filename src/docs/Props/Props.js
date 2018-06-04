import React from 'react';
import PropTypes from 'prop-types';

const Props = ({ classes, props }) => {
    return (
        <table className={classes.props}>
            <thead>
                <tr>
                    <th className={classes.th}>Name</th>
                    <th className={classes.th}>Description</th>
                    <th className={classes.th}>Type</th>
                    <th className={classes.th}>Default</th>
                    <th className={classes.th}>Required</th>
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(props).map(key => {
                        if (key != 'classes' && key != 'children') {
                            return (
                                <tr key={key} className={classes.tr}>
                                    <td className={classes.td}>{key}</td>
                                    <td className={classes.td}>{props[key].description}</td>
                                    <td className={classes.td}>{props[key].type.name}</td>
                                    <td className={classes.td}>{props[key].defaultValue && props[key].defaultValue.value}</td>
                                    <td className={classes.td}>{props[key].required && "X"}</td>
                                </tr>
                            )
                        } else { return null; }
                    })
                }
            </tbody>
        </table>
    )
}

Props.propTypes = {
    classes: PropTypes.object,
    props: PropTypes.object.isRequired
};

export default Props;