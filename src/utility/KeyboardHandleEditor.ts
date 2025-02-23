
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

    bold (element : any) {
        console.log(element)
        const {selectionStart , selectionEnd} = element
        if (selectionStart != selectionEnd) {
            const selectionString = String(this.config.text).substring(selectionStart,selectionEnd)
            const newText = 
                this.config.text.substring(0,selectionStart) + 
                `**${selectionString}**` + 
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
            this.bold(event.target)
        }

        if (event.key == "z" && event.ctrlKey) {
            console.log(this.config.history)
            this.config.set_main_text!(this.config.history[-1])
        }
    }
}
