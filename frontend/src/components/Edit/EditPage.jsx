import { useState } from "react";
import InputField from "../InputField/InputField";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/userSlice";
import { updateUser } from "../../redux/apiRequest";

const EditPage = (props) => {
const {setEdit}=props;

  const avaURL = [
    `https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp`,
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1deiElwtkBlHakaz_dkdZLTdjEdiBbBEIiL_fGFnPyV5IXLxnvD8beLZFFY4jjUY4zU&usqp=CAU`,
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcSvO6siJH96xZYH16TqhGg3FqFT49C_D2HL9rUhV7zhzWsqBViDzewV8Uu2QIYHXu5Q&usqp=CAU`,
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGBxaYdGHEpJ9001ON09kQBXAnqZaCYG3--fcJQUAIbkQAjWc-BpxmbgwJrzURi0j8gc&usqp=CAU`,
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0x2UNCjwcku2kCU-NZD1JgioT190LmTq61dQYAgeVSh3mmab9YRg7zQY_mLlUn70PmpA&usqp=CAU`,
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMCxb5coWox9f8UmwHwAhIHmff8chQnQzr7j1bBroZRC2lflfns6viy2l8d86md-q7Oxw&usqp=CAU`,
  ];

  const user = useSelector((state)=>state.user)
  const dispatch = useDispatch();
  const [name, setName] = useState("Daniel");
  const [age, setAge] = useState("22");
  const [about, setAbout] = useState("ASDSD");
  const [theme, setTheme] = useState("white");
  const [url, setUrl] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    setEdit(false)

    const updatedUser = {
      name: name,
      age: age,
      about: about,
      avaURL: url,
      themeColor: theme
    };
updateUser(updatedUser,dispatch);
  };


  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <section className="edit-container">
          <button className="close">Save</button>

          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <InputField label="Display name" data={user.name} setData={setName} />

            <InputField label="Age" data={user.age} setData={setAge} />

            <InputField inputType='textarea' label="About" 
            data={user.about} setData={setAbout} />

            <label htmlFor="">Profile picture</label>
            <div className="input-image-container">
              {avaURL.map((url, index) => {
                return (
                  <>
                    <img
                      key={index}
                      onClick={(e) => setUrl(e.target.src)}
                      src={url}
                      alt=""
                    />
                  </>
                );
              })}

              <div className="theme-container">
                <label htmlFor="">Theme</label>
                <input
                  type="color"
                  className="theme-color"
                  onChange={(e) => setTheme(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default EditPage;
