import { useState } from "react";
import InputField from "../InputField/InputField";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";


const MakePost = (props) => {
  const { setOpen } = props;
  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Add description");
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];

  const [selectedIdx, setSetlectIdx] = useState(0);
  const dispatch = useDispatch()

  const handlePost = () => {
    setOpen(false);
    const newPost = {
      title: title,
      description: desc,
      tag: selectedIdx,
    };
    dispatch(createPost(newPost))
  };

  return (
    <section
      className="makepost-container"
      style={{
        display: "flex",
        width: "auto",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handlePost}>
          Post
        </p>
      </div>

      <InputField
        data={title}
        inputType="textarea"
        setData={setTitle}
        label="Title"
      />

      <InputField
        data={desc}
        inputType="textarea"
        setData={setDesc}
        label="Description"
      />

      <label htmlFor="">Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, index) => {
          return (
            <button
              key={index}
              className={`{${
                selectedIdx === index
                  ? `makepost-tags-selected`
                  : `makepost-tags-${tag}`
              }}`}
              onClick={() => setSetlectIdx(index)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default MakePost;
