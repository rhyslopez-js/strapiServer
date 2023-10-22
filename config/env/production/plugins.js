module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME', "dj2nddb8t"),
          api_key: env('CLOUDINARY_KEY', "859167137649539"),
          api_secret: env('CLOUDINARY_SECRET', "KRC5TRwah-VFozvwiD5pFFFgo8Q"),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    // ...
  });