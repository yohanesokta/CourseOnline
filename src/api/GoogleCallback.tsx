import { useSearchParams } from "react-router"

export const GoogleCallback = () => {
    const [SearchParams] = useSearchParams()
    const token = SearchParams.get("token")
    return (<>
            <textarea name="" id="" className="w-[700px] h-20">
            {token}
        </textarea>
    </>
    )
}
