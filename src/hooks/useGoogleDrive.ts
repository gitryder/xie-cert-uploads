/**
 * @author Danyl Fernandes <realllydan@gmail.com>
 * @description A helper hook that abstracts Google Drive v3 API transactions.
 */

import { google } from "googleapis";

/**
 * @remarks
 * Add your own client id, secret & refresh-token here.
 * You may generate your OAuth secrets after creating a new project.
 *
 * @reference https://developers.google.com/workspace/guides/create-project
 */
const CLIENT_ID =
  "";
const CLIENT_SECRET = "";
const REFRESH_TOKEN =
  "";

const REDIRECT_URI = "";

const oAuthClient = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuthClient.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: "v3",
  auth: oAuthClient,
});

/**
 * !IMPORTANT: Replace the fs.createReadStream(file), with something browser-friendly.
 *
 * @param {*} file
 * @param {*} fileUploadName
 * @param {*} fileMimeType
 * @returns
 */
const uploadFileToDrive = (file, fileUploadName, fileMimeType) => {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: fileUploadName,
        mimeType: fileMimeType,
      },
      media: {
        mimeType: fileMimeType,
        body: fs.createReadStream(file),
      },
    });
  } catch (err) {
    return err;
  }
};

const makeDriveFilePubliclyAccessible = (fileId) => {
  try {
    const response = await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });
  } catch (err) {
    return err;
  }
};

const deleteFileFromDrive = (fileId) => {
  try {
    const response = await drive.files.delete({
      fileId: fileId,
    });
  } catch (err) {
    return err;
  }
};

const;

const getFilePublicViewUrl = (fileId) => {
  try {
    const response = await drive.files.get({
      fileId: fileId,
      fields: "webViewLink",
    });
  } catch (err) {
    return err;
  }
};

const getFilePublicDownloadUrl = (fileId) => {
  try {
    const response = await drive.files.get({
      fileId: fileId,
      fields: "webContentLink",
    });
  } catch (err) {
    return err;
  }
};
