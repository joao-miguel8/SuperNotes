function BoardPreviewTile({ name }) {
	return (
		<div className="px-4 p-2 rounded-lg hover:bg-[#353E43]">
			<h4 className="text-18 font-semibold truncate text-white">{name}</h4>
			<p className="mt-2 text-14 text-[#C8C8C9] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nobis, animi dolores repellat aliquid magnam. Sunt libero perspiciatis quae sit.</p>
		</div>
	);
}

export default BoardPreviewTile;
