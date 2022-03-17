const ShowTotalComponent = ({
  total, name, stars, location,
}) => {
  const mystyle = () => ({
    color: 'white',
    backgroundColor: 'red',
    marginLeft: '5px',
    marginTop: 'auto',
    width: `${total}px`,
    fontSize: '10pt',
    height: '15px',
    textAlign: 'left',
    paddingLeft: '0px',
  });

  return (
    <div>
      <div className="hotel-name">
        <p>{name}</p>
        <p style={mystyle()}>
          {(total)}
        </p>
      </div>
      <div className="hotel-info">
        <p>
          Stars:
          {stars}
        </p>
        <p>
          Location:
          {location}
        </p>
      </div>
    </div>
  );
};

export default ShowTotalComponent;
