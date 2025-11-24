import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500 text-sm">@{username}</p>
      </div>
      
      <div className="space-y-2 mb-4">
        <p className="text-gray-600">
          <span className="font-medium">Email:</span> {email}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Phone:</span> {phone}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Website:</span> {website}
        </p>
      </div>

      <div className="border-t pt-4 mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Address</h3>
        <p className="text-gray-600 text-sm">
          {address.street}, {address.suite}
        </p>
        <p className="text-gray-600 text-sm">
          {address.city}, {address.zipcode}
        </p>
      </div>

      <div className="border-t pt-4">
        <h3 className="font-semibold text-gray-700 mb-2">Company</h3>
        <p className="text-gray-600 text-sm font-medium">{company.name}</p>
        <p className="text-gray-500 text-sm italic">"{company.catchPhrase}"</p>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: {id}</span>
      </div>
    </div>
  );
};

export default UserCard;

