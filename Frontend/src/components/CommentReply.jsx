/* eslint-disable react/prop-types */
{/* `Propen reply innehåller information om en enskild kommentarssvar, inklusive profilbildens URL, användarens namn, innehåll och tidsstämpel */}
function CommentReply({ reply }) {
	return (
		<div className="mb-4">
			{/* Wrapper för hela svarskomponenten */}
			<div className="flex items-start space-x-4">
				{/* Profilbild */}
				<div className="flex-shrink-0">
					<img
						src={
							reply.profile_picture_url
								? import.meta.env.VITE_APP_BACKEND_URL +
								  reply.profile_picture_url
								: `https://ui-avatars.com/api/?name=${reply.first_name}+${reply.last_name}`
						}
						alt={`${reply.first_name} ${reply.last_name}`}
						className="w-8 h-8 rounded-full"
					/>
				</div>

				<div className="flex-1">
					{/* Författarens namn och tidsstämpel */}
					<div className="flex justify-between items-center">
						<p className="font-bold">
							{reply.first_name} {reply.last_name}
						</p>
						<p className="text-sm text-gray-400">
							{/* Formaterar tidsstämpeln från reply.created_at */}
							{new Date(reply.created_at)
								.toLocaleString("sv-SE", {
									year: "numeric",
									month: "2-digit",
									day: "2-digit",
									hour: "2-digit",
									minute: "2-digit",
									hour12: false,
								})
								.replace(" ", ", ")}
						</p>
					</div>

					{/* Svarsinnehåll, bara innehållet i svaret */}
					<p className="mt-1">{reply.content}</p>

				</div>
			</div>
		</div>
	);
}

export default CommentReply;
