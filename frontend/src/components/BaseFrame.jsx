import { useCallback } from "react";

const BaseFrame = () => {
  const onNavItemTextClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onButtonClick = useCallback(() => {
    // Please sync "Sign Up" to the project
  }, []);

  return (
    <div className="w-[1443.1px] flex flex-row items-end justify-between gap-[20px] max-w-full text-left text-21xl text-st font-volkhov">
      <div className="w-[270px] flex flex-col items-start justify-start pt-0 px-0 pb-[3.700000000000728px] box-border">
        <b className="self-stretch h-[55px] relative leading-[10px] flex items-end shrink-0 whitespace-nowrap z-[2] mq450:text-5xl mq450:leading-[6px] mq1050:text-13xl mq1050:leading-[8px]">
          <span className="[line-break:anywhere]">
            <p className="m-0">WonderSolo</p>
            <p className="m-0 text-92xl-7">&nbsp;</p>
          </span>
        </b>
      </div>
      <div className="flex flex-row items-start justify-start gap-[0px_73.7px] text-3xl-6 text-st1 font-abhaya-libre-medium mq450:gap-[0px_37px]">
        <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
          <div
            className="relative cursor-pointer z-[1]"
            onClick={onNavItemTextClick}
          >
            Login
          </div>
        </div>
        <button
          className="cursor-pointer pt-[11.5px] px-[32px] pb-[15px] bg-[transparent] rounded-[6.65px] flex flex-row items-start justify-start z-[1] border-[1.3px] border-solid border-st1"
          onClick={onButtonClick}
        >
          <div className="relative text-3xl-6 font-abhaya-libre-medium text-st1 text-left whitespace-nowrap">
            Sign up
          </div>
          <div className="h-[53px] w-[135px] relative rounded-[6.65px] box-border hidden border-[1.3px] border-solid border-st1" />
        </button>
      </div>
    </div>
  );
};

export default BaseFrame;
