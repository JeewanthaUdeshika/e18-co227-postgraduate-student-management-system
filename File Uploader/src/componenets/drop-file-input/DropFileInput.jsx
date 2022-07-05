import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import storage from "../../fireBaseConfig.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./drop-file-input.css";
import { ImageConfig } from "../../config/ImageConfig";
import uploadImage from "../../assets/cloud-upload-regular-240.png";

const DropFileInput = (props) => {
  const wrapperRef = useRef(null);

  // progress
  const [percent, setPercent] = useState(0);

  const [fileList, setfileList] = useState([]);

  const handleUpload = () => {
    if (!fileList[0]) {
      alert("Please upload an File First!");
    }

    fileList.map((file) => {
      const storageRef = ref(storage, `/files/${file.name}`);

      // progress can be paused and resumed. It also exposes progress updates.
      // Receives the storage reference and the file to upload.
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          // update progress
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
          });
        }
      );
    });
  };

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setfileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setfileList(updatedList);
    props.onFileChange(updatedList);
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label">
          <img src={uploadImage} alt="" />
          <p>Drag & Drop files here</p>
        </div>
        <input type="file" value="" onChange={onFileDrop} />
      </div>

      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          <p className="drop-file-preview__title">Ready to Upload</p>
          {fileList.map((item, index) => (
            <div key={index} className="drop-file-preview__item">
              <img
                src={
                  ImageConfig[item.type.split("/")[1]] || ImageConfig["default"]
                }
                alt=""
              />
              <div className="drop-file-preview__item__info">
                <p>{item.name}</p>
                <p>{item.size}B</p>
              </div>
              <span
                className="drop-file-preview__item__del"
                onClick={() => fileRemove(item)}
              >
                X
              </span>
            </div>
          ))}
        </div>
      ) : null}

      <div className="btn">
        <button type="button" className="btn" onClick={handleUpload}>
          Upload
        </button>
        <p>{percent} % done</p>
      </div>
    </>
  );
};

DropFileInput.prototypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
