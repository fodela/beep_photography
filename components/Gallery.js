import GalleryImage from "./GalleryImage";
const Gallery = () => {
	return (
		<section>
			<div className=" mb-5 mx-auto grid  grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
				<img src="gallery/gallery-1.jpg" alt="gallery-img" />
				<img src="gallery/gallery-1.jpg" alt="gallery-img" />
				<img src="gallery/gallery-1.jpg" alt="gallery-img" />
				<img src="gallery/gallery-1.jpg" alt="gallery-img" />
				<img src="gallery/gallery-1.jpg" alt="gallery-img" />
				<img src="gallery/gallery-1.jpg" alt="gallery-img" />
			</div>
			<a href="#">view all gallery</a>
		</section>
	);
};
export default Gallery;
