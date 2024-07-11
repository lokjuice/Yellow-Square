import classes from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Sliders } from './Sliders';
import { Colors } from './Colors';
import { Textbox } from './Textbox';
import { Contacts } from './Contacts';
import { nextIdAction, prevIdAction } from '/src/redux/actions/breefAction';
import { LogosCount } from './LogosCount';
import { LogoInfo } from './LogoInfo';
import { useState } from 'react';
import { useCallback } from 'react';

export const Form = () => {
	const dispatch = useDispatch();
	const componentId = useSelector(store => store?.logoBreef?.id);
	const [flag, setFlag] = useState(true);

	const buttonPrevDisabled = componentId === 1;
	const buttonNextDisabled = componentId === 6;

	const handleChange = useCallback((value) => {
		setFlag(value);
	})

	const formTitle = [
		'Двигайте ползунки в сторону, которая больше описывает ваш логотип',
		'Выберите цвета',
		'Укажите информацию о вашей компании',
		'Сколько вариантов логотипа вы хотите?',
		'Оставьте ваши контакты, чтобы мы смогли отправить вам логотип',
		'Осталось оплатить!',
	];

	const components = [
		<Sliders onChange={handleChange}/>,
		<Colors onChange={handleChange}/>,
		<LogoInfo onChange={handleChange} />,
		<LogosCount onChange={handleChange}/>,
		<Contacts onChange={handleChange}/>,
		<Textbox />,
	]

	const handleNextForm = () => {
		dispatch(nextIdAction());
	}

	const handlePrevForm = () => {
		dispatch(prevIdAction());
	}

  return (
		<div className={classes.container}>
			<div className={classes.containerAdaptive}>
				<h3 className={classes.h3}>Чтобы создать логотип</h3>
				<h4 className={classes.h4}>нужно понять что вы хотите</h4>

				<div className={classes.formContainer}>
					<div className={classes.dynamicModule}>
						<p className={classes.title}>{formTitle[componentId - 1]}</p>

						{components[componentId - 1]}
					</div>

				</div>


				<div className={classes.buttons}>
					{!buttonPrevDisabled && 
						<button
							className={classes.button}
							onClick={handlePrevForm}>
								
								<img src='./returnIconClickable.png' alt='iconReturn'></img></button>}
					{!buttonNextDisabled && 
						<button
							className={flag ? classes.button : classes.blocked}
							onClick={handleNextForm}
							disabled={!flag}
							>
								<img src='./acceptIcon.png' alt='iconAccept'></img></button>}
				</div>
			</div>
		</div>
  );
}

export default Form;
