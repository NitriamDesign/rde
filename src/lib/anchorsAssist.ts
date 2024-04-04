
export function handleAnchorClick (event:any, anchorId: string, offset:number) {
    event.preventDefault();
    const anchor = document.getElementById(anchorId);

    if(anchor) {
        window.scrollTo({
            top: anchor.offsetTop - offset,
            behavior: 'smooth'
        })
    }
}