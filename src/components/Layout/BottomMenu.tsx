import {
  MapIcon,
  DocumentIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export const BottomMenu = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md">
      <div className="flex justify-around items-center h-16">
        <MapIcon className="w-6 h-6 text-gray-400" />
        <DocumentIcon className="w-6 h-6 text-gray-400" />
        <ShoppingCartIcon className="w-6 h-6 text-gray-400" />
        <ShoppingBagIcon className="w-6 h-6 text-gray-400" />
        <UserCircleIcon className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  );
};
