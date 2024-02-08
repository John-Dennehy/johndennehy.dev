"use client";

import { SlMenu } from "react-icons/sl";

export type HamburgerMenuProps = {
	onClick: () => void;
};

function HamburgerMenu({ onClick }: HamburgerMenuProps) {
	const handleClick = () => {
		onClick();
	};
	// return hamburger menu for mobile using lucide icons
	return (
		<button type="button" onClick={handleClick}>
			<SlMenu />
		</button>
	);
}
