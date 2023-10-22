module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('dj2nddb8t'),
          api_key: env('859167137649539'),
          api_secret: env('KRC5TRwah-VFozvwiD5pFFFgo8Q'),
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