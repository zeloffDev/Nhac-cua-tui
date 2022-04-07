import React, { useEffect, useRef, useState } from "react";
import { Input, AutoComplete } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  ResultSearchAction,
  SearchAction,
} from "../../redux/actions/SearchAction";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.SearchReducer);
  const playlists = search?.playlist?.playlist;
  const [options, setOptions] = useState([]);
  const [changeValue, setChangeValue] = useState('');
  const searchRef = useRef(null);
  const changeRef = useRef(null);

  const handleSearch = (value) => {
    if (searchRef.current) {
      clearTimeout(searchRef.current);
    }
    searchRef.current = setTimeout(() => {
      dispatch(SearchAction(value));
    }, 300);
  };

  const onSelect = (value, option) => {
    dispatch(ResultSearchAction(option.label));
  };

  const handleChange=(value)=>{
    if (changeRef.current) {
      clearTimeout(changeRef.current);
    }
    changeRef.current = setTimeout(() => {
      setChangeValue(value)
    }, 300);
  }
  

  useEffect(() => {
    const option = playlists?.map((item, index) => {
      return { label: item.title, value: index };
    });

    setOptions(option);
  }, [playlists]);

  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      dispatch(changeValue? ResultSearchAction(changeValue):'')
    }}
    className='flex'>
      <AutoComplete
        dropdownMatchSelectWidth={252}
       className='w-full md:w-1/2'
        style={{
          // width: 500,
        }}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
        onChange={handleChange}
        placeholder="input here" 
      >
        {/* <Input.Search size="large" placeholder="input here" enterButton /> */}
      </AutoComplete>
      <button type="submit" className="ml-2  py-1 px-2 rounded-sm text-white hover:bg-blue-600 bg-blue-500">Search</button>
    </form>
  );
};

export default Search;
