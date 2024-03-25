import Friend from "../Friend/Friend";


const Cousin = ({name}) => {
    return (
        <div>
             <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
            {name==='rifat' && <Friend></Friend>}
            </section>
           
        </div>
        </div>
    );
};

export default Cousin;