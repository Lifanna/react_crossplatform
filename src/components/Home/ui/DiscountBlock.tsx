import bikeImage from "../../../assets/bike.png";

export const DiscountBlock = () => {

    return (
        <div className="px-4">
            <div className="flex flex-col bg-[#2e374a] p-4 bg-opacity-70 mx-5 rounded-[20px]">
                <div>
                    <img src={bikeImage} className="" />
                </div>
                <span className="text-white text-2xl font-[700]">30% жеңілдік</span>
            </div>

            <div className="mt-[70px]">
                <div className="flex flex-row items-end gap-3">
                    <div className="w-40 h-20 bg-purple-600 rounded-lg z-10">Div 1</div>
                    <div className="w-40 h-20 bg-purple-500 rounded-lg z-20 -translate-y-4">Div 2</div>
                    <div className="w-40 h-20 bg-purple-400 rounded-lg z-30 -translate-y-8">Div 3</div>
                </div>
            </div>
        </div>
    )
}