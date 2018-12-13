const path = require("path");
const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");

// Configure aws s3 SDK (update authentication)
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const s3 = new AWS.S3();

const myBucket = process.env.S3_BUCKET_NAME;

// Multer upload (Use multer-s3 to save directly to AWS instead of locally)
module.exports.uploadImg = multer({
  storage: multerS3({
    s3: s3,
    bucket: myBucket,
    // Set public read permissions
    acl: "public-read",
    // Auto detect contet type
    contentType: multerS3.AUTO_CONTENT_TYPE,
    // Set key/ filename as original uploaded name
    filename: function(req, file, cb) {
      cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    }
  }),
  limits: {
    fileSize: 1000000
  }
}).single("img");

// Multer upload (Use multer-s3 to save directly to AWS instead of locally)
module.exports.uploadPDF = multer({
  storage: multerS3({
    s3: s3,
    bucket: myBucket,
    // Set public read permissions
    acl: "public-read",
    // Auto detect contet type
    contentType: multerS3.AUTO_CONTENT_TYPE,
    // Set key/ filename as original uploaded name
    filename: function(req, file, cb) {
      cb(null, "BOOK-" + Date.now() + path.extname(file.originalname));
    }
  }),
  limits: {
    fileSize: 1000000
  }
}).single("pdf");
