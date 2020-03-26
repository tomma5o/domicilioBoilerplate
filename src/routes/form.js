export default function Form() {
	return (
		<div class="">
			<form name="contact" netlify>
				<p>
					<label>Nome
						<input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" name="name" />
					</label>
				</p>
				<p>
					<label>Numero di telefono
						<input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" inputmode="numeric" name="telephone" />
					</label>
				</p>
				<p>
					<label>Note
						<input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" name="email" />
					</label>
				</p>
				<p>
					<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit">Send</button>
				</p>
			</form>
		</div>
	);
}
