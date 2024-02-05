import { Link } from "react-router-dom";

function ErrorPage() {
	return (
		<div className="p-20 bg-[#171C1F] h-screen">
			<div className="h-80 shadow-md border border-white rounded-md">
				<h4 className="mt-10 font-bold text-40 text-center text-white">404 NOT FOUND</h4>
				<div className="w-full flex justify-center">
					<Link to={"/"} className="mt-10 px-6 py-4 text-18 uppercase text-white bg-[#353E43] hover:bg-[#575f65] duration-300 ease-in-out rounded-md">
						Go back
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ErrorPage;
