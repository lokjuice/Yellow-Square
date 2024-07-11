import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './LogoInfo.module.css';
import { setFilesAction, setLogoInfoAction } from '/src/redux/actions/breefAction';

export const LogoInfo = ({ onChange }) => {
	const dispatch = useDispatch();
	const fileInfo = useSelector(store => store?.logoBreef?.files);
	const logoInfo = useSelector(store => store?.logoBreef?.logoInfo);


	const filesArray = new Array(...fileInfo);
	const files = filesArray.map((item) => item.name);

	
	useEffect(() => {
		if (logoInfo.name !== '' && logoInfo.description !== '') {
			onChange(true);
		} else {
			onChange(false);
		}
	}, [logoInfo]);

	useEffect(() => {
		const logoName = document?.getElementById('logoName');
		const description = document?.getElementById('description');
		const website = document?.getElementById('website');
		const helpInfo = document?.getElementById('helpInfo');
		const inputInfo = document?.getElementById('fileuploader');

		inputInfo.oninput = function() {
			dispatch(setFilesAction(inputInfo.files));
		};
		logoName.oninput = function() {
			dispatch(setLogoInfoAction({
				name: document.getElementById('logoName')?.value,
			}));
		};
		description.oninput = function() {
			dispatch(setLogoInfoAction({
				description: document.getElementById('description')?.value,
			}));
		};
		website.oninput = function() {
			dispatch(setLogoInfoAction({
				website: document.getElementById('website')?.value,
			}));
		};
		helpInfo.oninput = function() {
			dispatch(setLogoInfoAction({
				helpInfo: document.getElementById('helpInfo')?.value,
			}));
		};
	}, [dispatch]);

	return (
		<div className={classes.container}>
			<input className={classes.input} type="text" id="logoName" name="name" placeholder="Название компании" defaultValue={logoInfo.name} /> <br/>

			<input className={classes.input} type="text" id="description" name="description" placeholder="Чем вы занимаетесь?" defaultValue={logoInfo.description} /> <br/>

			<input className={classes.input} type="text" id="website" name="website" placeholder="Сайт компании" defaultValue={logoInfo.website} /> <br/>

			<textarea className={classes.inputTextArea} type="text" id="helpInfo" name="helpInfo" placeholder="Дополнительная информация" defaultValue={logoInfo.helpInfo} /> <br/>

			<form encType="multipart/form-data" method="post" name="fileinfo">
				<label className={classes.labelFor} htmlFor="fileuploader">
					Прикрепите фотографии логотипов, которые вам нравятся
					<div className={classes.addPhotos}>+</div>
					<input type="file" id="fileuploader" multiple accept="image/*,image/jpeg" ></input>
					{fileInfo.length !== 0 && <div>{files.join(', ')}</div>}
				</label>
			</form>
	</div>
  );
}

export default LogoInfo;
