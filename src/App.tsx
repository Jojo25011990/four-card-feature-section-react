// *** Types and Data ***
type Feature = {
	id: string;
	title: string;
	description: string;
	icon: string;
	borderColor: string;
	gridPosition: string;
};

const features: Feature[] = [
	{
		id: "supervisor",
		title: "Supervisor",
		description: "Monitors activity to identify project roadblocks",
		icon: "./images/icon-supervisor.svg",
		borderColor: "border-supervisor",
		gridPosition: "lg:col-start-1 lg:row-span-2 lg:self-center",
	},
	{
		id: "team-builder",
		title: "Team Builder",
		description:
			"Scans our talent network to create the optimal team for your project",
		icon: "./images/icon-team-builder.svg",
		borderColor: "border-team-builder",
		gridPosition: "lg:col-start-2 lg:row-start-1",
	},
	{
		id: "karma",
		title: "Karma",
		description: "Regularly evaluates our talent to ensure quality",
		icon: "./images/icon-karma.svg",
		borderColor: "border-karma",
		gridPosition: "lg:col-start-2 lg:row-start-2",
	},
	{
		id: "calculator",
		title: "Calculator",
		description:
			"Uses data from past projects to provide better delivery estimates",
		icon: "./images/icon-calculator.svg",
		borderColor: "border-calculator",
		gridPosition: "lg:col-start-3 lg:row-span-2 lg:self-center",
	},
];
// *** End of Types and Data ***

const App = () => {
	return (
		<main className="flex min-h-screen items-center justify-center px-8 py-20 sm:px-10">
			<section
				aria-labelledby="features-heading"
				className="w-full max-w-277.5"
			>
				{/* Title | Description */}
				<header className="mx-auto mb-16 max-w-135 text-center">
					<h1
						id="features-heading"
						className="text-primary text-2xl leading-normal tracking-[0.25px] sm:text-4xl"
					>
						<span className="block font-extralight">
							Reliable, efficient delivery
						</span>

						<span className="block font-semibold">
							Powered by technology
						</span>
					</h1>

					<p className="text-secondary mt-4 text-[0.9375rem] leading-7">
						Our Artificial Intelligence powered tools use millions
						of project data points to ensure that your project is
						successful
					</p>
				</header>
				{/* End of Title | Description */}

				{/* Cards */}
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
					{features.map(
						({
							id,
							title,
							description,
							icon,
							borderColor,
							gridPosition,
						}) => (
							<article
								key={id}
								aria-labelledby={`${id}-heading`}
								className={`
                                bg-card flex min-h-62.5 flex-col rounded-lg
                                border-t-4 p-6.25
                                shadow-[0_15px_30px_-11px_rgba(131,166,210,0.5)]
                                transition-all duration-300
                                ease-out
                                hover:-translate-y-1
                                hover:shadow-[0_20px_35px_-11px_rgba(131,166,210,0.65)]
                                motion-reduce:transform-none
                                motion-reduce:transition-none
                                ${borderColor}
                                ${gridPosition}
                                `}
							>
								<h2
									id={`${id}-heading`}
									className="text-primary text-xl font-semibold"
								>
									{title}
								</h2>

								<p className="text-secondary mt-2 text-[0.8125rem] leading-6">
									{description}
								</p>

								<img
									src={icon}
									alt=""
									width={64}
									height={64}
									className="mt-auto ml-auto pt-8"
									aria-hidden="true"
								/>
							</article>
						),
					)}
				</div>
				{/* End of Cards */}
			</section>
		</main>
	);
};

export default App;
