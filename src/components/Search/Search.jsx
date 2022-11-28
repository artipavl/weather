import { FormSearch, BtnSearch } from './style';

export const Search = ({ value, onSearch, onApi }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onApi();
  }
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
        <BtnSearch type="submit">Пошук</BtnSearch>
      </FormSearch>
    </div>
  );
};
