const DeleteWarning = (props:{
    cancel: () => void,
    accept: () => void,
}) => {
	return (
		<div className="w-screen h-screen flex fixed top-0 left-0">
			<div className="w-full h-full bg-Dark_blue opacity-30 fixed" />
			<div className="bg-White self-center my-4 mx-12 rounded-lg p-8 z-10 flex flex-col gap-y-4">
				<h2 className="text-xl font-bold text-Dark_blue">
					Delete comment
				</h2>
				<p className="text-Grayish_Blue font-medium">
					Are you sure you want to delete this comment? This will
					remove the comment and can't be undone.
				</p>
				<div className="flex justify-between text-White font-medium text-xl">
					<button onClick={props.cancel} className="uppercase bg-Grayish_Blue px-5 py-3 rounded-lg transition-all hover:brightness-125">No, cancel</button>
					<button onClick={props.accept} className="uppercase bg-Soft_Red px-5 py-3 rounded-lg transition-all hover:brightness-125">Yes, delete</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteWarning;
