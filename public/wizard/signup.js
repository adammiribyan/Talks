<div id="signup" class="b-wizard signup">
	<div class="b-bubble-top-line b-bubble-top-line-white"></div>
	<div class="b-signup">
		<div class="b-bubble-title">
			<img alt="Регистрация" src="/images/signup-title.png" height="48" width="242" />
		</div>
		<div class="g-line g-clear"></div>
		<form action="/signup" class="simple_form signup" method="post">
		<div class="b-form">
			<div class="input string">
				<input class="string optional" id="user_login" name="user[login]" type="text" />
			</div>
			<div class="input password">
				<input class="password optional" name="user[password]" type="password" />
			</div>
			<div class="input string last">
				<input class="string optional" id="user_email" name="user[email]" type="text" />
			</div>
		</div>
		<div class="b-signup-button">
		  <a class="button block-inline" href="">
			<div class="bg">
			  <i class="l"></i>
			  <i class="r"></i>
			</div>
			<i class="icon"></i>
			<span class="button-text">Зарегистрироваться</span>
		  </a>
		</div>
		</form>                            
	</div>  
	<div class="b-bubble-bottom signup">
		<div class="b-bubble-logo">
			<img alt="Talks" src="/images/logo_s_h.png" height="13" width="43" />
		</div>
		<div class="b-bubble-append-link">
			<a href="#" onClick="javascript: bubble.show('remote:/wizards/login.js', { event: event, bg: 'white', from: this, message: 'Загружаем...' })">Вход</a>
		</div>
	</div>                      
</div>