function Image() {
	return (
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Gustav_chocolate.jpg"
			alt="cat"
			/>
			)
}

export function Image2() {
	return (
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg"
			alt="cat"
			/>
			)
}

export default function Gallery() {
	return (
		<section>
			<Image />
		</section>
		);
}