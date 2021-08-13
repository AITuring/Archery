import React, { FC } from 'react';
import classNames from 'classnames';
import { ButtonProps, ButtonSize, ButtonType } from './type';
import './style.less';

const Button: FC<ButtonProps> = (props) => {
  const {
    btnType,
    size,
    disabled,
    loading,
    children,
    href
  } = props;

  // btn btn-lg btn-primary
  const cls = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': disabled,
  })

  if (btnType === ButtonType.Link && href) {
    return (
      <a href={href} className={cls}>{children}</a>
    )
  } else {
    return (
      <button className={cls} disabled={disabled}>{children}</button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  // btnType: ButtonType.Default
}

export default Button;
