
interface Config {
    text: string;
    set_text: ((text: string) => void) | null;
    set_main_text: ((text: string) => void) | null;
    history : string[]
}

export class EditorAction {
    config: Config;

    constructor(config: Config) {
        this.config = config;
    }
    
    
    tab (element:any) {
        element.focus()
        if (this.config.set_text) {
            const {selectionStart , selectionEnd} = element!
            this.config.set_text(
                this.config.text.substring(0,selectionStart) + 
                "    "
                + this.config.text.substring(selectionEnd)                                                     

            )
            setTimeout(() => {
                element.selectionStart = element.selectionEnd = selectionEnd + 4;
              }, 0);
        }
    }

    splitchar (element : any, char : string) {
        console.log(element)
        const {selectionStart , selectionEnd} = element
        if (selectionStart != selectionEnd) {
            const selectionString = String(this.config.text).substring(selectionStart,selectionEnd)
            const newText = 
                this.config.text.substring(0,selectionStart) + 
                char + selectionString + char + 
                this.config.text.substring(selectionEnd)

            this.config.set_text!(newText)
            setTimeout(()=>{
                element.selectionStart = element.selectionEnd = selectionEnd + 4
            },0)
        }
      }
    
    shortcut(event: any) {
        if (event.key === "Tab") {
            event.preventDefault();
           this.tab(event.target)
        }

        if (event.key == "b" && event.ctrlKey) {
            this.splitchar(event.target,"**")
        }

        if (event.key == "z" && event.ctrlKey) {
            this.config.set_main_text!(this.config.history.pop() || "")
        }
        if (event.key == "i" && event.ctrlKey) {
            this.splitchar(event.target,"*")
        }
        if (event.key == "s" && event.ctrlKey) {
            event.preventDefault(   )
        }
    }
}
