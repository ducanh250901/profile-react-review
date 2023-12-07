import { useSelector } from "react-redux";

const Header = (props) => {
  const { setEdit } = props;

  const user = useSelector((state)=>state.user)

  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <header style={{backgroundColor:`${user.themeColor}`}}>
      <div className="infor-container">
        <div className="info-edit" onClick={handleEdit}>
          Edit
        </div>

        <img src={user.avaURL} alt="" className="info-ava" />
        <div className="info-username">{user.name}</div>
        <div className="infor-age">{user.age}</div>
        <div className="info-about">{user.about}</div>
      </div>
    </header>
  );
};

export default Header;
