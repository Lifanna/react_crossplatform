import { HeadBlock } from "./ui/HeadBlock"
import { DiscountBlock } from "./ui/DiscountBlock"
import { BikeCard } from "./ui/BikeCard"
import { BottomMenu } from "../Layout/BottomMenu"

export const BikeHomePage = () => {

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#4b2c82] via-[#2a163f] to-white">
            <HeadBlock />
            <DiscountBlock />
            <BikeCard />
            <BottomMenu />
        </div>
    )
}
