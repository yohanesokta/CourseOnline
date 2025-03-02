import { FaBold, FaHeading, FaImage, FaList } from "react-icons/fa"
import { IoLink } from "react-icons/io5"
import Markdown from "react-markdown"
import "../../markdown.css"
import { useState, useRef, useEffect } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ImagePop, LinkedPop } from "../../components/productCreator/PopElement"
import { EditorAction } from "../../utility/KeyboardHandleEditor"
import { FaItalic } from "react-icons/fa6"
import { GiHelp } from "react-icons/gi"
import { getuserdata } from "../../api/auth.controller"
import { useNavigate } from "react-router"

export const ProductCustom = () => {
  const [Text, SetMainText] = useState<string>("")
  const [History, SetHistory] = useState<string[]>([])
  const [cacheText, SetCacheText] = useState<string>("");
  const textArea = useRef<any>()
  const [linkPop, SetLinkPop] = useState<boolean>(false)
  const [imagePop,SetImagePop] = useState<boolean>(false)
  const [OnBasic, SetBasic] = useState<number>(1);
  

  const [UserData,SetUserData] = useState<any>()
  const navigate = useNavigate()

  useEffect(()=>{
    try {
      getuserdata(localStorage.getItem("usertoken")!).then((data)=>{
        if (data.role != "mentor") {
          navigate("/")
        } else {
          console.log(data)
          SetUserData(data)
        }
      })
    } catch (error) {
      
    }
  },[])

  const SyntaxHighlight = ({ value = "", language }: { value: any, language: any }) => {
    return (
      <SyntaxHighlighter language={language ?? ""} style={docco}>
        {value ?? ""}
      </SyntaxHighlighter>
    )
  }

  const SetText = (text: string) => {
    const newHistory = [...History, Text]
    SetHistory(newHistory.length > 100 ? newHistory.slice(1) : newHistory)
    SetMainText(text)
  }

  const BufferText = (element: any) => {
    SetText(element.target.value);
    SetBasic(1);
    SetCacheText(element.target.value)
  }


  const KeyboardHandle = new EditorAction({
    set_main_text: SetMainText,
    set_text: SetText,
    text: Text,
    history: History
  })


  function LinkAction(refered: string, link: string) {
    if (link) {
      SetText(Text + `[${refered}](${link})`)
    }
    SetLinkPop(false)
  }
  function ImageAction(refered : string , link : string) {
    if (link) {
      SetText(Text + `![${refered}](${link})` )
    }
    SetImagePop(false)
  }

  const HeaderAction = () => {
    let baseHeader = ""
    for (let i = 0; i < OnBasic; i++) {
      baseHeader += "#"
    }
    SetText(cacheText + baseHeader + " Header")
    SetBasic(OnBasic + 1)
  }
  return (
    <div className="flex flex-col fixed w-full h-screen">
      <div className="flex w-full flex-1  border-white">
        <section className="w-60 h-full bg-zinc-800">
          <p className="p-4 text-zinc-300 font-semibold">Simple Editor</p>
          <div className="text-zinc-300 h-full ">
            <button className="p-2 px-4  outline-1  outline-zinc-300 w-full text-left flex justify-between items-center ">Basic </button>
            <div className="flex px-3 py-4 flex-wrap gap-2 justify-between">
              <button onClick={HeaderAction} className="p-5 w-25 border-1 cursor-pointer rounded hover:bg-zinc-700 text-4xl gap-2 flex flex-col items-center"><FaHeading color="white" /> <span className="text-[12pt]">Heading</span></button>

              <button title="ctrl + i" onClick={() => { SetText(Text + "\n-  list\n-  list\n-  list\n") }} className="p-5 w-25 border-1 rounded cursor-pointer hover:bg-zinc-700 text-4xl gap-2 flex flex-col items-center"><FaList color="white" /> <span className="text-[12pt]">List</span></button>

              <button onClick={() => { SetLinkPop(true) }} className="p-5 w-25 border-1 rounded cursor-pointer hover:bg-zinc-700 text-4xl gap-2 flex flex-col items-center"><IoLink color="white" /> <span className="text-[12pt]">Link</span></button>
              <button title="ctrl + b" onClick={() => { KeyboardHandle.splitchar(textArea.current, "**") }} className="p-5 w-25 border-1 rounded cursor-pointer hover:bg-zinc-700 text-4xl gap-2 flex flex-col items-center"><FaBold color="white" /> <span className="text-[12pt]">Bold</span></button>
              <button title="ctrl + i" onClick={() => { KeyboardHandle.splitchar(textArea.current, "*") }} className="p-5 w-25 border-1 rounded cursor-pointer hover:bg-zinc-700 text-4xl gap-2 flex flex-col items-center"><FaItalic color="white" /> <span className="text-[12pt]">italic</span></button>

              <button onClick={() => { SetText(Text + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.") }} className="p-5 w-25 border-1 rounded cursor-pointer hover:bg-zinc-700 text-4xl gap-2 flex flex-col items-center"><GiHelp color="white" /> <span className="text-[12pt]">Lorem</span></button>

              <button className="p-5 w-25 border-1 rounded cursor-pointer hover:bg-zinc-700 text-4xl gap-2 flex flex-col items-center" onClick={()=>{SetImagePop(!imagePop)}}><FaImage color="white" /> <span className="text-[12pt]">Image</span></button>
            </div>
          </div>
        </section>

        <div className="max-w-[90%]  flex-1 flex ">
          <div className="w-[50%]  max-w-[50%]  h-full  border-zinc-300">
            <textarea ref={textArea} value={Text} placeholder="Custom your page here ..." onChange={BufferText} name="" id="" onKeyDown={(event) => { KeyboardHandle!.shortcut!(event) }} className="font-poppins text-[14pt] font-normal bg-[rgb(14,14,14)] text-white w-full h-full p-5 resize-none outline-0"></textarea>
          </div>
          <Markdown
            components={{
              code({ node, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                const text = String(children).replace(/\n$/, "")
                return match ? (
                  <SyntaxHighlight value={text} language={match[1]} />
                ) : (
                  <code className="bg-gray-800 text-green-300 px-1 rounded h-full " {...props}>
                    {children}
                  </code>
                );
              },
            }}
            className="p-5 w-[50%] markdown h-screen overflow-y-scroll ">
            {Text}
          </Markdown>
        </div>

        {(linkPop) ?
          <LinkedPop execute={LinkAction}  /> : ""
        }
        {
          (imagePop) ? 
          <ImagePop execute={ImageAction} user_id={UserData.id}/> : ""
        }

      </div>

      <footer className="bg-gray-600 w-full text-white py-0 px-2 justify-between flex fixed bottom-0">
          <div className="flex gap-2  ">
            <span>Copyright© Yohanes Oktanio</span>
          </div>
        <div className="hidden md:flex gap-4 w-max righ-0">
        <span>last saved [ {Date.toString()} ]</span>
          <span className="p-0 ">{Text.length} lenght</span>
          <span className="">type : markdown</span>
        </div>
      </footer>
    </div>
  )


}
