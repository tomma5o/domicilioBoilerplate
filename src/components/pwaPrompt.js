import { useState, useEffect } from 'preact/hooks';

const visibilityCheks = () => {
	if (typeof window !== 'undefined') {
		const isiOS = /iphone|ipad|ipod/.test(
			window.navigator.userAgent.toLowerCase()
		);
		const isiPadOS =
			navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
		const isStandalone =
			'standalone' in window.navigator && window.navigator.standalone;
	
		const neverShowed = !window.localStorage.getItem('pwaPrompt');
	
		return (isiOS || isiPadOS) && !isStandalone && neverShowed;
	}

	return true;
};

const ShareIcon = ({ classes, size }) => {
	return (
		<svg
			width={size}
			height={size}
			xmlns="http://www.w3.org/2000/svg"
			class={classes}
			viewBox="0 0 566 670"
		>
			<path d="M255 12c4-4 10-8 16-8s12 3 16 8l94 89c3 4 6 7 8 12 2 6 0 14-5 19-7 8-20 9-28 2l-7-7-57-60 2 54v276c0 12-10 22-22 22-12 1-24-10-23-22V110l1-43-60 65c-5 5-13 8-21 6a19 19 0 0 1-16-17c-1-7 2-13 7-18l95-91z" />
			<path d="M43 207c16-17 40-23 63-23h83v46h-79c-12 0-25 3-33 13-8 9-10 21-10 33v260c0 13 0 27 6 38 5 12 18 18 30 19l14 1h302c14 0 28 0 40-8 11-7 16-21 16-34V276c0-11-2-24-9-33-8-10-22-13-34-13h-78v-46h75c13 0 25 1 37 4 16 4 31 13 41 27 11 17 14 37 14 57v280c0 20-3 41-15 58a71 71 0 0 1-45 27c-11 2-23 3-34 3H109c-19-1-40-4-56-15-14-9-23-23-27-38-4-12-5-25-5-38V270c1-22 6-47 22-63z" />
		</svg>
	);
};

const HomeScreenIcon = ({ classes, size }) => {
	return (
		<svg
			width={size}
			height={size}
			xmlns="http://www.w3.org/2000/svg"
			class={classes}
			viewBox="0 0 578 584"
	  >
			<path d="M101 35l19-1h333c12 0 23 0 35 3 17 3 34 12 44 27 13 16 16 38 16 58v329c0 19 0 39-8 57a65 65 0 0 1-37 37c-18 7-38 7-57 7H130c-21 1-44 0-63-10-14-7-25-20-30-34-6-15-8-30-8-45V121c1-21 5-44 19-61 13-16 33-23 53-25m7 46c-10 1-19 6-24 14-7 8-9 20-9 31v334c0 12 2 25 10 34 9 10 23 12 35 12h336c14 1 30-3 38-15 6-9 8-20 8-31V125c0-12-2-24-10-33-9-9-22-12-35-12H121l-13 1z" />
			<path d="M271 161c9-11 31-10 38 4 3 5 3 11 3 17v87h88c7 0 16 1 21 7 6 6 7 14 6 22a21 21 0 0 1-10 14c-5 4-11 5-17 5h-88v82c0 7-1 15-6 20-10 10-29 10-37-2-3-6-4-13-4-19v-81h-87c-8-1-17-3-23-9-5-6-6-15-4-22a21 21 0 0 1 11-14c6-3 13-3 19-3h84v-88c0-7 1-14 6-20z" />
		</svg>
	);
};

const stylePrompt = {
	left: '50%',
	transform: 'translateX(-50%)',
	bottom: '2rem',
};

const Prompt = ({visible, closePopup}) => (
	<div 
		style={stylePrompt} 
		class={`fixed p-2 w-11/12 bottom-0 rounded-lg backdrop max-w-md border ${visible ? '' : 'hidden'}`}
	>
		<div class="flex justify-between items-center border-b p-2">
			<p class="font-bold text-lg">Sono un'app!</p>
			<span
				class="bg-gray-400 rounded-full text-center"
				style={{ width: '30px', height: '30px', lineHeight: '30px' }}
				onClick={closePopup}
			>✖️</span>
		</div>
		<p class="border-b py-4 px-2">Aggiungimi alla Home per utilizzarmi in fullscreen e offline. Così appena vorrai ordinare mi avrai a portata di tap!</p>
		<div class="flex items-center text-blue-700 px-2 my-4">
			<ShareIcon classes="fill-current" size="20px" />
			<p class="text-gray-900 px-2">Fai tap sul bottone condividi</p>
		</div>
		<div class="flex items-center text-blue-700 px-2 mb-2">
			<HomeScreenIcon classes="fill-current" size="20px" />
			<p class="text-gray-900 px-2 ">Fai tap sulla voce 'Aggiungi a Home'</p>
		</div>
	</div>
);

export const PWAPrompt = (props) => {
	const [isVisible, setIsVisible] = useState(false);
	
	function handleClosePopup() {
		setIsVisible(false);
		if (typeof window !== 'undefined') {
		   window.localStorage.setItem('pwaPrompt', 'true')
		}
	}

	useEffect(() => {
		setIsVisible(visibilityCheks())
	}, [])

	return visibilityCheks() && (	
		<Prompt
			visible={isVisible}
			closePopup={handleClosePopup}
			{...props}
		/>
	);
};