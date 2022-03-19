import './css/search.css';

const SearchComponent = ({ search }) => {
  const handleChange = (e) => {
    const name = e.target.value;
    search(name);
  };
  return (
    <div>
      <input type="text" placeholder="Type hotel name..." className="search-tex" onChange={handleChange} />
    </div>
  );
};

export default SearchComponent;
