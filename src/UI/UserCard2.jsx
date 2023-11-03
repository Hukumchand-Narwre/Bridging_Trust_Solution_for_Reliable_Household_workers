export const UserCard2 = ({ user }) => {
  console.log(user);
  const imageUrl =
    user?.photo_urls?.[0] ||
    "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg";
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
      <img src={imageUrl} alt={user.name} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.first_name[0].toUpperCase() + user.first_name.slice(1)}</div>
        <p className="text-gray-700 text-base">Lastname: {user.last_name}</p>
        <p className="text-gray-700 text-base">Email: {user.email}</p>
      </div>
    </div>
  );
};
