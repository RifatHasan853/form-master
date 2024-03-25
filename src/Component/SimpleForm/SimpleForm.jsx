

const SimpleForm = () => {
    const handleSubmit=e=>{
        e.preventDefauli();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('form submitted');
    }
    return (
        <div>
        <form  onSubmit={handleSubmit}>
            <input type="text" name="name" /><br />
            <input type="email"  name="email"/>
            <input type="text"  name="phone"/>
            <input type="submit" value="submit"  /> <br />
            <button>submit</button>
        </form>
        </div>
    );
};

export default SimpleForm;