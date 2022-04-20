import { Storage } from '@google-cloud/storage'
import path from "path"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))

// Firebase init
const storage = new Storage({
      projectId: "user-uploads-v1",
      keyFilename: path.join(__dirname, "../user-uploads-v1-5e802846fba2.json")
});

const bucket = storage.bucket("user-uploads-v1.appspot.com");

// Upload image to storage function 
const uploadImageToStorage = (file,folderPath) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject("No image file");
    }
    
    let newFileName = `${file.originalname}_${Date.now()}`;

    let fileUpload = bucket.file(folderPath + newFileName);

    const blobStream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    
    });

    blobStream.on("error", (error) => {
      reject(error);
    });

    blobStream.on("finish", () => {
      // The public URL can be used to directly access the file via HTTP.
      const url = `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`;
      resolve(url);
    });

    blobStream.end(file.buffer);
  });
};

export default uploadImageToStorage;