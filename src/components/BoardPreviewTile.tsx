function BoardPreviewTile({ name, previewDescription }) {
	return (
		<div className="px-4 p-2 rounded-lg hover:bg-[#353E43]">
			<h4 className="text-18 font-semibold truncate text-white">{name}</h4>
			<p className="mt-2 text-14 text-[#C8C8C9] line-clamp-2">{previewDescription}</p>
		</div>
	);
}

export default BoardPreviewTile;
