import Cousin from "../Cousin/Cousin";

const Uncle = ({name}) => {
    return (
        <div>
            <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Rafsan'} ></Cousin>
                <Cousin name={'Sohana'}></Cousin>
            </section>
        </div>
        </div>
    );
};

export default Uncle;