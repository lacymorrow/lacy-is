import { isLive, precomputeFlags } from "@/feature-flags";

type ItemProps = {
	title: string;
	link: string;
};

const Item = ({ title, link }: ItemProps) => {
	return (
		<li className="flex flex-col justify-center">
			<a href={link}>{title}</a>
		</li>
	);
};

const List = ({ items }: { items: ItemProps[] }) => {
	return (
		<ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
			{items.map((item) => (
				<Item key={item.title} {...item} />
			))}
		</ul>
	);
};

export default async function Home({ params }: { params: { code: string } }) {
	const isLiveFlag = await isLive(params.code, precomputeFlags);
	return (
		<main className="flex justify-center p-xl">
			<div className="flex flex-col gap-lg max-w-lg">
				<h1 className="text-foreground text-xl font-semibold">Lacy <em>is.</em></h1>
				<p className="fade-in-up">
					<span className="text-lg font-serif italic mr-1">
						Building things.
					</span>
					Things are bad. We can fix this.
				</p>
			</div>
		</main>
	);
}
