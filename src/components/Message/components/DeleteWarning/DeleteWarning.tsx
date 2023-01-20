const DeleteWarning = (props:{
    cancel: () => void,
    accept: () => void,
}) => {
	return (
		<div className="w-screen h-screen flex top-0 left-0 fixed justify-center items-center">
			<div className="w-screen h-screen bg-Dark_blue opacity-30 fixed flex" />
			<div className="bg-White my-4 mx-12 rounded-lg p-8 z-10 flex flex-col gap-y-4
			">
				<h2 className="text-xl font-bold text-Dark_blue">
					Delete comment
				</h2>
				<p className="text-Grayish_Blue font-medium">
					Are you sure you want to delete this comment? This will
					remove the comment and can't be undone.
				</p>
				<div className="flex justify-between text-White font-medium text-xl">
					<button onClick={props.cancel} className="solid bg-Grayish_Blue">No, cancel</button>
					<button onClick={props.accept} className="solid bg-Soft_Red">Yes, delete</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteWarning;
