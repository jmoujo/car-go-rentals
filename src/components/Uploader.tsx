import { Button } from '@mantine/core';
import { CldUploadWidget, CldUploadWidgetPropsOptions } from 'next-cloudinary';
import React from 'react';
import { toast } from 'react-toastify';
import { useUserProfileContext } from '@/context/UserProfileContext';

interface Props {
  updateAvatar: (url: string) => Promise<void>;
}
export const Uploader = ({ updateAvatar }: Props) => {
  const options: CldUploadWidgetPropsOptions = {
    sources: ['local'],
    maxFiles: 1,
    multiple: false,
    cropping: true,
    croppingAspectRatio: 1,
    showSkipCropButton: false,
    singleUploadAutoClose: true,
    showPoweredBy: false,
    maxFileSize: 1000000, //1MB
  };

  return (
    <>
      <CldUploadWidget
        uploadPreset="uexvi0k1"
        signatureEndpoint="/api/sign"
        onUpload={async (result, widget) => {
          const info: any = result?.info;
          await updateAvatar(info.secure_url);
          widget.close();
          toast.success('Profile photo updated');
        }}
        options={options}
      >
        {({ open }) => {
          function handleOnClick(e: any) {
            e.preventDefault();
            open();
          }
          return (
            <Button variant="outline" onClick={handleOnClick}>
              Upload image
            </Button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};
