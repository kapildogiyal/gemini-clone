import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "../../index.css";
import { Context } from "../../context/context";
const Sidebar = () => {
  const [extended, Setextended] = useState(false);
  const { onsent, prevprompt, setrecentprompt,newchat } = useContext(Context);
  const loadprompt = async (prompt) => {
    setrecentprompt(prompt);
    await onsent(prompt);
  }
  return (
    <div
      className={`hidden sm:flex h-screen fixed  flex-col justify-between py-[25px] px-[15px] bg-[#f0f4f9] transition-all duration-200 overflow-hidden ${
        extended ? "w-[215px]" : "w-[100px]"
      }`}
    >
      <div className="top">
        <img
          onClick={() => Setextended((prev) => !prev)}
          className="block cursor-pointer w-[20px] ml-[10px] "
          src={assets.menu_icon}
          alt="menu"
        />
        <div onClick={() => newchat()} className="mt-[50px] inline-flex items-center gap-[10px] px-[15px] py-[10px] bg-[#e6eaf1] cursor-pointer text-[14px] rounded-[50px] font-medium text-gray-400">
          <img width="20px" src={assets.plus_icon} alt="plus-icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="flex flex-col">
            <p className="ml-[10px] mt-[30px] mb-[20px] font-medium">Recent</p>
            {prevprompt.map((item, index) => {
              return (
                <div onClick={() => loadprompt(item)} className="flex justify-start items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] cursor-pointer text-[#282828] hover:bg-gray-200 duration-600">
                  <img
                    width="20px"
                    src={assets.message_icon}
                    alt="message-icon"
                  />
                  <p>{item.slice(0,13)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col">
        <div className="flex justify-start items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] cursor-pointer text-[#282828] hover:bg-gray-200 duration-600">
          <img width="20px" src={assets.question_icon} alt="question-icon" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="flex justify-start items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] cursor-pointer text-[#282828] hover:bg-gray-200 duration-600">
          <img width="20px" src={assets.history_icon} alt="history-icon" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="flex justify-start items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] cursor-pointer text-[#282828] hover:bg-gray-200 duration-600">
          <img width="20px" src={assets.send_icon} alt="send-icon" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
