type ButtonPropType = {
	icon: string;
	textColor: string;
	value: string;
	onClick: () => void;
};
const Button = (props: ButtonPropType) => {
	return (
		<button
			className={`flex items-center ${props.textColor} gap-x-2 font-medium`}
			onClick={() => props.onClick()}
		>
			<img src={props.icon} alt="" />
			{props.value}
		</button>
	);
};

export default Button