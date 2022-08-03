const Hero = () => {
	return (
		<section className="bg-blue-300 px-20 py-40">
			<div
				className="hero bg-red-500
			 max-w-[75rem]  px-12 mx-auto
			 grid grid-cols-2 gap-40 items-center"
			>
				<div className="hero-text-box">
					<h1 className="text-7xl mb-5">
						Capture every precious moment with us
					</h1>
					<p className="text-lg mb-20">
						Get expert photographers and amazing photos, starting from just USD
						99 in 500+ cities worldwide.
					</p>
				</div>
				<div className="hero-image-box">
					<picture className="w-full ">
						<img
							src="https://images.unsplash.com/photo-1551963474-cc9e699de3b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
							alt=""
						/>
					</picture>
				</div>
			</div>
		</section>
	);
};
export default Hero;
