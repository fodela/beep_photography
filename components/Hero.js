const Hero = () => {
	return (
		<section className="bg-orange-100 px-20 py-40">
			<div
				className="hero
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
						<img src="hero/hero.png" alt="" />
					</picture>
				</div>
			</div>
		</section>
	);
};
export default Hero;
