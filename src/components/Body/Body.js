import classes from './Body.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from '../Form';

export const Body = () => {
  return (
    <div className={classes.container}>
			<div className={classes.container2}>
				<div className={classes.content}>
					<div className={classes.headerText}>
						<h3 className={classes.h}>Логотип - лицо бренда</h3>
						<p className={classes.p}>Именно с логотипом компании происходит первая встреча потенциального покупателя </p>
					</div>

					<div className={classes.img}>
						<img className={classes.image} src='./logobanner.png' alt='logobanner' />
					</div>

					<h3 className={classes.h}>Наши логотипы</h3>

					<div className={classes.imglogos}>
						<img className={classes.imageLogos} src='./logotypes.png' alt='logotypes' />
					</div>

					<div className={classes.behance}>
						<a className={classes.abehance} href="https://www.behance.net/gallery/118478367/Logos">на Behance</a>
					</div>

					<Form />
				</div>
			</div>
    </div>
  );
}

export default Body;
