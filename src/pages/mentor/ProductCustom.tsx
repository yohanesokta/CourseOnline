import { FaHeading, FaImage } from "react-icons/fa"
import { IoLink } from "react-icons/io5"
import Markdown from "react-markdown"
import "../../markdown.css"
import { useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const ProductCustom = () => {
  const [Text,SetText] = useState<string>("")
  const SyntaxHighlight = ({value = "",language}:{value:any,language:any}) => {
    return (
      <SyntaxHighlighter language={language ?? ""} style={docco}>
        {value ?? ""}
      </SyntaxHighlighter>
    )
  }

  return (
    <div className="flex  w-full fixed h-screen">
    <section className="w-60 h-full bg-zinc-800">
      <p className="p-4 text-zinc-300 font-semibold">Simple Editor</p>
      <div className="text-zinc-300 h-full ">
        <button className="p-2 px-4  outline-1  outline-zinc-300 w-full text-left flex justify-between items-center ">Basic </button>
        <div className="flex px-3 py-4 flex-wrap gap-2 justify-between">
          <button className="p-5 w-25 border-1 cursor-pointer rounded hover:bg-zinc-700 text-4xl gap-2 flex flex-col items-center"><FaHeading color="white"/> <span className="text-[12pt]">Heading</span></button>
          <button className="p-5 w-25 border-1 rounded cursor-pointer hover:bg-zinc-700 text-4xl gap-2 flex flex-col items-center"><FaImage color="white"/> <span className="text-[12pt]">Image</span></button>
          <button className="p-5 w-25 border-1 rounded cursor-pointer hover:bg-zinc-700 text-4xl gap-2 flex flex-col items-center"><IoLink color="white"/> <span className="text-[12pt]">Link</span></button>
        </div>
      </div>
    </section>
    
    <div className="flex-1 flex bg-white">
      <div className="w-[50%] h-full  border-zinc-300">
        <textarea placeholder="Custom your page here ..."  onChange={(e) => {SetText(e.target.value)}} name="" id="" className="font-poppins text-[14pt] font-normal bg-black text-white w-full h-full p-5 resize-none outline-0"></textarea>
      </div>
      <Markdown
      components={{
        code({ node, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          const text = String(children).replace(/\n$/, "")
          return match ? (
            <SyntaxHighlight value={text}  language={match[1]}/>
          ) : (
            <code className="bg-gray-800 text-green-300 px-1 rounded h-full l" {...props}>
              {children}
            </code>
          );
        },
      }}
      className="p-5 w-[50%] markdown h-screen overflow-y-scroll">
        {Text}
      </Markdown>
    </div>
    </div>
  )

  
}
