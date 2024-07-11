
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCountAction } from '/src/redux/actions/breefAction';
import classes from './LogosCount.module.css';
import { useEffect } from 'react';

export const LogosCount = ({ onChange }) => {
	const dispatch = useDispatch();
	const count = useSelector(store => store?.logoBreef?.count);
	
	const handleSubmit = (e) => {
		dispatch(setCountAction(e));
	}

	useEffect(() => {
		if (count) {
			onChange(true);
		} else {
			onChange(false);
		}
	}, [count]);

  return (
	<div className={classes.container}>
		<div className={classes.counts}>
			<button onClick={() => handleSubmit(1)} className={count === 1 ? classes.blockSelected : classes.block}>
				<div>
					<div className={classes.count}>
						<p className={classes.p}>1</p>
					</div>
					<p className={classes.sale}>10 000₽</p>
					<p className={classes.p2}>5 000₽</p>
					</div>
			</button>

			<button onClick={() => handleSubmit(3)} className={count === 3 ? classes.blockSelected : classes.block}>
			<div>
				<div className={classes.count}>
					<p className={classes.p}>3</p>
				</div>
				<p className={classes.sale}>20 000₽</p>
				<p className={classes.p2}>10 000₽</p>
				</div>
			</button>

			<button onClick={() => handleSubmit(5)} className={count === 5 ? classes.blockSelected : classes.block}>
				<div>
					<div className={classes.count}>
						<p className={classes.p}>5</p>
					</div>
					<p className={classes.sale}>30 000₽</p>
					<p className={classes.p2}>15 000₽</p>
				</div>
			</button>
		</div>
	</div>
  );
}

export default LogosCount;
