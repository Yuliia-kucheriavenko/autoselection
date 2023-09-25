import {ModalBody, FormControl, FormLabel, Input, } from '@chakra-ui/react'

export const ModalsBody: React.FC<{ initialRef: React.RefObject<HTMLInputElement> }> = ({ initialRef}) => {
  return (
    <ModalBody pb={6}>
    <FormControl>
      <FormLabel>Ваше ім'я</FormLabel>
      <Input ref={initialRef} placeholder="Введіть ім'я" />
    </FormControl>

    <FormControl mt={4}>
      <FormLabel>Ваш номер телефону</FormLabel>
      <Input placeholder="Введіть номер телефону" />
    </FormControl>
  </ModalBody>
  )
}