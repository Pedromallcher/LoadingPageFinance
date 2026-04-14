import Image from "next/image";
import ButtonPrimary from "@/components/buttonprimary";



export default function Home () {
  return (
    <div className="bg-[#A0F1BD] h-screen flex-col   ">
      <div className="flex justify-center pt-8 ">
        <Image width={350} height={350} src="/glob.svg" alt="Logo" />
      </div>

      <div className="px-5 pt-6">
        <h1 className="text-[#2E4F21] text-4xl">
          Financial Clarity You Can Trust
        </h1>
        <p className="text-[#2E4F21] pt-2">
          Trusted financial guidance for every stage of life and business since
          1987
        </p>
        <div>
          <ButtonPrimary  textoString ="Ola"cor="green"  />
        </div>
      </div>
    </div>
  );
}