import img1 from "../assets/1.jpg";
function About(){
    return(
        <>
            <h1>This is About Page</h1>
            <img src={img1} style={{ width: "300px", height: "300px" }}></img>
        </>
    )
}
export default About;