import classes from './Header.module.css';

export const Header = () => {
	const handleMove = (height) => {
		window.scrollBy(0, height);
	}
  return (
		<>
			<div className={classes.background}>
				<div className={classes.block}>
					<div className={classes.content}>
						<img className={classes.logo} src='./logotype.png' alt='logo'></img>
						<div className={classes.buttons}>
							<a href="https://t.me/yellowsquarelogo" target="_blank" className={classes.movers}>Телеграм</a>
							<button onClick={() => handleMove(2100)} className={classes.movers}>Портфолио</button>
							<button onClick={() => handleMove(2900)} className={classes.movers}>Заполнить анкету</button>
							<button onClick={() => handleMove(5000)} className={classes.movers}>Контакты</button>
						</div>
					</div>
					<h1 className={classes.headerName}>Создаем логотипы <br /> которые привлекают</h1>
					<div className={classes.gradientPlace}></div>
				</div>
			</div>
		</>
  );
}

export default Header;
