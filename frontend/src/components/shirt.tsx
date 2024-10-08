import { ShirtProps } from "./shirtprops"

function Shirt(props:ShirtProps){
    console.log("inside shirt",props);
    return(
        <div>
                 <img 
                src="https://media.istockphoto.com/id/482948743/photo/blank-white-t-shirt-front-with-clipping-path.webp?s=2048x2048&w=is&k=20&c=dJlWzxT8y6grh7CIARDbHPsM--Dyg0C0XOxH3XRfLdo="
                alt="new"
                />
            <div>{props.size}</div>
            <div>{props.color}</div>
            <div>{props.brand}</div>
            <div>{props.material}</div>
        </div>
    )
}

export default Shirt