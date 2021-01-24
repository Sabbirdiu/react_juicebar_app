import React from 'react'

function SearchForm({setSearch}) {
    const searchValue = React.useRef("");

    React.useEffect(() => {
      searchValue.current.focus();
    }, []);
  
    function searchJuice() {
        setSearch(searchValue.current.value);
    }
    function handleSubmit(e) {
      e.preventDefault();
    }
    return (
      <section className="section">
        <h2 className="section-title">search Juice</h2>
        <form className="form search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">search your favorite Juice</label>
            <input
              type="text"
              name="name"
              id="name"
              ref={searchValue}
              onChange={searchJuice}
            />
          </div>
        </form>
      </section>
    )
}

export default SearchForm
