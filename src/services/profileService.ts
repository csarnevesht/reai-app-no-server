// import { google } from 'googleapis';
// import { OAuth2Client } from 'google-auth-library';

// const CLIENT_ID = '644581676766-ian5pmgkasaet7rt5n1euv72ni9nc42f.apps.googleusercontent.com';
// const CLIENT_SECRET = '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';
// const REDIRECT_URI = 'http://localhost:5173/oauth2callback';
// const REFRESH_TOKEN = 'YOUR_REFRESH_TOKEN';

// console.log('creating oauth2 client');
// const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
// console.log('oauth2 client created');
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// const drive = google.drive({ version: 'v3', auth: oAuth2Client });

// export const getProfile = async (userId: string) => {
//   try {
//     const response = await drive.files.get({
//       fileId: 'profile.json',
//       alt: 'media',
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching profile:', error);
//     return null;
//   }
// };

// export const updateProfile = async (userId: string, profile: any) => {
//   try {
//     await drive.files.update({
//       fileId: 'profile.json',
//       media: {
//         mimeType: 'application/json',
//         body: JSON.stringify(profile),
//       },
//     });
//   } catch (error) {
//     console.error('Error updating profile:', error);
//   }
// };

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// import { google } from 'googleapis';
// import { OAuth2Client } from 'google-auth-library';

// const CLIENT_ID = '644581676766-ian5pmgkasaet7rt5n1euv72ni9nc42f.apps.googleusercontent.com';
// const CLIENT_SECRET = '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';
// const REDIRECT_URI = 'http://localhost:5173/oauth2callback';
// const REFRESH_TOKEN = 'YOUR_REFRESH_TOKEN';

// console.log('creating oauth2 client');
// const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
// console.log('oauth2 client created');
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// const drive = google.drive({ version: 'v3', auth: oAuth2Client });

export const getProfile = async (userId: string) => {
  try {
    // const response = await drive.files.get({
    //   fileId: 'profile.json',
    //   alt: 'media',
    // });
    // return response.data;
    console.error('Error fetching profile: feature not implemented yet');
    return null;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
};

export const updateProfile = async (userId: string, profile: any) => {
  try {
    // await drive.files.update({
    //   fileId: 'profile.json',
    //   media: {
    //     mimeType: 'application/json',
    //     body: JSON.stringify(profile),
    //   },
    // });
  } catch (error) {
    console.error('Error updating profile:', error);
  }
};