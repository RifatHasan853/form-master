import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";


const Dad = ({asset}) => {
    return (
        <div>
            <h2>Dad</h2>
            <Myself asset={asset}></Myself>
            <Brother></Brother>
            <Sister></Sister>
        </div>
    );
};

export default Dad;