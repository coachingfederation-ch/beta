/* @ds-bundle: {"format":4,"namespace":"ICFSwitzerlandDesignSystem_725366","components":[{"name":"HandMark","sourcePath":"components/brand/HandMark.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/brand/HandMark.jsx":"e26ef5b75e4d","components/buttons/Button.jsx":"90a7b54602f8","components/buttons/IconButton.jsx":"8325b0e378a5","components/data-display/Avatar.jsx":"0a6606fa88f2","components/data-display/Badge.jsx":"1c088b4251b7","components/data-display/Tag.jsx":"b0d0bd26fc21","components/forms/Checkbox.jsx":"a4cedd415ab5","components/forms/Input.jsx":"55aebeb4462c","components/forms/Select.jsx":"67bbd08c6827","components/surfaces/Card.jsx":"1b6ff60b7ab1","ui_kits/website/App.jsx":"22ab39726d52","ui_kits/website/Cards.jsx":"93f90ec00de6","ui_kits/website/FindCoach.jsx":"fa49af31edda","ui_kits/website/Home.jsx":"1bdc4f3b6013","ui_kits/website/Membership.jsx":"000431c43d33","ui_kits/website/SiteChrome.jsx":"596cd80e4433","ui_kits/website/SiteEvents.jsx":"cc591c385892","ui_kits/website/data.js":"0d31a902fcd6","ui_kits/website/icons.jsx":"40e818172378"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ICFSwitzerlandDesignSystem_725366 = window.ICFSwitzerlandDesignSystem_725366 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/HandMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ICF Switzerland — HandMark
 * Renders one of the brand's hand-drawn ink marks (underline, circle,
 * arrow, star, asterisk, squiggle). The source SVGs are black dry-brush
 * ink; pick a brand `tint` (applied as a CSS filter) or pass a custom
 * `filter`. Point `src` at a file in assets/marks/.
 */
