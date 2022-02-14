import { ReactNode, ButtonHTMLAttributes } from 'react'

import { ButtonContainer } from './Button.styles'

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button (props: ButtonProps) {
  return <ButtonContainer type="button" {...props} />
}
