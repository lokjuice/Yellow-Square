import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContactsAction } from '/src/redux/actions/breefAction';
import classes from './Contacts.module.css';

export const Contacts = ({ onChange }) => {
	const dispatch = useDispatch();
	const contacts = useSelector(store => store?.logoBreef?.contacts);


	
	useEffect(() => {
		if (contacts.email !== '') {
			onChange(true);
		} else {
			onChange(false);
		}	
	}, [contacts]);

	useEffect(() => {
		const name = document?.getElementById('name');
		const phone = document?.getElementById('phone');
		const email = document?.getElementById('email');
		const telegram = document?.getElementById('telegram');

		name.oninput = function() {
			dispatch(setContactsAction({
				name: document.getElementById('name')?.value,
			}));
		};

		phone.oninput = function() {
			dispatch(setContactsAction({
				phone: document.getElementById('phone')?.value,
			}));
		};

		email.oninput = function() {
			dispatch(setContactsAction({
				email: document.getElementById('email')?.value,
			}));
		};

		telegram.oninput = function() {
			dispatch(setContactsAction({
				telegram: document.getElementById('telegram')?.value,
			}));
		};
	}, [dispatch]);

  return (
		<div className={classes.container}>
  			<input className={classes.input} type="text" id="name" name="name" placeholder="Имя" defaultValue={contacts.name} /> <br/>

  			<input className={classes.inputNumbers} type="text" id="phone" name="phone" placeholder="Телефон" defaultValue={contacts.phone} /> <br/>

  			<input className={classes.input} type="text" id="email" name="email" placeholder="Почта" defaultValue={contacts.email} /> <br/>

  			<input className={classes.input} type="text" id="telegram" name="telegram" placeholder="Телеграм" defaultValue={contacts.telegram} /> <br/>
		</div>
  );
}

export default Contacts;
