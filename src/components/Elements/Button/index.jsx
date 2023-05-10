const Button = (props) => {
    const {children, variant} = props
  return (
    <button className={`${variant} text-white border border-primary`}>
      {children}
    </button>
  );
};

export default Button;
