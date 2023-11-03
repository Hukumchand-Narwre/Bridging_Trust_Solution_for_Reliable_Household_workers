import { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import Loader from "../../UI/PageLoader";
import ImageUploadBox from "./ImageUploadBox";
import { useCommonDetailStore } from "../../store/Auth/common-Detail";
import Button from "../../UI/Button";

const blobSasUrl = import.meta.env.VITE_CONNECTION_STRING;

// Create a new BlobServiceClient
const blobServiceClient = new BlobServiceClient(blobSasUrl);

// Create a unique name for the container by
// appending the current time to the file name
const containerName = import.meta.env.VITE_CONTTAINER_NAME;
// Get a container client from the BlobServiceClient
const containerClient = blobServiceClient.getContainerClient(containerName);

function UploadImage() {
  const [file, setFile] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const { photo_urls, setPhotos } = useCommonDetailStore();
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      setisLoading(true);
      console.log("started uploading");
      const promises = [];
      const blockBlobClient = containerClient.getBlockBlobClient(file.name);
      promises.push(blockBlobClient.uploadBrowserData(file));

      await Promise.all(promises);
      const imageUrl = blockBlobClient.url;
      setPhotos([imageUrl]);
      console.log("done uploading");
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "6.2rem",
      }}
    >
      {photo_urls?.length > 0 ? (
        <div className="flex items-center space-x-4">
          <div
            style={{ height: "14rem", width: "14rem" }}
            className="relative rounded-full overflow-hidden  ring-2 ring-blue-500"
          >
            <img src={photo_urls[0]} alt={`Profile photo of`} className="w-full h-full object-cover " />
          </div>
        </div>
      ) : (
        <>
          {" "}
          <ImageUploadBox handleFileChange={handleFileChange} fileName={file} />
          <Button className="mt-12" size="large" onClick={handleUpload}>
            Add Profile Photo
          </Button>
        </>
      )}
      {isLoading && <Loader />}
    </div>
  );
}

export default UploadImage;