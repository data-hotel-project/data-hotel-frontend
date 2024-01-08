import Button from "@components/Button";
import ImageUploader from "@components/ImageUploader";
import Input from "@components/Input";
import { useAuth } from "@contexts/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { iRoom } from "@interface/room";
import {
  TRoomUpdateData,
  roomSchemaUpdateForm,
} from "@validators/roomValidators";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { StyledForm } from "./style";
import { useRoomStore } from "@stores/RoomStore/useRoomStore";

interface iRoomUpdateForm {
  currentRoom: iRoom;
}

const UpdateRoomForm = ({ currentRoom }: iRoomUpdateForm) => {
  const { setShowModal, hotelId, token } = useAuth();
  const updateRoom = useRoomStore((state) => state.actions.updateRoom);

  const [imagesField, setImagesField] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<{
    [key: string]: File | undefined;
  }>({
    image: undefined,
    image2: undefined,
    image3: undefined,
    image4: undefined,
    image5: undefined,
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<TRoomUpdateData>({
    resolver: zodResolver(roomSchemaUpdateForm),
  });

  const getFileName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const file = e.target.files?.[0];
    let spanTarget = e.target.offsetParent?.children[2];

    spanTarget!.innerHTML = file ? file.name : "Choose an image";

    setSelectedFiles((prevSelectedFiles) => ({
      ...prevSelectedFiles,
      [id]: file,
    }));
  };

  const buildFormData = (data: TRoomUpdateData): FormData => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        if (typeof value === "number" || typeof value === "string") {
          formData.append(key, String(value));
        } else if (typeof value === "object") {
          formData.append(key, value as Blob);
        }
      }
    });

    return formData;
  };

  const onSubmit = async (data: TRoomUpdateData) => {
    const updatedData = { ...data, ...selectedFiles };

    const formData = buildFormData(updatedData);

    // const formDataObject: Record<string, string | Blob> = {};
    // formData.forEach((value, key) => {
    //   formDataObject[key] = value;
    // });

    await updateRoom(formData, currentRoom.id, hotelId, token);

    setShowModal("");
  };

  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmit)}
      $labelbackground={"#aba9a9"}
      $labelcolor={"#000"}
      $inputscolor={"#000"}
      encType="multipart/form-data"
    >
      <div className="boxInputsOfNumber">
        <Input
          id="number"
          label="Number"
          type="number"
          errorMessage={errors.number?.message}
          register={register}
          getValues={getValues}
          defaultValue={currentRoom.number}
        />

        <Input
          id="quantity"
          label="Quantity"
          type="number"
          errorMessage={errors.quantity?.message}
          register={register}
          getValues={getValues}
          defaultValue={currentRoom.quantity}
        />

        <Input
          id="status"
          label="Status"
          type="text"
          errorMessage={errors.status?.message}
          register={register}
          getValues={getValues}
          defaultValue={currentRoom.status}
        />
      </div>

      <Input
        id="departure_date"
        label="Departure Date"
        type="text"
        errorMessage={errors.departure_date?.message}
        register={register}
        getValues={getValues}
        defaultValue={currentRoom.departure_date}
      />

      <Input
        id="guest"
        label="Guest"
        type="text"
        errorMessage={errors.guest?.message}
        register={register}
        getValues={getValues}
        defaultValue={currentRoom.guest}
      />

      <ImageUploader
        errors={errors}
        register={register}
        getValues={getValues}
        getFileName={getFileName}
        imagesField={imagesField}
        setImagesField={setImagesField}
      />

      <Button size="medium">Save</Button>
    </StyledForm>
  );
};

export default UpdateRoomForm;
