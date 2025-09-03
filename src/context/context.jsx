import { createContext, useState } from "react";
import runChat from "../config/geminiapi";

export const Context = createContext();
const ContextProvider = (props) => {
  const [input, setinput] = useState("");
  const [recentprompt, setrecentprompt] = useState("");
  const [prevprompt, setprevprompt] = useState([]);
  const [showresult, setshowresult] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultdata, setresultdata] = useState("");
  const delaypara = (index, nextword) => {
    setTimeout(function () {
      setresultdata((prev) => prev + nextword);
    }, 75 * index);
  };
  const newchat = () => {
    setloading(false);
    setshowresult(false);
  } 
const onsent = async (prompt) => {
  setresultdata("");
  setloading(true);
  setshowresult(true);

  let response;

  try {
    if (prompt !== undefined) {
      setrecentprompt(prompt);
      response = await runChat(prompt);
    } else {
      setprevprompt((prev) => [...prev, input]);
      setrecentprompt(input);
      response = await runChat(input);
    }

    if (!response || typeof response !== "string") {
      console.error("Invalid response from runChat:", response);
      setloading(false);
      return;
    }

    let responseArray = response.split("**");
    let formatted = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i % 2 === 1) {
        formatted += "<b>" + responseArray[i] + "</b>";
      } else {
        formatted += responseArray[i];
      }
    }

    let finalResponse = formatted.split("*").join("<br/>");

    const words = finalResponse.split(" ");
    for (let i = 0; i < words.length; i++) {
      delaypara(i, words[i] + " ");
    }

  } catch (err) {
    console.error("Error in onsent:", err);
  }

  setloading(false);
  setinput("");
};


  const contextvalue = {
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
    newchat
  };
  return (
    <Context.Provider value={contextvalue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
