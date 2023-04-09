import React, { useState } from 'react';
import { Stack, ListItem, Input, Button, Text, Checkbox } from '@chakra-ui/react';
import { EditIcon, CheckIcon, CloseIcon, DeleteIcon } from '@chakra-ui/icons';

export default function TodoItem() {
  const [isModify, setIsModify] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  return (
    <>
      {isModify ? (
        <form>
          <Stack flexDirection={'row'} align={'center'} justify='space-between'>
            <Input w={'200px'} h={8} />
            <Button bg={'inherit'} w={2}>
              <CheckIcon />
            </Button>
            <Button
              bg={'inherit'}
              w={2}
              onClick={() => {
                setIsModify(!isModify);
              }}
            >
              <CloseIcon />
            </Button>
          </Stack>
        </form>
      ) : (
        <ListItem listStyleType={'none'}>
          <Stack flexDirection={'row'} align={'center'} justify='space-between'>
            <Checkbox
              isChecked={isCheck}
              onChange={() => {
                setIsCheck(!isCheck);
              }}
              colorScheme='green'
              mt={'0.5rem'}
              w={'200px'}
            >
              <Text as='b' mt={'0.5rem'} textAlign={'left'}>
                밥먹기
              </Text>
            </Checkbox>
            <Button mt={0} bg={'inherit'} w={'min-content'} onClick={() => setIsModify(!isModify)}>
              <EditIcon />
            </Button>
            <Button mt={0} bg={'inherit'} w={'min-content'}>
              <DeleteIcon />
            </Button>
          </Stack>
        </ListItem>
      )}
    </>
  );
}
