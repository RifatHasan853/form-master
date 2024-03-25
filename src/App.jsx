
import './App.css'
import Grandpa from './Component/Grandpa/Grandpa'
import HookForm from './Component/HookForm/HookForm'
import RefForm from './Component/RefForm/RefForm'
import ReusableForm from './Component/ReuseableForm/ReuseableForm'
//import SimpleForm from './Component/SimpleForm/SimpleForm'
//import StatefulForm from './Component/StatefulForm/StatefulForm'

function App() {
  const handleSingUpSubmit = data => {
       console.log('sign up data', data);
     }
  
     const handleUpdateProfile = data => {
       console.log('update profile', data);
     }
  return (
    <>
     
      <h1>Vite + React</h1>
     {/* <SimpleForm></SimpleForm> */}
     {/* <StatefulForm></StatefulForm> */} 
      <RefForm></RefForm>
      <HookForm></HookForm>
      <ReusableForm
        formTitle={'Sign UP'}
        handleSubmit={handleSingUpSubmit}>
          <div>
            <h2>Sing UP</h2>
            <p>please sign up right now</p>
          </div>
        </ReusableForm>
      <ReusableForm
        formTitle={'Profile Update'}
        handleSubmit={handleUpdateProfile}
        submitBtnText='Update'>
          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile updated</p>
          </div>
        </ReusableForm>
        <Grandpa></Grandpa>
      
    </>
  )
}

export default App
