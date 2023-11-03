import { useState } from "react";
import UplodSvg from "./Upload";
import classes from "./ImageUploadBox.module.css";
const ImageUploadBox = ({ handleFileChange, fileName }) => {
  const [image, setImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.includes("image")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={classes.imageUploadBox}
    >
      <div
        style={{
          border: "2px dashed #ccc",
          height: "15rem",
          borderRadius: 10,
          backgroundColor: "#eaeaea",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {image || fileName ? (
          <>
            {image && <img src={image} alt="Uploaded" style={{ maxWidth: "100%", maxHeight: "200px" }} />}
            {fileName && (
              <div className={classes.flex}>
                <h4>{fileName.name}</h4>
                <p>Selected Image</p>
              </div>
            )}
          </>
        ) : (
          <div className={classes.flex}>
            <UplodSvg />
            <p>Drag and drop an image here</p>
            <input
              type="file"
              id="files"
              style={{ display: "none" }}
              accept=".jpg,.jpeg,.gif,.png,.pdf"
              onChange={handleFileChange}
            />
            <label htmlFor="files" className={classes.button}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#fffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 3H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h3m2.5-18L19 8.625M13.5 3v4.625a1 1 0 0 0 1 1H19m0 0v3.188M17 15v3m0 3v-3m0 0h-3m3 0h3"
                />
              </svg>{" "}
              Add file
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploadBox;
