import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"

export const HeadBlock = () => {
    const toggleSearch = () => {
    }

    return (
        <div className="flex flex-col justify-between p-5">
            <div className="text-white font-[700] text-2xl">Байкті таңдаңыз!</div>
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-white rounded-lg p-2 flex-grow"
                />

                <span
                    onClick={toggleSearch}
                    className="bg-[#0000FF] p-2 rounded-[10px] cursor-pointer"
                >
                    <MagnifyingGlassIcon className="text-white w-7 h-7" />
                </span>
            </div>

        </div>
    )
}