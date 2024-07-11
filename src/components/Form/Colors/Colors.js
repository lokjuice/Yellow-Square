import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ColorBlock } from './ColorBlock';
import classes from './Colors.module.css';

export const Colors = ({ onChange }) => {
	
	useEffect(() => {
		onChange(true);
	}, []);

	const colors = useSelector(store => store?.logoBreef?.colors);

  return (
	<div className={classes.container}>
		<div className={classes.column}>
			<ColorBlock color='red' isSelected={colors.red}></ColorBlock>
			<ColorBlock color='green' isSelected={colors.green}></ColorBlock>
			<ColorBlock color='purple' isSelected={colors.purple}></ColorBlock>
		</div>

		<div className={classes.column}>
			<ColorBlock color='orange' isSelected={colors.orange}></ColorBlock>
			<ColorBlock color='cian' isSelected={colors.cian}></ColorBlock>
			<ColorBlock color='black' isSelected={colors.black}></ColorBlock>
		</div>

		<div className={classes.column}>
			<ColorBlock color='yellow' isSelected={colors.yellow}></ColorBlock>
			<ColorBlock color='blue' isSelected={colors.blue}></ColorBlock>
			<div>
				<div className={classes.white}></div>
			</div>
		</div>
		
	</div>
  );
}

export default Colors;