const HANDMARK_TINTS = {
  ink: 'none',
  cyan: 'brightness(0) saturate(100%) invert(53%) sepia(89%) saturate(1640%) hue-rotate(153deg) brightness(95%) contrast(101%)',
  'cyan-light': 'brightness(0) saturate(100%) invert(78%) sepia(38%) saturate(700%) hue-rotate(151deg) brightness(96%) contrast(92%)',
  indigo: 'brightness(0) saturate(100%) invert(18%) sepia(67%) saturate(2400%) hue-rotate(226deg) brightness(85%) contrast(95%)',
  'indigo-light': 'brightness(0) saturate(100%) invert(47%) sepia(32%) saturate(1100%) hue-rotate(208deg) brightness(94%) contrast(88%)',
  muted: 'brightness(0) saturate(100%) invert(66%) sepia(8%) saturate(420%) hue-rotate(202deg) brightness(92%) contrast(86%)',
  white: 'brightness(0) invert(1)'
};
function HandMark({
  src,
  tint = 'cyan',
  filter,
  width = 64,
  height = 28,
  rotate = 0,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "",
    "aria-hidden": "true",
    style: {
      display: 'block',
      width: typeof width === 'number' ? width + 'px' : width,
      height: typeof height === 'number' ? height + 'px' : height,
      objectFit: 'contain',
      filter: filter || HANDMARK_TINTS[tint] || HANDMARK_TINTS.cyan,
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { HandMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/HandMark.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ICF Switzerland — Button
 * Pill-shaped, confident actions in brand indigo and cyan.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '14px',
      gap: '7px',
      minHeight: '36px'
    },
    md: {
      padding: '11px 22px',
      fontSize: '15px',
      gap: '8px',
      minHeight: '44px'
    },
    lg: {
      padding: '15px 30px',
      fontSize: '17px',
      gap: '10px',
      minHeight: '54px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand-primary)',
      color: 'var(--text-on-dark)',
      border: '1.5px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    accent: {
      background: 'var(--brand-accent)',
      color: 'var(--icf-indigo-900)',
      border: '1.5px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--brand-primary)',
      border: '1.5px solid var(--icf-indigo-300)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: '1.5px solid transparent',
      boxShadow: 'none'
    },
    onDark: {
      background: 'var(--white)',
      color: 'var(--icf-indigo-700)',
      border: '1.5px solid transparent',
      boxShadow: 'var(--shadow-md)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverFx = {
    primary: {
      background: 'var(--icf-indigo-700)'
    },
    accent: {
      background: 'var(--icf-cyan-500)'
    },
    secondary: {
      background: 'var(--icf-indigo-50)',
      borderColor: 'var(--icf-indigo-400)'
    },
    ghost: {
      background: 'var(--icf-indigo-50)'
    },
    onDark: {
      background: 'var(--icf-indigo-50)'
    }
  };
  const base = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    letterSpacing: '-0.01em',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
    transform: active && !disabled ? 'translateY(1px)' : 'translateY(0)',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hoverFx[variant] : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ICF Switzerland — IconButton
 * Circular icon-only control. Pass an SVG/icon node as children.
 */
function IconButton({
  children,
  variant = 'secondary',
  size = 'md',
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 34,
    md: 42,
    lg: 50
  };
  const dim = sizes[size];
  const variants = {
    primary: {
      background: 'var(--brand-primary)',
      color: '#fff',
      border: '1.5px solid transparent'
    },
    accent: {
      background: 'var(--brand-accent)',
      color: 'var(--icf-indigo-900)',
      border: '1.5px solid transparent'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--brand-primary)',
      border: '1.5px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1.5px solid transparent'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverFx = {
    primary: {
      background: 'var(--icf-indigo-700)'
    },
    accent: {
      background: 'var(--icf-cyan-500)'
    },
    secondary: {
      background: 'var(--icf-indigo-50)',
      borderColor: 'var(--icf-indigo-300)'
    },
    ghost: {
      background: 'var(--neutral-100)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-circle)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
      ...variants[variant],
      ...(hover && !disabled ? hoverFx[variant] : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ICF Switzerland — Avatar
 * Circular portrait or initials. Indigo fallback ring.
 */
function Avatar({
  src,
  name = '',
  size = 'md',
  style = {},
  ...rest
}) {
  const sizes = {
    xs: 28,
    sm: 36,
    md: 44,
    lg: 56,
    xl: 72
  };
  const dim = sizes[size] || size;
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]?.toUpperCase()).join('');
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: dim,
      height: dim,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'var(--icf-indigo-100)',
      color: 'var(--icf-indigo-700)',
      fontWeight: 700,
      fontSize: dim * 0.36,
      letterSpacing: '-0.02em',
      boxShadow: 'inset 0 0 0 1px var(--icf-indigo-200)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '?');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ICF Switzerland — Badge
 * Small status / category label. Soft tinted fills.
 */
function Badge({
  children,
  tone = 'indigo',
  solid = false,
  style = {},
  ...rest
}) {
  const soft = {
    indigo: {
      background: 'var(--icf-indigo-100)',
      color: 'var(--icf-indigo-700)'
    },
    cyan: {
      background: 'var(--icf-cyan-100)',
      color: 'var(--icf-cyan-800)'
    },
    neutral: {
      background: 'var(--neutral-100)',
      color: 'var(--neutral-700)'
    },
    success: {
      background: 'var(--green-100)',
      color: 'var(--green-600)'
    },
    warning: {
      background: 'var(--amber-100)',
      color: 'var(--amber-600)'
    },
    error: {
      background: 'var(--red-100)',
      color: 'var(--red-600)'
    }
  };
  const solidMap = {
    indigo: {
      background: 'var(--icf-indigo-600)',
      color: '#fff'
    },
    cyan: {
      background: 'var(--icf-cyan-600)',
      color: 'var(--icf-indigo-900)'
    },
    neutral: {
      background: 'var(--neutral-800)',
      color: '#fff'
    },
    success: {
      background: 'var(--green-600)',
      color: '#fff'
    },
    warning: {
      background: 'var(--amber-600)',
      color: '#fff'
    },
    error: {
      background: 'var(--red-600)',
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      padding: '4px 11px',
      fontSize: 'var(--fs-caption)',
      fontWeight: 700,
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      ...(solid ? solidMap[tone] : soft[tone]),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ICF Switzerland — Tag
 * Outlined, removable chip for filters and topics.
 */
function Tag({
  children,
  onRemove,
  active = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      padding: '6px 13px',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 600,
      borderRadius: 'var(--radius-pill)',
      cursor: rest.onClick ? 'pointer' : 'default',
      border: '1.5px solid ' + (active ? 'var(--icf-indigo-600)' : 'var(--border-strong)'),
      background: active ? 'var(--icf-indigo-50)' : hover ? 'var(--neutral-50)' : 'var(--surface-card)',
      color: active ? 'var(--icf-indigo-700)' : 'var(--text-body)',
      transition: 'all var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 16,
      height: 16,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--neutral-200)',
      color: 'var(--neutral-700)',
      fontSize: 11,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ICF Switzerland — Checkbox
 * Square check with brand indigo fill.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const cbId = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-xs)',
      border: '1.5px solid ' + (on ? 'var(--icf-indigo-600)' : 'var(--border-strong)'),
      background: on ? 'var(--icf-indigo-600)' : 'var(--surface-card)',
      transition: 'all var(--dur-base) var(--ease-standard)',
      color: '#fff'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2L4.8 8.5L9.5 3.5",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ICF Switzerland — Input
 * Text field with label, optional helper/error and leading icon.
 */
function Input({
  label,
  helper,
  error,
  iconLeft = null,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--red-600)' : focus ? 'var(--icf-indigo-500)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '9px',
      padding: '0 14px',
      background: 'var(--surface-card)',
      border: '1.5px solid ' + borderColor,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      padding: '12px 0',
      minWidth: 0,
      ...style
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--red-600)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ICF Switzerland — Select
 * Native dropdown styled to match Input.
 */
function Select({
  label,
  helper,
  options = [],
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      border: '1.5px solid ' + (focus ? 'var(--icf-indigo-500)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      padding: '13px 40px 13px 14px',
      cursor: 'pointer',
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, rest), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, "\u25BE")), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, helper));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ICF Switzerland — Card
 * Soft white surface with indigo-tinted shadow. Optional hover lift.
 */
function Card({
  children,
  variant = 'elevated',
  padding = 'md',
  interactive = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  const variants = {
    elevated: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)'
    },
    outlined: {
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-default)',
      boxShadow: 'none'
    },
    soft: {
      background: 'var(--surface-subtle)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'none'
    },
    indigo: {
      background: 'var(--icf-indigo-600)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-indigo)',
      color: 'var(--text-on-dark)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding],
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...variants[variant],
      ...(interactive ? {
        cursor: 'pointer'
      } : null),
      ...(interactive && hover ? {
        transform: 'translateY(-4px)',
        boxShadow: 'var(--shadow-lg)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
// ICF Switzerland — website app shell
function App() {
  const [screen, setScreen] = React.useState('home');
  const onNav = id => {
    setScreen(id);
    window.scrollTo({
      top: 0
    });
  };
  const Screen = {
    home: window.HomeScreen,
    coaches: window.CoachesScreen,
    events: window.EventsScreen,
    membership: window.MembershipScreen
  }[screen] || window.HomeScreen;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(window.SiteHeader, {
    current: screen,
    onNav: onNav
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Screen, {
    onNav: onNav
  })), /*#__PURE__*/React.createElement(window.SiteFooter, {
    onNav: onNav
  }));
}

// The screen/chrome files load as separate <script type="text/babel" src> tags whose
// execution order is not guaranteed. Mount only once every global it needs is registered.
(function mountWhenReady() {
  const ds = window.ICFSwitzerlandDesignSystem_725366;
  const ready = ds && window.Icons && window.SiteHeader && window.SiteFooter && window.EventCard && window.CoachCard && window.HomeScreen && window.CoachesScreen && window.EventsScreen && window.MembershipScreen;
  if (!ready) {
    setTimeout(mountWhenReady, 30);
    return;
  }
  const el = document.getElementById('root');
  if (!el) return; // not the UI-kit host page (e.g. a DC template loading the bundle)
  if (el.__mounted) return;
  el.__mounted = true;
  ReactDOM.createRoot(el).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Cards.jsx
try { (() => {
// ICF Switzerland — shared content cards (events, coaches)
const _ds = window.ICFSwitzerlandDesignSystem_725366;
function EventCard({
  ev,
  onOpen
}) {
  const {
    Card,
    Badge,
    Button
  } = _ds;
  const I = window.Icons;
  return /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    interactive: true,
    padding: "none",
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 86,
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: ev.tone === 'cyan' ? 'var(--icf-cyan-600)' : 'var(--icf-indigo-600)',
      color: '#fff',
      padding: '18px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      opacity: 0.85
    }
  }, ev.date.split(' ')[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30,
      fontWeight: 800,
      lineHeight: 1
    }
  }, ev.date.split(' ')[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      opacity: 0.85
    }
  }, ev.date.split(' ')[2])), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: ev.tone
  }, ev.type), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, ev.mode)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: '0 0 8px',
      lineHeight: 1.3
    }
  }, ev.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '0 0 14px',
      lineHeight: 1.55
    }
  }, ev.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      fontSize: 13,
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(I.MapPin, {
    size: 15,
    color: "var(--icf-cyan-700)"
  }), ev.city), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(I.Clock, {
    size: 15,
    color: "var(--icf-cyan-700)"
  }), ev.time)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      padding: '12px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--icf-indigo-700)'
    }
  }, ev.members, ev.price ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      fontWeight: 500
    }
  }, " \xB7 ", ev.price) : null), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: onOpen,
    iconRight: /*#__PURE__*/React.createElement(I.ArrowRight, {
      size: 16
    })
  }, "Register")));
}
function CoachCard({
  c,
  onOpen
}) {
  const {
    Card,
    Badge,
    Avatar
  } = _ds;
  const I = window.Icons;
  return /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    interactive: true,
    onClick: onOpen,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: c.name,
    size: "lg",
    style: {
      borderRadius: 'var(--radius-md)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 4,
      fontSize: 13,
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(I.MapPin, {
    size: 14,
    color: "var(--icf-cyan-700)"
  }), c.city), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--border-strong)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, c.langs))), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "indigo",
    solid: true
  }, c.cred))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-body)',
      margin: 0,
      lineHeight: 1.55
    }
  }, c.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7
    }
  }, c.focus.map(f => /*#__PURE__*/React.createElement(Badge, {
    key: f,
    tone: "neutral"
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 13,
      fontWeight: 600,
      color: c.open ? 'var(--green-600)' : 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: c.open ? 'var(--green-600)' : 'var(--neutral-300)'
    }
  }), c.open ? 'Accepting new clients' : 'Waitlist only'));
}
window.EventCard = EventCard;
window.CoachCard = CoachCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Cards.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FindCoach.jsx
try { (() => {
// ICF Switzerland — Find a Coach directory
function CoachesScreen({
  onNav
}) {
  const {
    Input,
    Select,
    Tag,
    Badge
  } = window.ICFSwitzerlandDesignSystem_725366;
  const I = window.Icons;
  const D = window.ICF_DATA;
  const [region, setRegion] = React.useState('All regions');
  const [active, setActive] = React.useState([]);
  const [q, setQ] = React.useState('');
  const [openOnly, setOpenOnly] = React.useState(false);
  const toggle = f => setActive(a => a.includes(f) ? a.filter(x => x !== f) : [...a, f]);
  const results = D.coaches.filter(c => {
    if (region !== 'All regions' && c.city !== region) return false;
    if (active.length && !active.some(f => c.focus.includes(f))) return false;
    if (openOnly && !c.open) return false;
    if (q && !(c.name + ' ' + c.city + ' ' + c.focus.join(' ')).toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });
  const Section = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      ...style
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '52px var(--gutter) 40px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "icf-overline",
    style: {
      marginBottom: 12
    }
  }, "Directory"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(32px, 5vw, 48px)',
      fontWeight: 800,
      letterSpacing: '-0.025em',
      margin: '0 0 14px'
    }
  }, "Find a credentialed coach"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--text-muted)',
      margin: 0,
      maxWidth: 560
    }
  }, "Every coach listed holds an active ICF credential and commits to the ICF Code of Ethics."))), /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '32px var(--gutter) 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gap: 36,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 92,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Search",
    iconLeft: /*#__PURE__*/React.createElement(I.Search, {
      size: 16
    }),
    placeholder: "Name, city, specialty",
    value: q,
    onChange: e => setQ(e.target.value)
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Region",
    options: D.regions,
    value: region,
    onChange: e => setRegion(e.target.value)
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)',
      marginBottom: 10
    }
  }, "Specialty"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, D.specialties.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    active: active.includes(s),
    onClick: () => toggle(s)
  }, s)))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      cursor: 'pointer',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: openOnly,
    onChange: e => setOpenOnly(e.target.checked),
    style: {
      accentColor: 'var(--icf-indigo-600)',
      width: 17,
      height: 17
    }
  }), "Accepting new clients")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, results.length, " coach", results.length === 1 ? '' : 'es'), active.length || region !== 'All regions' || openOnly || q ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setActive([]);
      setRegion('All regions');
      setOpenOnly(false);
      setQ('');
    },
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--icf-indigo-600)'
    }
  }, "Clear filters") : null), results.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, results.map(c => /*#__PURE__*/React.createElement(window.CoachCard, {
    key: c.id,
    c: c,
    onOpen: () => {}
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 0',
      textAlign: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 6px'
    }
  }, "No coaches match your filters"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Try widening your region or specialty."))))));
}
window.CoachesScreen = CoachesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FindCoach.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
// ICF Switzerland — Home screen
function HomeScreen({
  onNav
}) {
  const {
    Button,
    Card,
    HandMark,
    Badge
  } = window.ICFSwitzerlandDesignSystem_725366;
  const I = window.Icons;
  const D = window.ICF_DATA;
  const mark = n => '../../assets/marks/' + n;
  const Section = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      ...style
    }
  }, children);
  const values = [{
    icon: I.Compass,
    title: 'Find your coach',
    body: 'Search our directory of ICF-credentialed coaches across every region of Switzerland.',
    cta: 'Browse coaches',
    go: 'coaches'
  }, {
    icon: I.Users,
    title: 'Join the community',
    body: 'Belong to a national network of professional coaches — events, mentoring and friendship.',
    cta: 'See membership',
    go: 'membership'
  }, {
    icon: I.Award,
    title: 'Earn your credential',
    body: 'Pursue your ACC, PCC or MCC with guidance, mentor coaching and chapter support.',
    cta: 'Credential paths',
    go: 'membership'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '78px var(--gutter) 70px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      padding: '7px 15px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--icf-cyan-100)',
      color: 'var(--icf-cyan-800)',
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--icf-cyan-600)'
    }
  }), "ICF Switzerland Charter Chapter"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(40px, 6vw, 68px)',
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "The home of", /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block',
      margin: '0 8px'
    }
  }, "professional", /*#__PURE__*/React.createElement(HandMark, {
    src: mark('TextHighlighMark01.svg'),
    tint: "cyan",
    width: "100%",
    height: 16,
    style: {
      position: 'absolute',
      left: 0,
      bottom: -10
    }
  })), "coaching in Switzerland."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(17px, 2vw, 20px)',
      color: 'var(--text-body)',
      lineHeight: 1.6,
      margin: '26px 0 32px',
      maxWidth: 560
    }
  }, "We connect, develop and champion the coaches who help people and organisations across Switzerland grow."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('coaches'),
    iconRight: /*#__PURE__*/React.createElement(I.ArrowRight, {
      size: 18
    })
  }, "Find a coach"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('membership')
  }, "Become a member"))), /*#__PURE__*/React.createElement(HandMark, {
    src: mark('Star01.svg'),
    tint: "cyan",
    width: 62,
    height: 62,
    style: {
      position: 'absolute',
      right: '8%',
      top: 70
    }
  }), /*#__PURE__*/React.createElement(HandMark, {
    src: mark('CircularMark02.svg'),
    tint: "indigo-light",
    width: 150,
    height: 150,
    style: {
      position: 'absolute',
      right: '4%',
      bottom: 30
    }
  }), /*#__PURE__*/React.createElement(HandMark, {
    src: mark('Asterisk03.svg'),
    tint: "indigo",
    width: 46,
    height: 46,
    style: {
      position: 'absolute',
      right: '24%',
      bottom: 50
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--icf-indigo-600)'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '34px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, D.stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      color: '#fff',
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--icf-indigo-200)',
      marginTop: 8,
      fontWeight: 500
    }
  }, s.label)))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '80px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 620,
      margin: '0 auto 48px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "icf-overline",
    style: {
      marginBottom: 12
    }
  }, "Why ICF Switzerland"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(28px, 4vw, 40px)',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "Coaching that meets the highest standards")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, values.map(v => /*#__PURE__*/React.createElement(Card, {
    key: v.title,
    variant: "elevated",
    padding: "lg",
    interactive: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: 'var(--icf-cyan-100)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(v.icon, {
    size: 26,
    color: "var(--icf-cyan-800)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 21,
      fontWeight: 700,
      margin: 0
    }
  }, v.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)',
      lineHeight: 1.6,
      margin: 0,
      flex: 1
    }
  }, v.body), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(v.go);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--icf-indigo-600)'
    }
  }, v.cta, " ", /*#__PURE__*/React.createElement(I.ArrowRight, {
    size: 16
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '76px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 36,
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "icf-overline",
    style: {
      marginBottom: 12
    }
  }, "What's on"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(28px, 4vw, 40px)',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "Upcoming events")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNav('events'),
    iconRight: /*#__PURE__*/React.createElement(I.ArrowRight, {
      size: 16
    })
  }, "All events")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 22
    }
  }, D.events.slice(0, 2).map(ev => /*#__PURE__*/React.createElement(window.EventCard, {
    key: ev.id,
    ev: ev,
    onOpen: () => onNav('events')
  }))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '80px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "indigo",
    padding: "lg",
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '56px clamp(28px, 6vw, 72px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(28px, 4vw, 42px)',
      fontWeight: 800,
      color: '#fff',
      letterSpacing: '-0.02em',
      margin: '0 0 16px',
      lineHeight: 1.1
    }
  }, "Grow with a community that gets coaching."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--icf-indigo-200)',
      lineHeight: 1.6,
      margin: '0 0 28px'
    }
  }, "Join 650+ coaches across Switzerland. Member events, mentoring, credential support and a directory listing."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav('membership'),
    iconRight: /*#__PURE__*/React.createElement(I.ArrowRight, {
      size: 18
    })
  }, "Join ICF Switzerland")), /*#__PURE__*/React.createElement(HandMark, {
    src: mark('CircularMark01.svg'),
    tint: "cyan-light",
    width: 220,
    height: 220,
    style: {
      position: 'absolute',
      right: -30,
      top: -20,
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement(HandMark, {
    src: mark('Star02.svg'),
    tint: "cyan-light",
    width: 70,
    height: 70,
    style: {
      position: 'absolute',
      right: '14%',
      bottom: 36
    }
  }))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Membership.jsx
try { (() => {
// ICF Switzerland — Membership / Join
function MembershipScreen({
  onNav
}) {
  const {
    Button,
    Card,
    Badge,
    HandMark
  } = window.ICFSwitzerlandDesignSystem_725366;
  const I = window.Icons;
  const mark = n => '../../assets/marks/' + n;
  const plans = [{
    name: 'Student',
    price: 'CHF 95',
    per: '/ year',
    tone: 'soft',
    tagline: 'For coaches in an ICF-accredited training programme.',
    perks: ['Chapter events at member rates', 'Mentoring circles', 'Learning library access']
  }, {
    name: 'Professional',
    price: 'CHF 180',
    per: '/ year',
    tone: 'featured',
    tagline: 'For practising, credentialed coaches across Switzerland.',
    perks: ['Free entry to most events', 'Public directory listing', 'Credential & renewal support', 'Regional community access', 'Member-only resources']
  }, {
    name: 'Organisation',
    price: 'Let\u2019s talk',
    per: '',
    tone: 'soft',
    tagline: 'For academies and companies building coaching cultures.',
    perks: ['Team listings & seats', 'Co-hosted events', 'Partner visibility']
  }];
  const creds = [{
    code: 'ACC',
    name: 'Associate Certified Coach',
    hours: '100+ hours'
  }, {
    code: 'PCC',
    name: 'Professional Certified Coach',
    hours: '500+ hours'
  }, {
    code: 'MCC',
    name: 'Master Certified Coach',
    hours: '2,500+ hours'
  }];
  const Section = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      ...style
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--icf-indigo-900)'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '70px var(--gutter)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "icf-overline",
    style: {
      color: 'var(--icf-cyan-300)',
      marginBottom: 14
    }
  }, "Membership"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(34px, 5vw, 56px)',
      fontWeight: 800,
      color: '#fff',
      letterSpacing: '-0.03em',
      lineHeight: 1.05,
      margin: '0 0 18px'
    }
  }, "Belong to Switzerland\u2019s coaching community."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      color: 'var(--icf-indigo-200)',
      lineHeight: 1.6,
      margin: 0,
      maxWidth: 540
    }
  }, "One membership, the whole chapter: events, mentoring, a directory listing and the support you need to grow your credential and your practice.")), /*#__PURE__*/React.createElement(HandMark, {
    src: mark('Star01.svg'),
    tint: "cyan-light",
    width: 66,
    height: 66,
    style: {
      position: 'absolute',
      right: '10%',
      top: 60
    }
  }), /*#__PURE__*/React.createElement(HandMark, {
    src: mark('CircularMark03.svg'),
    tint: "indigo-light",
    width: 180,
    height: 180,
    style: {
      position: 'absolute',
      right: -20,
      bottom: -40,
      opacity: 0.7
    }
  }))), /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '70px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24,
      alignItems: 'stretch'
    }
  }, plans.map(p => {
    const featured = p.tone === 'featured';
    return /*#__PURE__*/React.createElement(Card, {
      key: p.name,
      variant: featured ? 'elevated' : 'outlined',
      padding: "lg",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        position: 'relative',
        border: featured ? '2px solid var(--icf-indigo-600)' : undefined,
        boxShadow: featured ? 'var(--shadow-lg)' : undefined
      }
    }, featured && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: -13,
        left: 28
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "cyan",
      solid: true
    }, "Most popular")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 20,
        fontWeight: 700,
        margin: '0 0 6px'
      }
    }, p.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        margin: 0,
        lineHeight: 1.5,
        minHeight: 42
      }
    }, p.tagline)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 38,
        fontWeight: 800,
        color: 'var(--text-strong)',
        letterSpacing: '-0.02em'
      }
    }, p.price), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        color: 'var(--text-muted)',
        fontWeight: 600
      }
    }, p.per)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 11,
        flex: 1
      }
    }, p.perks.map(perk => /*#__PURE__*/React.createElement("div", {
      key: perk,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        fontSize: 14.5,
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: 'var(--icf-cyan-100)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1
      }
    }, /*#__PURE__*/React.createElement(I.Check, {
      size: 13,
      color: "var(--icf-cyan-800)"
    })), perk))), /*#__PURE__*/React.createElement(Button, {
      variant: featured ? 'primary' : 'secondary',
      block: true,
      onClick: () => {}
    }, p.name === 'Organisation' ? 'Contact us' : 'Choose ' + p.name));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '76px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 600,
      margin: '0 auto 44px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "icf-overline",
    style: {
      marginBottom: 12
    }
  }, "Accreditation"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(28px, 4vw, 40px)',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "Three credential pathways")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, creds.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.code,
    variant: "elevated",
    padding: "lg",
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--icf-indigo-600)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: '-0.01em'
    }
  }, c.code), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      margin: 0
    }
  }, c.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, c.hours, " of coaching experience")))))));
}
window.MembershipScreen = MembershipScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Membership.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
// ICF Switzerland — site header & footer
function SiteHeader({
  current,
  onNav
}) {
  const {
    Button: ICFButton
  } = window.ICFSwitzerlandDesignSystem_725366;
  const nav = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'coaches',
    label: 'Find a coach'
  }, {
    id: 'events',
    label: 'Events'
  }, {
    id: 'membership',
    label: 'Membership'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.86)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/icf-switzerland-vertical-positive.png",
    alt: "ICF Switzerland Charter Chapter",
    style: {
      height: 54
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      marginLeft: 8
    }
  }, nav.map(n => {
    const active = current === n.id;
    return /*#__PURE__*/React.createElement("a", {
      key: n.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav(n.id);
      },
      style: {
        padding: '9px 15px',
        borderRadius: 'var(--radius-pill)',
        fontSize: 15,
        fontWeight: 600,
        textDecoration: 'none',
        color: active ? 'var(--icf-indigo-700)' : 'var(--text-body)',
        background: active ? 'var(--icf-indigo-50)' : 'transparent',
        transition: 'background var(--dur-base) var(--ease-standard)'
      }
    }, n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(window.Icons.Globe, {
    size: 17
  }), " EN"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, "Log in"), /*#__PURE__*/React.createElement(ICFButton, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav('membership')
  }, "Join ICF Switzerland"))));
}
function SiteFooter({
  onNav
}) {
  const cols = [{
    h: 'Discover',
    items: ['Find a coach', 'What is coaching?', 'Events', 'Regional communities']
  }, {
    h: 'For coaches',
    items: ['Become a member', 'Credentials & accreditation', 'Mentor coaching', 'Member resources']
  }, {
    h: 'About',
    items: ['About the chapter', 'Board & volunteers', 'ICF Global', 'Contact']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--icf-indigo-900)',
      color: 'var(--icf-indigo-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '64px var(--gutter) 40px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/icf-switzerland-vertical-white.png",
    alt: "ICF Switzerland",
    style: {
      height: 92,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.7,
      maxWidth: 280,
      margin: 0
    }
  }, "The home of professional coaching in Switzerland \u2014 advancing the art, science and practice of coaching.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: '#fff',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      margin: '0 0 16px'
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--icf-indigo-200)',
      fontSize: 14,
      textDecoration: 'none'
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.14)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '20px var(--gutter)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ICF Switzerland Charter Chapter"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--icf-indigo-200)'
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--icf-indigo-200)'
    }
  }, "Code of Ethics"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--icf-indigo-200)'
    }
  }, "Imprint")))));
}
window.SiteHeader = SiteHeader;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteEvents.jsx
try { (() => {
// ICF Switzerland — Events listing
function EventsScreen({
  onNav
}) {
  const {
    Button
  } = window.ICFSwitzerlandDesignSystem_725366;
  const I = window.Icons;
  const D = window.ICF_DATA;
  const [mode, setMode] = React.useState('All');
  const tabs = ['All', 'In person', 'Online', 'Hybrid'];
  const list = D.events.filter(e => mode === 'All' || e.mode === mode);
  const Section = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      ...style
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '52px var(--gutter) 40px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "icf-overline",
    style: {
      marginBottom: 12
    }
  }, "Community"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(32px, 5vw, 48px)',
      fontWeight: 800,
      letterSpacing: '-0.025em',
      margin: '0 0 14px'
    }
  }, "Events & workshops"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--text-muted)',
      margin: 0,
      maxWidth: 560
    }
  }, "Practice labs, webinars and regional gatherings \u2014 most are free for members."))), /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: '32px var(--gutter) 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 28,
      flexWrap: 'wrap'
    }
  }, tabs.map(t => {
    const on = mode === t;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setMode(t),
      style: {
        padding: '9px 18px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: 700,
        border: '1.5px solid ' + (on ? 'var(--icf-indigo-600)' : 'var(--border-strong)'),
        background: on ? 'var(--icf-indigo-600)' : 'var(--surface-card)',
        color: on ? '#fff' : 'var(--text-body)',
        transition: 'all var(--dur-base) var(--ease-standard)'
      }
    }, t);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 22
    }
  }, list.map(ev => /*#__PURE__*/React.createElement(window.EventCard, {
    key: ev.id,
    ev: ev,
    onOpen: () => {}
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      padding: '36px clamp(24px,5vw,48px)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--icf-cyan-50)',
      border: '1px solid var(--icf-cyan-100)',
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-md)',
      background: 'var(--icf-cyan-600)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(I.Calendar, {
    size: 28,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      margin: '0 0 4px'
    }
  }, "Never miss a chapter event"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Members get early access and free entry to most events."))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav('membership')
  }, "Become a member"))));
}
window.EventsScreen = EventsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteEvents.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// ICF Switzerland — website UI kit sample data (fictional, brand-representative)
window.ICF_DATA = {
  regions: ['All regions', 'Zürich', 'Genève', 'Basel', 'Bern', 'Ticino', 'Lausanne'],
  specialties: ['Leadership', 'Career & transition', 'Team coaching', 'Executive', 'Life & wellbeing', 'Systemic'],
  events: [{
    id: 1,
    type: 'Workshop',
    tone: 'indigo',
    city: 'Zürich',
    mode: 'In person',
    date: 'Thu 26 Jun',
    time: '18:30–20:30',
    title: 'Coaching with presence: the inner stance',
    blurb: 'A practice-led evening for credentialed coaches exploring how presence shapes the coaching relationship.',
    members: 'Free for members',
    price: 'CHF 35 guests'
  }, {
    id: 2,
    type: 'Webinar',
    tone: 'cyan',
    city: 'Online',
    mode: 'Online',
    date: 'Tue 1 Jul',
    time: '12:00–13:00',
    title: 'Coffee & Coaching: building your practice',
    blurb: 'Our monthly lunchtime conversation — this month on attracting and retaining your first clients.',
    members: 'Free for members',
    price: 'CHF 15 guests'
  }, {
    id: 3,
    type: 'Chapter meeting',
    tone: 'indigo',
    city: 'Genève',
    mode: 'In person',
    date: 'Wed 9 Jul',
    time: '18:00–21:00',
    title: 'Romandie regional gathering & apéro',
    blurb: 'Connect with coaches across French-speaking Switzerland. Short talk followed by networking.',
    members: 'Members only',
    price: ''
  }, {
    id: 4,
    type: 'Masterclass',
    tone: 'cyan',
    city: 'Basel',
    mode: 'Hybrid',
    date: 'Sat 19 Jul',
    time: '09:00–16:00',
    title: 'Preparing for your PCC credential',
    blurb: 'A full-day masterclass with a Master Certified Coach to ready your application and recordings.',
    members: 'CHF 120 members',
    price: 'CHF 180 guests'
  }],
  coaches: [{
    id: 1,
    name: 'Marie Dubois',
    city: 'Genève',
    cred: 'PCC',
    langs: 'FR · EN',
    focus: ['Leadership', 'Executive'],
    open: true,
    blurb: 'Helping senior leaders lead with clarity and humanity.'
  }, {
    id: 2,
    name: 'Hans Müller',
    city: 'Zürich',
    cred: 'MCC',
    langs: 'DE · EN',
    focus: ['Team coaching', 'Systemic'],
    open: true,
    blurb: 'Systemic team coaching for organisations in transition.'
  }, {
    id: 3,
    name: 'Luca Rossi',
    city: 'Ticino',
    cred: 'ACC',
    langs: 'IT · EN',
    focus: ['Career & transition'],
    open: false,
    blurb: 'Supporting professionals through meaningful career moves.'
  }, {
    id: 4,
    name: 'Anna Weber',
    city: 'Bern',
    cred: 'PCC',
    langs: 'DE · FR · EN',
    focus: ['Life & wellbeing'],
    open: true,
    blurb: 'A warm, reflective space for growth and balance.'
  }, {
    id: 5,
    name: 'Sophie Favre',
    city: 'Lausanne',
    cred: 'PCC',
    langs: 'FR · EN',
    focus: ['Leadership', 'Career & transition'],
    open: true,
    blurb: 'Career and leadership coaching for women in tech.'
  }, {
    id: 6,
    name: 'Daniel Keller',
    city: 'Basel',
    cred: 'MCC',
    langs: 'DE · EN',
    focus: ['Executive', 'Systemic'],
    open: true,
    blurb: 'Executive coaching grounded in 20 years of practice.'
  }],
  stats: [{
    value: '650+',
    label: 'Members across Switzerland'
  }, {
    value: '4',
    label: 'Active regional communities'
  }, {
    value: '40+',
    label: 'Events & workshops a year'
  }, {
    value: '1995',
    label: 'Serving Swiss coaching since'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
// Lucide-style line icons (stroke 1.75, round) — UI iconography for the kit.
// The brand provides decorative hand-drawn marks but no functional UI icon set,
// so we substitute Lucide (humanist, rounded — pairs with Plus Jakarta Sans).
const _ic = (paths, vb = 24) => ({
  size = 20,
  color = 'currentColor',
  style = {},
  ...rest
}) => React.createElement('svg', {
  width: size,
  height: size,
  viewBox: `0 0 ${vb} ${vb}`,
  fill: 'none',
  stroke: color,
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  style,
  ...rest
}, paths.map((d, i) => React.createElement('path', {
  key: i,
  d
})));
const _icMixed = children => ({
  size = 20,
  color = 'currentColor',
  style = {},
  ...rest
}) => React.createElement('svg', {
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: color,
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  style,
  ...rest
}, children());
window.Icons = {
  Search: _icMixed(() => [React.createElement('circle', {
    key: 'c',
    cx: 11,
    cy: 11,
    r: 7
  }), React.createElement('path', {
    key: 'l',
    d: 'M21 21l-4.3-4.3'
  })]),
  ArrowRight: _ic(['M5 12h14', 'M13 6l6 6-6 6']),
  ArrowUpRight: _ic(['M7 17L17 7', 'M8 7h9v9']),
  MapPin: _icMixed(() => [React.createElement('path', {
    key: 'p',
    d: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'
  }), React.createElement('circle', {
    key: 'c',
    cx: 12,
    cy: 10,
    r: 3
  })]),
  Calendar: _icMixed(() => [React.createElement('rect', {
    key: 'r',
    x: 3,
    y: 5,
    width: 18,
    height: 16,
    rx: 2
  }), React.createElement('path', {
    key: 'p',
    d: 'M3 10h18M8 3v4M16 3v4'
  })]),
  Clock: _icMixed(() => [React.createElement('circle', {
    key: 'c',
    cx: 12,
    cy: 12,
    r: 9
  }), React.createElement('path', {
    key: 'p',
    d: 'M12 7v5l3 2'
  })]),
  Menu: _ic(['M3 6h18', 'M3 12h18', 'M3 18h18']),
  Globe: _icMixed(() => [React.createElement('circle', {
    key: 'c',
    cx: 12,
    cy: 12,
    r: 9
  }), React.createElement('path', {
    key: 'p',
    d: 'M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18'
  })]),
  Check: _ic(['M4 12l5 5L20 6']),
  Sparkle: _ic(['M12 3v18', 'M3 12h18', 'M6 6l12 12', 'M18 6L6 18']),
  Heart: _ic(['M12 20s-7-4.3-7-9.3A3.7 3.7 0 0 1 12 7a3.7 3.7 0 0 1 7-1.3C19 11.7 12 20 12 20Z']),
  Users: _icMixed(() => [React.createElement('circle', {
    key: 'c',
    cx: 9,
    cy: 8,
    r: 3.2
  }), React.createElement('path', {
    key: 'p',
    d: 'M3.5 19a5.5 5.5 0 0 1 11 0M16 5.2a3.2 3.2 0 0 1 0 6M20.5 19a5.5 5.5 0 0 0-3.5-5.1'
  })]),
  Award: _icMixed(() => [React.createElement('circle', {
    key: 'c',
    cx: 12,
    cy: 9,
    r: 5
  }), React.createElement('path', {
    key: 'p',
    d: 'M9 13.5L7.5 21l4.5-2.5L16.5 21 15 13.5'
  })]),
  Compass: _icMixed(() => [React.createElement('circle', {
    key: 'c',
    cx: 12,
    cy: 12,
    r: 9
  }), React.createElement('path', {
    key: 'p',
    d: 'M15.5 8.5l-2 5-5 2 2-5 5-2Z'
  })])
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.HandMark = __ds_scope.HandMark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Card = __ds_scope.Card;

})();
