export default function Form() {
	return (
		<div class="">
			<form name="contact" netlify>
				<p>
					<label>Nome<input type="text" name="name" /></label>
				</p>
				<p>
					<label>Numero di telefono<input type="text" inputmode="numeric" name="telephone" /></label>
				</p>
				<p>
					<label>Note<input type="text" name="email" /></label>
				</p>
				<p>
					<button type="submit">Send</button>
				</p>
			</form>
		</div>
	);
}
