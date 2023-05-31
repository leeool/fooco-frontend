import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "src/api/firebaseConfig"

const uploadImage = async (file: File, username: string) => {
  const storageRef = ref(storage, username)

  const uploadedImage = await uploadBytes(storageRef, file).then((res) => res)

  const url = getDownloadURL(uploadedImage.ref).then((url) => url)

  return url
}

export { uploadImage }
