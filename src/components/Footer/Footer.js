import classes from './Footer.module.css';

export const Footer = () => {
	return (
		<div className={classes.container}>
			<div className={classes.gradientPlace}></div>
			<p className={classes.header}>Мы считаем, что на создание логотипа должно уделяться много внимания, чтобы потом он приносил его вам. Мы хотим, чтобы каждый логотип был уникальным, простым и имел идею.Мы стремимся делать логотипы, которые запомнит каждый.</p>
			<div className={classes.footerContainer}>
				<div className={classes.footerContainerHelp}>
					<div className={classes.footer}>
						<div className={classes.textContainer}>
							<div>
								<div className={classes.behance}>
									<a className={classes.abehance}  href='https://www.behance.net/d094d093'>Behance</a>
								</div>
								<div className={classes.telegramContainer}>
									<a href="https://t.me/yellowsquarelogo" className={classes.abehance} target="_blank" >Телеграм</a>
								</div>
								<p className={classes.text}>yellowsquarelogo@gmail.com</p>
								<p className={classes.text}>8 951 611 34 01</p>
								<p className={classes.text}>ИНН: 421209935361</p>
							</div>
							<div>
								<img className={classes.footerLogo} src='./logotype.png' alt='logo'></img>
							</div>
							<div className={classes.acontainerHelp}>
								<div  className={classes.acontainer}>
									<a className={classes.abehance} download="" href='/polsogl.docx'>Пользовательское соглашение</a> <br />
								</div>
								<div>
									<a className={classes.abehance} download="" href='/soglobr.docx'>Согласие на обработку <br />персональных данных</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


export default Footer;