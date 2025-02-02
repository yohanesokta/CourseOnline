interface HelmetInterface {
    title : string,
    description:string
}

export const Helmet = ({title,description} : HelmetInterface) => {
     document.getElementById("title")!.innerHTML = title

     const titleOG = document.querySelector("meta[property='og:title']");
     if (titleOG) titleOG.setAttribute("content",title);
     const metaDescription = document.querySelector("meta[property='og:description']");
     if (metaDescription) metaDescription.setAttribute("content", description);
     const metaUrl = document.querySelector("meta[property='og:url']");
    if (metaUrl) metaUrl.setAttribute("content", window.location.href);
}

