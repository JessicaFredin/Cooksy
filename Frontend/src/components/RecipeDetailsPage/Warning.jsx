{/*import WarningImg from "../assets/images/warning.png"*/}



function Warning({title}){


    return(
        <div className="flex items-center ">
           {/* <img className="w-8" src={WarningImg}/>*/}
            <span>⚠</span>
            <h5 className="font-medium">{title}</h5>
        </div>
    )
}

export default Warning;