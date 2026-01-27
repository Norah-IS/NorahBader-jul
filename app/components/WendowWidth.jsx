import { useEffect,useState } from "react";
function WendowWidth() {
    const[widthth,setwidth] = useState(window.innerWidth);
    function handleResize(){setwidth(window.innerWidth);}
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div>
            <h2>window width is : {widthth} px</h2>
        </div>
    )

}
export default WendowWidth;
