function Buttons({ color, text, setShowTask }) {
  return (
    
      <button
        onClick={() => {
          setShowTask((prev) => !prev);
          console.log("clicked");
        }}
        style={{ backgroundColor: color }}
        variant="contained"
      >
        {text}
      </button>

  );
}

export default Buttons;
