"use client";
import Image from "next/image";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import CarouselBodyParts from '../components/CarouselBodyParts';

const BodyPlace = () => {
    const router = useRouter();

    const { globalState, setGlobalState } = useGlobalState();

    const handleClick = (part: string) => {
        setGlobalState({ ...globalState, tattooPlace: part, allowSize: true });
        Cookies.set("allow-size", JSON.stringify("true"));
        router.push("/dashboard/size");
    };

    return (
        <div className='mt-20'>
            <CarouselBodyParts />
        </div>
    );
};

export default BodyPlace;