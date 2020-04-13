export default function FormSuccess() {
	return (
		<div class="mt-10 text-center">
			<p class="text-2xl">Grazie per aver aggiunto l'attività!</p>
			<p class="mt-5">Abbiamo preso in carico la tua richiesta, normalmente la fase di approvazione richiede 24 ore.</p>
			<p class="mt-5">Nel frattempo, perché non condividi quest'app con chi abita a {process.env.PREACT_APP_CITY}? Gli farà piacere!</p>
			<p class="text-5xl" aria-label="thanks icons">Grazie 🙏</p>
		</div>
	);
}
