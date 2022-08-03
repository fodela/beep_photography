import GalleryImage from "./GalleryImage";
const Gallery = () => {
	return (
		<section grid row>
			<GalleryImage src="../public/gallery/gallery-1.jpg" alt="" />
			<GalleryImage source="gallery/gallery-1.jpg" />
		</section>
	);
};
export default Gallery;
