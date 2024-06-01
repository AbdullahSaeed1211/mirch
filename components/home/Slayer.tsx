import Image from "next/image";
import slayer from '@/public/home/Slayer.svg';
export default function Slayer() {
return <div className="w-full">
    <Image src={slayer} alt='slayer' className="w-full -mt-6 lg:-mt-[100px]  "/>
</div>
}