export default function Footer() {

	return (
    <footer className="bg-brandBgLight text-brandText transition-colors duration-500 print:hidden">
      <div className="container mx-auto grid grid-cols-3 p-4 ">
        <div className="left flex flex-row items-center  "></div>
        <div className="middle flex items-center justify-self-center align-middle">
          <p>© 2023 John Dennehy</p>
        </div>
        <div className="right flex flex-row-reverse items-center gap-4"></div>
      </div>
    </footer>
  );
}