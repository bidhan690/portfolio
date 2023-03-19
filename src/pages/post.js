import { useState } from "react";

export default function Post() {
  const [formData, setFormData] = useState({
    projectName: "",
    techUsed: "",
    overviewText: "",
    imageLink: "",
    demoLink: "",
    codeLink: "",
    techArray: [],
  });
  const [tech, setTech] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    const text = tech.split(" ");
    const projectName = e.target.elements.projectName.value;
    const techUsed = e.target.elements.techUsed.value;
    const overviewText = e.target.elements.overviewText.value;
    const imageLink = e.target.elements.imageLink.value;
    const demoLink = e.target.elements.demoLink.value;
    const codeLink = e.target.elements.codeLink.value;

    setFormData({
      ...formData,
      projectName,
      techUsed,
      overviewText,
      imageLink,
      demoLink,
      codeLink,
      techArray: text,
    });
    console.log(formData);
  }

  async function submitData() {
    const res = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div className="absolute top-[140px] ">
      <form onSubmit={submitHandler} className="flex flex-col">
        <h1>Form</h1>
        <label>Project Name:</label>
        <input name="projectName" />
        <label>Tech Used</label>
        <input name="techUsed" />
        <label>Overview Text</label>
        <textarea rows={3} name="overviewText" />
        <label>Image Link</label>
        <input name="imageLink" />
        <label>Demo Link</label>
        <input name="demoLink" />
        <label>Code Link</label>
        <input name="codeLink" />
        <label>Technology Array</label>
        <input value={tech} onChange={(e) => setTech(e.target.value)} />
        <button className="mt-6 p-2">Save State</button>
      </form>
      <button className="m-2 p-2 " onClick={submitData}>
        Submit
      </button>
    </div>
  );
}
