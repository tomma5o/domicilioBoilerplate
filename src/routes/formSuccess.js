export default function FormSuccess() {
	return (
		<main class="mt-10 text-center">
			<p class="text-2xl">Grazie per la segnalazione!</p>
			<p class="mt-5">Abbiamo preso in carico la tua richiesta, normalmente la fase di approvazione richiede 24 ore.</p>
			<p class="mt-2">Nel frattempo, perché non condividi quest'app con chi abita a {process.env.PREACT_APP_CITY}? Gli farà piacere!</p>
			<p class="mt-5 text-5xl" aria-label="thanks icon">🙏</p>
		</main>
	);
}
