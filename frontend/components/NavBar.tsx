"use client";

export const NavBar = () => {
	return (
		<nav>
			<div className="bg-purple-500 w-full sticky py-4 border-b flex items-center border-gray-200 shadow-md z-10">
				<div className="max-w-[90rem] mx-auto px-4 w-full font-semibold text-lg flex justify-between items-center">
					<a href="/" className="">
						<span className="text-white">Event Scraper</span>
					</a>
				</div>
			</div>
		</nav>
	);
};
