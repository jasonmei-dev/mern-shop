import path from 'path';
import express from 'express';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, 'uploads/');
  },
  filename(req, file, callback) {
    callback(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const checkFileType = (file, callback) => {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname)).toLowerCase();
  const mimetype = filetypes.test(file.mimtype);

  if (extname && mimetype) {
    return callback(null, true);
  } else {
    callback('Images only!', false);
  }
};

const upload = multer({
  storage,
  checkFileType,
});

router.post('/', upload.single('image'), (req, res) => {
  res.send({
    message: 'Image uploaded',
    image: `/${req.file.path}`,
  });
});

export default router;
