
import { useDispatch } from 'react-redux';
import { setColorAction } from '/src/redux/actions/breefAction';
import classes from './ColorBlock.module.css';

export const ColorBlock = ({color, isSelected}) => {
	const dispatch = useDispatch();

	const handleColor = (text) => {
		if (isSelected) {
			dispatch(setColorAction({ [text]: false }));
		} else {
			dispatch(setColorAction({ [text]: true }));
		}
	}

  return (
			<div onClick={() => handleColor(color)} className={isSelected ? classes.blockSelected : classes.block}>
				<div className={classes[`${color}1`]}></div>
				<div className={classes[`${color}2`]}></div>
				<div className={classes[`${color}3`]}></div>
			</div>
  );
}

export default ColorBlock;
