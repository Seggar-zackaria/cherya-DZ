function Button({ title, className }) {
  return (
    <>
      <button className={`px-4 py-2 my-3 font-bold rounded-md ${className}`}>
        {title}
      </button>
    </>
  );
}

export default Button;
