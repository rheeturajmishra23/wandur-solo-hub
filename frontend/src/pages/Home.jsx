import BaseFrame from "../components/BaseFrame";
import travellerImage from "../assets/wander-solo-traveller.jpeg"
import image from "../assets/Image.png"

const HomePage = () => {
  return (
    <div className="w-full relative bg-w-background overflow-hidden flex flex-col items-start justify-start pt-[57px] px-[181px] pb-[324px] box-border gap-[173px_0px] tracking-[normal] text-left text-[26px] text-salmon-200 font-poppins lg:gap-[86px_0px] lg:pl-[90px] lg:pr-[90px] lg:box-border mq450:gap-[22px_0px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[43px_0px] mq750:pl-[45px] mq750:pr-[45px] mq750:box-border ">
      <BaseFrame />
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <div className="absolute top-[109px] left-[281px] rounded-6xs bg-papayawhip w-[84px] h-3 z-[1]" />
        <div className="absolute top-[68px] left-[355px] rounded-6xs bg-papayawhip w-5 h-3 z-[1]" />
        <div className="absolute top-[109px] left-[192px] rounded-6xs bg-papayawhip w-5 h-3 z-[1]" />
        <div className="absolute top-[140px] left-[750px] w-[1135px] h-[1016px]">
          {/*absolute  top-[0px] bottom-[0px] left-[0px] w-[1017.5px] h-full  z-[4]*/}
          <div className="bg-traveller-img bg-cover bg-no-repeat bg-[top] ">
            <button className="cursor-pointer [border:none] p-0 bg-indianred absolute top-[707.3px] left-[11.5px] rounded-sm-3 shadow-[0px_26.6px_46.55px_rgba(241,_165,_1,_0.15)] w-[130px] h-[45px] z-[5] hover:bg-salmon-100">
              <div className="absolute top-[0px] left-[0px] rounded-sm-3 bg-indianred shadow-[0px_26.6px_46.55px_rgba(241,_165,_1,_0.15)] w-full h-full hidden" />
              <div className="absolute top-[7px] left-[15px] text-5xl font-abhaya-libre-medium text-w-background text-center flex items-end justify-center w-[100px] h-[33px] z-[6] mq450:text-lgi">
                Search
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[762px] flex flex-row items-start justify-start pt-0 pb-[114px] pr-[18px] pl-[18px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px_0px] max-w-full">
          <b className="h-[18.7px] relative uppercase inline-block shrink-0 max-w-full z-[1] mq450:text-[21px]">
            Best Destinations around the world
          </b>
          <b className="self-stretch h-[166.5px] relative text-92xl-7 tracking-[-0.04em] leading-[118px] inline-block font-volkhov text-st shrink-0 z-[2] mq450:text-[34px] mq450:leading-[47px] mq1050:text-[56px] mq1050:leading-[71px]">
            <p className="m-0">Travel, enjoy</p>
            <p className="m-0">and live a new</p>
            <p className="m-0">and full life</p>
          </b>
        </div>
      </div>
      <div className="w-[713px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-end justify-start gap-[0px_38px] max-w-full mq750:gap-[0px_19px]">
          <button className="cursor-pointer [border:none] pt-3 pb-[12px] pr-[54px] pl-[55px] bg-yellow w-[209px] rounded-sm-3 shadow-[0px_26px_46px_rgba(241,_165,_1,_0.15)] flex flex-row items-start justify-start box-border z-[1] hover:bg-darkgoldenrod">
            <div className="h-[58.2px] w-[209px] relative rounded-sm-3 bg-yellow shadow-[0px_26.6px_46.55px_rgba(241,_165,_1,_0.15)] hidden" />
            <div className="flex-1 relative text-13xl font-abhaya-libre-medium text-w-background text-center z-[1] mq450:text-lgi mq1050:text-[26px]">
              Create
            </div>
          </button>
        <div className="self-stretch rounded-lg bg-w-background flex flex-col items-start justify-start py-4 px-3.5 border-[2px] border-solid border-lightgray">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <input
                className="w-[304px] [border:none] [outline:none] font-noto-sans text-base bg-[transparent] h-6 relative leading-[24px] text-dimgray text-left inline-block p-0"
                placeholder="Search your next travel location"
                type="text"
                />
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
