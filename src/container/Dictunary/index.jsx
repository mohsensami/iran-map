import { useFetch } from "../../hooks/useFetch";
import { countries } from "../../data/countries";
import { useState } from "react";

const Dictunary = () => {
  const [formData, setFormData] = useState({
    text: "Hello",
    from: "en-GB",
    to: "fa-IR",
  });

  const [shouldFetchData, setShouldFetchData] = useState(false);
  const {
    data: result,
    isLoading,
    error,
  } = useFetch(
    `https://api.mymemory.translated.net/get?q=${formData.text}&langpair=${formData.from}|${formData.to}`,
    shouldFetchData
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShouldFetchData(true);
  };

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              value={formData.text}
              onChange={handleChange}
              name="text"
              type="text"
              placeholder="Enter a Word to translate"
            />
          </div>
          <div>
            <select
              defaultValue={formData.from}
              name="from"
              onChange={handleChange}
            >
              {countries.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              defaultValue={formData.to}
              name="to"
              onChange={handleChange}
            >
              {countries.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input type="submit" value="Translate" />
          </div>
        </form>
      </section>
      <section>
        {isLoading && <p>Loading data...</p>}
        {error && <p>Error: {error}</p>}
        {result?.matches?.map((item) => (
          <div>{item.translation}</div>
        ))}
      </section>
    </>
  );
};

export default Dictunary;
