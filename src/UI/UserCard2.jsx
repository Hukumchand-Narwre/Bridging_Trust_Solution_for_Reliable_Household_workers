export const UserCard2 = ({ user }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
      <img
        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJzyQcBu_7EH0wSSW14L4Edxsj3X8AJKcy3UBpQE33iMrZ8Z3SNXmPpEZyqsl898vYwI&usqp=CAU`}
        alt={user.name}
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.first_name[0].toUpperCase() + user.first_name.slice(1)}</div>
        <p className="text-gray-700 text-base">Lastname: {user.last_name}</p>
        <p className="text-gray-700 text-base">Email: {user.email}</p>
      </div>
    </div>
  );
};
