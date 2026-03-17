import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-bubble-avatar {
  display: inline-flex;
  justify-content: center;
  align-self: flex-start;
  margin-right: 6px;

  .${(p) => p.theme.prefixCls}-avatar {
    background-color: ${(p) => p.theme.colorFillSecondary};
    position: relative;
    border: 0;
  }

  &-loading .${(p) => p.theme.prefixCls}-avatar::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    border-width: 1px 1px 1px 1px;
    border-style: solid;
    border-color: ${(p) => p.theme.colorTextSecondary};
    border-left-color: transparent;
    pointer-events: none;
    z-index: 1;
    animation: avatar-border-spin 1.5s linear infinite;
  }

  ~ .${(p) => p.theme.prefixCls}-bubble-content-wrapper {
    width: 0;
    flex: 1;
  }
}

@keyframes avatar-border-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;
