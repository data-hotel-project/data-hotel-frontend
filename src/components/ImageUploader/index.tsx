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
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  errors: FieldErrors<TRoomUpdateData>;
  register: UseFormRegister<any>;
  getValues: UseFormGetValues<any>;
  imagesField: string[];
  setImagesField: React.Dispatch<React.SetStateAction<string[]>>;
}

const ImageUploader = ({
  onChange,
  errors,
  register,
  getValues,
  imagesField,
  setImagesField,
}: iImageUploader) => {
  return (
    <>
      <Input
        id="image"
        label="Image"
        type="file"
        errorMessage={errors.image?.message}
        register={register}
        getValues={getValues}
        onChange={onChange}
      />

      {imagesField.map((_, i) => {
        const dynamicErrorImage = `image${i + 2}` as keyof typeof errors;

        return (
          <Input
            key={i}
            id={`image${i + 2}`}
            label={`Image${i + 2}`}
            type="file"
            errorMessage={errors[dynamicErrorImage]?.message}
            register={register}
            getValues={getValues}
            onChange={onChange}
          />
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
            onClick={() => setImagesField([...imagesField, ""])}
          >
            Add image field
          </Button>
        </BoxButtonAddImage>
      )}
    </>
  );
};

export default ImageUploader;
