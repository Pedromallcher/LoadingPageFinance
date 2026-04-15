import Image from "next/image";
import ButtonPrimary from "@/components/buttonprimary";



export default function Home () {
  return (
    <div className=" flex flex-col bg-white min-h-screen lg:flex-row lg:justify-between   ">
      <div className=" bg-[#A0F1BD] flex flex-1 justify-center pb-12 items-center rounded-b-3xl flex-col lg:flex-row-reverse lg:justify-around lg:items-center ">
        <Image
          width={350}
          height={350}
          src="/glob.svg"
          alt="Logo"
          className="lg:w-[350]"
        />
        <div className="px-5 pt-6 ">
          <h1 className="text-[#2E4F21] text-4xl lg:w-120 lg:text-6xl">
            Financial Clarity You Can Trust
          </h1>
          <p className="text-[#2E4F21] pt-2">
            Trusted financial guidance for every stage of life and business
            since 1987
          </p>
          <div className="pt-4">
            <ButtonPrimary
              classname="rounded-2xl p-3 font-sans"
              textoString="Connect with our experts"
              cor="primary"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#F9F9F9] text-black p-4 text-center flex flex-col items-center gap-4 pt-15 flex-1 pb-25">
        <h2 className="text-[#2E4F21]">Services</h2>
        <p className="text-3xl w-80 text-[#2E4F21]">
          Let us handle the numbers, so you can handle your success.
        </p>
        <p className="text-[#2E4F21]">
          Serving individuals and small businesses since 1987
        </p>
        <ButtonPrimary
          textoString="Schedule a call"
          cor="primary"
          classname="p-3 rounded-3xl"
        />
      </div>

      <div className="bg-[#f9f] text-black flex justify-center py-6">
        <div className=" bg-[#D2F8DC] w-90 h-120 mt-5 justify-center flex flex-col items-center rounded-2xl">
          <Image alt="img1" width={200} height={200} src="/friendly.svg" />
          <div className=" flex flex-col items-center p-5 gap-6">
            <h3 className="text-[#2E4F21] text-3xl">
              Tax Preparation & Filing
            </h3>
            <p className="font-mono">
              Accurately prepare and file personal and business tax returns to
              maximize deductions and ensure compliance.
            </p>
            <div className="flex gap-4 mt-5">
              <div className="bg-white text-[#2E4F21] p-2 rounded-2xl">1099 taxes</div>
              <div className="bg-white text-[#2E4F21] p-2 rounded-2xl">1099 taxes</div>
              <div className="bg-white text-[#2E4F21] p-2 rounded-2xl">1099 taxes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}