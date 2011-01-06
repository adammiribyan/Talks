<div id="login" class="b-wizard login">
	<div class="b-bubble-top-line"></div>
	<div class="b-login">
		<div class="b-bubble-title">
			<img alt="Вход" src="/images/login-title.png" height="44" width="92" />
		</div>
		<div class="g-line g-clear"></div>
		<form action="/session" id="login_form" class="simple_form login" method="post">
		<div class="b-form">
			<div class="input string">
				<label class="string required" for="session_login">Логин или электронная почта</label>
				<input class="string optional" id="session_login" name="session[email]" type="text" autofocus />
				<script type="text/javascript">$('#session_login').focus();</script>
			</div>
			<div class="input password">
				<label class="string required" for="session_password">Пароль</label>
				<input class="password optional" id="session_password" name="session[password]" type="password" />				
			</div>
			<div class="b-login-misc">
				<ul>
					<li class="first">
						<input id="user_remember_me" name="user[remember_me]" type="checkbox" value="1" />
						<label class="checkbox optional" for="user_remember_me">запомнить меня</label>
					</li>
					<li>
						<a href="/passwords/new">Потерялся?</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="b-login-button">
			<a class='button block-inline submit-form' href='#' onClick="$('#login_form').submit();"> 
				<div class='bg'> 
					<i class='l'></i> 
					<i class='r'></i> 
				</div> 
				<i class='icon'></i> 
				<span class='button-text'>Войти</span> 
          </a> 
          <input name='commit' style='display:none' type='submit' value='Войти'> 
		</div>
		</form>
	</div>  
	<div class="b-bubble-bottom">
		<div class="b-bubble-logo">
			<img alt="Talks" src="/images/logo_s_h.png" height="13" width="43" />
		</div>
	</div>                       
</div>