import injectSheet from 'react-jss';
import Icon from './Icon';
import styles from './styles';

const StyledIcon = injectSheet(styles)(Icon);
// eslint-disable-next-line
const { classes, ...propTypes } = Icon.propTypes;
StyledIcon.propTypes = {
	...propTypes,
	...StyledIcon.propTypes
};

export default StyledIcon;
