import { Button, ButtonProps } from '@mantine/core';
import { ComponentPropsWithoutRef } from 'react';
import { BsTwitter } from 'react-icons/bs';

export function TwitterButton(props: ButtonProps) {
  return (
    <Button
      leftIcon={<BsTwitter size="1rem" color="#00ACEE" />}
      variant="default"
      {...props}
    />
  );
}
