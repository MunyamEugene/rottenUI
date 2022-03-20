const ShowTotalComponent = ({ hotel }) => {
  const { name, services } = hotel;
  const totalVotes = services.reduce((strt, curr) => strt + curr.votes, 0);
  const mystyle = () => ({
    color: 'white',
    backgroundColor: 'red',
    marginLeft: '5px',
    marginTop: 'auto',
    width: `${totalVotes}px`,
    fontSize: '8pt',
    height: '15px',
    textAlign: 'left',
    paddingLeft: '0px',
  });

  return (
    <div>
      <div className="hotel-name">
        <p>{name}</p>
        <p style={mystyle()}>
          {(totalVotes)}
        </p>
      </div>
    </div>
  );
};

export default ShowTotalComponent;
