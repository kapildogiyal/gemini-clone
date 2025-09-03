import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Main = () => {
  const {
    prevprompt,
    input,
    recentprompt,
    showresult,
    loading,
    resultdata,
    setinput,
    setprevprompt,
    setresultdata,
    setrecentprompt,
    onsent,
  } = useContext(Context);
  return (
    <div className=" flex-1 min-h-screen pb-[15vh] relative sm:ml-[100px]">
      <div className="flex items-center justify-between text-[22px] p-[20px] text-[#585858]">
        <p>Gemini</p>
        <img
          src={assets.user_icon}
          className="rounded-[50%] w-[40px]"
          alt="user"
        />
      </div>
      <div className="max-w-[900px] m-auto">
        {!showresult ? (
          <div>
            <div className="mx-[50px] mb-[10px] text-[56px] text-[#c4c7c5] p-[20px] font-normal">
              <p>
                <span className="text-gradient">Hello, kapil.</span>
              </p>
              <p>How can i help you?</p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[15px] p-[20px]">
              <div className="h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-[17px]">
                  suggest beautiful places to see on an upcomming road trip
                </p>
                <img
                  src={assets.compass_icon}
                  className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
                  alt="compass"
                />
              </div>
              <div className="h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-[17px]">
                  Briefyl summarize this concept: urban planning
                </p>
                <img
                  src={assets.bulb_icon}
                  className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
                  alt="compass"
                />
              </div>
              <div className="h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-[17px]">
                  Brainstrom team bonding activities for our work retreat
                </p>
                <img
                  src={assets.message_icon}
                  className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
                  alt="compass"
                />
              </div>
              <div className="h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-[17px]">
                  improve the readaibility of the following code
                </p>
                <img
                  src={assets.code_icon}
                  className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px]"
                  alt="compass"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="px-[5%] max-h-[70vh] overflow-y-scroll hide-scrollbar">
            <div className="my-[40px] mx-[0px] flex items-center gap-[20px]">
              <img
                className="w-[40px] rounded-[50%]"
                src={assets.user_icon}
                alt=""
              />
              <p>{recentprompt}</p>
            </div>
            <div className="flex items-center gap-[20px]">
              {loading ? (
                <div className="flex flex-col w-[100%] gap-[10px]">
                  <hr className="loader border-[4px] border-none bg-[#f6f7f8] h-[20px] bg-[length:800px 50px] bg-[linear-gradient(to_right,#9ed7ff,#ffffff,#9ed7ff)]" />
                  <hr className="loader border-[4px] border-none bg-[#f6f7f8] h-[20px] bg-[length:800px 50px] bg-[linear-gradient(to_right,#9ed7ff,#ffffff,#9ed7ff)]" />
                  <hr className="loader border-[4px] border-none bg-[#f6f7f8] h-[20px] bg-[length:800px 50px] bg-[linear-gradient(to_right,#9ed7ff,#ffffff,#9ed7ff)]" />
                </div>
              ) : (
                <div className="flex">
                  <img className="w-[100px] h-[100px]" src={assets.gemini_icon} alt="" />
                  <p
                    className="text-[17px] font-normal leading-[1.8]"
                    dangerouslySetInnerHTML={{ __html: resultdata }}
                  ></p>
                </div>
              )}
            </div>
          </div>
        )}
        <div className=" lg:fixed bg-white bottom-0 w-[100%] max-w-[900px] p-x-[20px] m-auto">
          <div className="flex lg:flex items-center justify-between gap-[20px] bg-[#f0f4f9] py-[10px] px-[20px] rounded-[50px] ">
            <input
              type="text"
              onChange={(e) => setinput(e.target.value)}
              value={input}
              className="flex-1 bg-transparent p-[8px] text-[18px] border-none outline-none text-[#878787]"
              placeholder="Enter a prompt here"
            />
            <div className="flex gap-[10px]">
              <img
                className="cursor-pointer w-[24px]"
                src={assets.gallery_icon}
                alt=""
              />
              <img
                className="cursor-pointer w-[24px]"
                src={assets.mic_icon}
                alt=""
              />
              {input ? (
                <img
                  onClick={() => onsent()}
                  className="cursor-pointer w-[24px]"
                  src={assets.send_icon}
                  alt=""
                />
              ) : null}
            </div>
          </div>
          <p className="text-[13px] my-[15px] mx-auto text-center font-normal text-[#878787]">
            Gemini may display inaccurate info, including about people, so
            double check its response. Your Privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};
export default Main;
