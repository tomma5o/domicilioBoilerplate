export const Dialog = ({ isOpen }) => {
	return (
		<dialog 
			class="absolute t-0 w-screen h-screen"
			open={isOpen}
		>
			<div
				class="absolute w-5/6 bg-white rounded-lg p-6 shadow-lg"
				style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}
			>
				<h3>Well, hello there cowboy! 👋</h3>
				<p>I'm a fancy modal.</p>
				<div class="actions">
					<button class="small ok-modal-btn">Ok!</button>
					<button class="small close-modal-btn">Close</button>
				</div>
			</div>
		</dialog>
	);
};
