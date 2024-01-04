import React from "react";
import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";
import { TRoomUpdateData } from "../../validators/roomValidators";
import Input from "../Input";
import { BoxButtonAddImage } from "../Forms/UpdateRoomForm/style";
import Button from "../Button";

interface iImageUploader {
  getFileName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: FieldErrors<TRoomUpdateData>;
  register: UseFormRegister<any>;
  getValues: UseFormGetValues<any>;
  imagesField: string[];
  setImagesField: React.Dispatch<React.SetStateAction<string[]>>;
}

const ImageUploader = ({
  getFileName,
  errors,
  register,
  getValues,
  imagesField,
  setImagesField,
}: iImageUploader) => {
  // const handleRemoveImageField = (fieldName: string) => {
  //   const updatedImages = imagesField.filter((field) => field !== fieldName);
  //   setImagesField(updatedImages.sort());
  // };

  const removedIndexes = imagesField
    .map((field) => Number(field.match(/\d+/)?.[0]))
    .filter((index) => !isNaN(index));

  const getNextIndex = () => {
    for (let i = 2; i <= 5; i++) {
      if (!removedIndexes.includes(i)) {
        return i;
      }
    }
    return 5;
  };

  const getNextFieldName = () => `Image${getNextIndex()}`;

  return (
    <>
      <Input
        id="image"
        label="Image"
        type="file"
        errorMessage={errors.image?.message}
        register={register}
        getValues={getValues}
        onChange={getFileName}
      />

      {imagesField.map((fieldName, i) => {
        return (
          <div key={i}>
            <Input
              id={fieldName.toLowerCase()}
              label={fieldName}
              type="file"
              errorMessage={errors[fieldName.toLowerCase()]?.message}
              register={register}
              getValues={getValues}
              onChange={getFileName}
            />

            {/* <Button
              size="small"
              backgroundColor="#d9534f"
              backgroundColorHover="#c9302c"
              fontColor="#ffffff"
              fontColorHover="#ffffff"
              type="button"
              onClick={() => handleRemoveImageField(fieldName)}
            >
              Remove
            </Button> */}
          </div>
        );
      })}

      {imagesField.length < 4 && (
        <BoxButtonAddImage>
          <Button
            size="medium"
            backgroundColor="#698d60"
            backgroundColorHover="#2f5526"
            fontColor="#100909"
            fontColorHover="#d7c6c6"
            type="button"
            onClick={() =>
              setImagesField([...imagesField, getNextFieldName()].sort())
            }
          >
            Add image field
          </Button>
        </BoxButtonAddImage>
      )}
    </>
  );
};

export default ImageUploader;
