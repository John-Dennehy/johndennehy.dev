import Link from 'next/link';
import Logo from '/public/jd-logo.svg'
import Image from 'next/image';

export default function Branding({ name }: { name: string; }) {
	return (
		<Link href="/" className="text-2xl font-bold ">
			<div className='flex gap-2 items-center'>
				<Image src={Logo} width="50" height="10" alt='Brand Logo' />
				<h1 >{name}</h1>
			</div>
		</Link>
	);
};
