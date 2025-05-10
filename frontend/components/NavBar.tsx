"use client";
import { useEffect, useState } from "react";

export const NavBar = () => {
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem("mode");
		return savedTheme === "true";
	});
	useEffect(() => {
		document.body.classList.toggle("dark-theme", theme);
		localStorage.setItem("mode", String(theme));
	}, [theme]);
	const handleThemeChange = () => {
		setTheme(!theme);
		document.body.style.backgroundColor = !theme ? "#000" : "#fff";
		document.body.style.color = !theme ? "#fff" : "#000";
	};

	return (
		<nav>
			<div className="bg-purple-500 w-full fixed h-14 border-b flex items-center border-gray-200 shadow-md z-10">
				<div className="max-w-[90rem] mx-auto px-4 w-full font-semibold text-lg flex justify-between items-center">
					<a href="/" className="">
						<span className="text-white">Event Scraper</span>
					</a>
					<button
						onClick={handleThemeChange}
						className="text-white border border-neutral-100 rounded-full w-16 h-6 p-1 relative shadow-inner hover:shadow-lg transition-all duration-300 cursor-pointer"
					>
						<span
							className={`h-5 w-5 rounded-full top-[1px] left-[2px] z-100 absolute ${
								theme
									? "translate-x-9.5 transition-all duration-300 bg-neutral-800"
									: "translate-x-0 transition-all duration-300 bg-white"
							}`}
						></span>
					</button>
				</div>
			</div>
		</nav>
	);
};
