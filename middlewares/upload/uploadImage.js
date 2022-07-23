const multer = require('multer')
//upload ảnh test

const uploadImage = () => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./public/img")

        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + "_" + file.originalname)
        }
    })
    const upload = multer({
        storage: storage,
        fileFilter: (req, file, cb) => {
            const extentionImageList = [".jpg", ".png"];
            const extention = file.originalname.slice(-4);
            check = extentionImageList.includes(extention)
            if (check) {
                cb(null, true)
            }
            else {
                cb(new Error("Extention không phù hợp"))
            }


        }
    })
    return upload.single('uploaded_file');
}
module.exports = {
    uploadImage
}
