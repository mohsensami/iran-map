import { useFetch } from "../../hooks/useFetch";
import { countries } from "../../data/countries";
import { useState } from "react";

const Dictunary = () => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    text: "Hello World",
    from: "en-GB",
    to: "fa-IR",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch(
      `https://api.mymemory.translated.net/get?q=${formData.text}&langpair=${formData.from}|${formData.to}`
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setResult(data.matches);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
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
        {!isLoading &&
          result &&
          result?.map((item) => <div key={item.id}>{item.translation}</div>)}
      </section>
    </>
  );
};

export default Dictunary;
