import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPolzunkiAction } from '/src/redux/actions/breefAction';
import classes from './Sliders.module.css';

export const Sliders = ({ onChange }) => {
	const dispatch = useDispatch();
	const values = useSelector(store => store?.logoBreef?.polzunki);

	useEffect(() => {
		onChange(true);
	}, []);

	useEffect(() => {
		const first = document?.getElementById('first');
		const second = document?.getElementById('second');
		const third = document?.getElementById('third');
		const fourth = document?.getElementById('fourth');
		const fifth = document?.getElementById('fifth');

		first.oninput = function() {
			dispatch(setPolzunkiAction({
				first: document.getElementById('first')?.value,
			}));
		}
		second.oninput = function() {
			dispatch(setPolzunkiAction({
				second: document.getElementById('second')?.value,
			}));
		}
		third.oninput = function() {
			dispatch(setPolzunkiAction({
				third: document.getElementById('third')?.value,
			}));
		}
		fourth.oninput = function() {
			dispatch(setPolzunkiAction({
				fourth: document.getElementById('fourth')?.value,
			}));
		}
		fifth.oninput = function() {
			dispatch(setPolzunkiAction({
				fifth: document.getElementById('fifth')?.value,
			}));
		}
	}, [dispatch]);

  return (
		<div>
			<div className={classes.block}>
				<div className={classes.ptext}>
					<p>классика</p>
					<p>современность</p>
				</div>

				<div className={classes.slidecontainer}>
					<input type='range' min='1' max='15' defaultValue={values?.first} className={classes.slider} id='first' />
				</div>
			</div>

			<div className={classes.block}>
				<div className={classes.ptext}>
					<p>минимализм</p>
					<p>максимализм</p>
				</div>

				<div className={classes.slidecontainer}>
					<input type='range' min='1' max='15' defaultValue={values?.second} className={classes.slider} id='second' />
				</div>
			</div>

			<div className={classes.block}>
				<div className={classes.ptext}>
					<p>женственность</p>
					<p>мужественность</p>
				</div>

				<div className={classes.slidecontainer}>
					<input type='range' min='1' max='15' defaultValue={values?.third} className={classes.slider} id='third' />
				</div>
			</div>

			<div className={classes.block}>
				<div className={classes.ptext}>
					<p>плавность</p>
					<p>угловатость</p>
				</div>

				<div className={classes.slidecontainer}>
					<input type='range' min='1' max='15' defaultValue={values?.fourth} className={classes.slider} id='fourth' />
				</div>
			</div>

			<div className={classes.block}>
				<div className={classes.ptext}>
					<p>абстрактность</p>
					<p>буквальность</p>
				</div>

				<div className={classes.slidecontainer}>
					<input type='range' min='1' max='15' defaultValue={values?.fifth} className={classes.slider} id='fifth' />
				</div>
			</div>
		</div>
  );
}

export default Sliders;
