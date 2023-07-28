import React from 'react'

import './Form.css';

const Form = () => {
  return (
    <form action="telegram.php" method="POST">

		<div class="form-group">
			<input type="text" class="form-control" id="" name="user_name" placeholder="Ваше имя" />
		</div>
	
		<div class="form-group">
			<input type="text" class="form-control" id="" name="user_phone" placeholder="+7 705 197 94 58" />
		</div>
	
		<button type="submit" class="btn btn-primary">Заказать звонок</button>
      </form>
  )
}

export default Form