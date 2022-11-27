import { FormSearch, BtnSearch } from './style';

export const Search = () => {
  return (
    <div className="wrapper">
      <FormSearch>
        <form action="">
          <input
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
