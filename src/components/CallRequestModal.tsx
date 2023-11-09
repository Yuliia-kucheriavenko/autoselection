import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

// Схема валідації для форми
const schema = yup
  .object({
    name: yup.string().required("Будь ласка, введіть ваше ім'я"),
    phone: yup.string().required("Будь ласка, введіть ваш номер телефону"),
  })
  .required();

interface FormValues {
  name: string;
  phone: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CallRequestModal = ({ isOpen, onClose }: Props) => {
  const toast = useToast();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      emailjs.send(
        "service_szzq9qh",
        "template_er5cjwf",
        {
          from_name: "autopodbor",
          name: data.name,
          phone: data.phone,
        },
        "I0yx70ttCKY4P5Sr_",
      );
      toast({
        title: "Запит на зворотній дзвінок відправлено.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      onClose();
    } catch (error) {
      console.log(error);
      toast({
        title: "Помилка при відправці запиту.",
        description: "Не вдалося відправити запит.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent zIndex={9999} bg="white" p={5}>
        <ModalHeader>Замовити зворотній дзвінок</ModalHeader>
        <ModalCloseButton />
        <FormControl isInvalid={!!errors.name}>
          <FormLabel>Ваше ім'я</FormLabel>
          <Controller
            name="name"
            control={control as any}
            render={({ field }) => (
              <Input {...field} placeholder="Введіть ім'я" />
            )}
          />
          {errors.name && <Text color="red.500">{errors.name.message}</Text>}
        </FormControl>

        <FormControl mt={4} isInvalid={!!errors.phone}>
          <FormLabel>Ваш номер телефону</FormLabel>
          <Controller
            name="phone"
            control={control as any}
            render={({ field }) => (
              <Input
                type="number"
                {...field}
                placeholder="Введіть номер телефону"
              />
            )}
          />
          {errors.phone && <Text color="red.500">{errors.phone.message}</Text>}
        </FormControl>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={handleSubmit(onSubmit as any)}
          >
            Замовити
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CallRequestModal;
