import { HeartIcon } from "@heroicons/react/16/solid"
import bikeImage from "../../../assets/bike.png"
import { useBikesStore } from "../../../store/bikes/bikes.store"
import { useEffect } from "react";

export const BikeCard = () => {
    const { bikes, fetchBikes, loading } = useBikesStore();

    useEffect(() => {
        fetchBikes();
    }, [fetchBikes]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="grid grid-cols-2 gap-4 p-5">
            {bikes.map((bike) => (
                <div
                    key={bike.id}
                    className="flex flex-col text-white p-3 bg-[#2c547a] bg-opacity-80 rounded-[10px]"
                >
                    <div className="flex justify-between items-start">
                        <img
                            src={bikeImage}
                            alt={bike.name}
                            className="w-20 h-20 object-cover rounded-lg"
                        />
                        <HeartIcon className="w-5 h-5 text-white cursor-pointer" />
                    </div>

                    <span className="font-[700]">{bike.name}</span>
                    <span className="text-sm">{bike.brand.name}</span>
                    <span className="font-[600]">${bike.price.toLocaleString()}</span>
                </div>
            ))}
        </div>
    )
}