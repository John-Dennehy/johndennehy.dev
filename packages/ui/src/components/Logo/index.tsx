export const Logo = () => {
  return (
    <div
      className="square relative flex h-24 w-24
				justify-center
				rounded-tl-[12px] 
				rounded-tr-[40px] 
        rounded-bl-[30px] 
				rounded-br-[40px] 
				shadow-md 
		"
    >
      <div
        className="
				from-brandPrimaryDark to-brandPrimary
				h-full w-full 
				rounded-bl-[30px]
				rounded-tl-[12px]
        rounded-tr-none
				rounded-br-none    
				border-r-4 
		 		border-b-8
		 		border-l-8
				border-t-8
				border-white
				bg-gradient-to-br
				shadow-inner
				"
      />
      <div
        className="
								from-brandAccentDark to-brandAccent
												h-full
				w-full
				rounded-tl-none
        rounded-tr-[40px]
				rounded-bl-none    
				rounded-br-[40px] 
				border-r-8
								border-b-8
				border-l-4
				border-t-8
				border-white bg-gradient-to-br shadow-inner
				"
      />
    </div>
  );
};
