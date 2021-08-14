export enum ButtonSize {
  'large',
  'small'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
  Outline = 'outline'
}

export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  size?: string | ButtonSize;
  type?: string | ButtonType;
  children?: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
