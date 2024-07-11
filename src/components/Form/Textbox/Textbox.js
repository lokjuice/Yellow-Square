import axios from 'axios';
import { useSelector } from 'react-redux';
import { createMessage } from '/src/utils/createMessage';
import classes from './Textbox.module.css';
import { v4 as uuidv4 } from 'uuid';
import { YooKassa } from './YooKassa';

export const Textbox = () => {
  return (
		<div className={classes.container}>
			<div className={classes.textBlock}>
				<p className={classes.text}>Вы получите визуализацию концепта и логотипы в необходимых форматах (.ai, .svg, .png)</p>
				<p className={classes.text}>Вы имеете возможность вносить правки любой сложности, но ограниченное количество раз, и только те, что не будут мешать общей концепции логотипа</p>
				<p className={classes.text}>Как только мы закончим работу, вышлем вам письмо с логотипом на почту, или любым другим, удобным для вас, методом(от 3 до 5 рабочих дней)</p>
			</div>
			<YooKassa />
			{/* <button className={classes.block} onClick={() => handleBuy()}>Оплатить</button> */}
		</div>
  );
}

export default Textbox;
