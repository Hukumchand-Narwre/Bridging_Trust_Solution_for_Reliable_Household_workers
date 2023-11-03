const Divider = ({ style = {} }) => {
  return (
    <div
      style={
        (style,
        {
          width: "100%",
          height: 0.5,
          backgroundColor: "#4338ca",
          marginTop: 10,
          marginBottom: 10,
        })
      }
    ></div>
  );
};

export default Divider;
