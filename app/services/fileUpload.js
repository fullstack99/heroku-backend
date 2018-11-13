// const AWS = require('aws-sdk');
// const multer = require('multer');
// const async = require('async');
// const config = require('../../config/aws');
// const fs = require('fs');

// AWS.config.update({
//     accessKeyId: config.aws.access_key_id,
//     secretAccessKey: config.aws.secret_access_key
// })

// const s3 = new AWS.S3();

// const uploadUrl = 'https://s3.eu-central-1.amazonaws.com/';

// module.exports = {
//     uploadPhoto(req, callback) {
//         let userId;
//         if(req.params.userId) {
//             userId = req.body.userId;
//         } else if(req.body.createdById) {
//             userId = req.body.createdById;
//         }

//         const bucketName = "unyte";
//         const files = req.body.files

//         // if bucket exists
//         let fileUrl = []
//         async.parallel(
//             files.map((file, index) => {
//                 return callback => {
//                     s3.headBucket({Bucket: bucketName}, function(err, data) {
//                         var fileName = new Date().getTime();
//                         if (err){
//                             s3.createBucket({Bucket: bucketName}, function(err, data) {
//                                 if (err){
//                                     res.status(400).send(err.code);
//                                 }
//                                 else{

//                                     buf = new Buffer(file.replace(/^data:image\/\w+;base64,/, ""),'base64')

//                                     var params = {
//                                         Bucket: bucketName,
//                                         Key: 'uploads/' + userId + '/' + fileName + '.jpeg',
//                                         Body: buf,
//                                         ContentEncoding: 'base64',
//                                         ContentType: 'image/jpeg',
//                                         ACL:'public-read'
//                                     };
//                                     s3.putObject(params, function(perr, pres){
//                                         if (err) {
//                                         //    res.status(400).send(perr);
//                                             callback(err)
//                                         } else {
//                                             fileUrl.push(uploadUrl + params.Key)
//                                             callback(null, 'success');
//                                         }
//                                     });
//                                 }
//                             });
//                         } else {
//                             buf = new Buffer(file.replace(/^data:image\/\w+;base64,/, ""),'base64')

//                             var params = {
//                                 Bucket: bucketName,
//                                 Key: 'uploads/' + userId + '/' + fileName + '.jpeg',
//                                 Body: buf,
//                                 ContentEncoding: 'base64',
//                                 ContentType: 'image/jpeg',
//                                 ACL:'public-read'
//                             };
//                             s3.putObject(params, function(perr, pres){
//                                 if (err) {
//                                 //    res.status(400).send(perr);
//                                     callback(err)
//                                 } else {
//                                     fileUrl.push(uploadUrl + params.Key)
//                                     callback(null, 'success');
//                                 }
//                             });
//                         }
//                     });
//                 }
//             }),
//             (err, results) => {
//                 if (err) {
//                     res.status(422).send({ success: false, error: err });
//                 } else {
//                     callback(null, fileUrl)
//                 }
//             }
//         )

//     }
// }
