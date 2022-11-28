import { FormSearch, BtnSearch, BtnSearchSevenDay } from './style';

export const Search = ({ value, onSearch, onApi }) => {
  const onSubmit = e => {
    e.preventDefault();
    onApi();
  };
  return (
    <div className="wrapper">
      <FormSearch>
        <form action="" onSubmit={onSubmit}>
          <input
            value={value}
            onChange={e => {
              onSearch(e.target.value);
            }}
            type="text"
            name="serach"
            placeholder="Запишіть назву міста..."
          />
        </form>
        <BtnSearch type="submit">
          <svg
            width="20"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="#4A5568"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </BtnSearch>
        <BtnSearchSevenDay>Прогноз на 7 днів</BtnSearchSevenDay>
      </FormSearch>
    </div>
  );
};
