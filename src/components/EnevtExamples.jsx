const EnevtExamples = () => {
  const handleFormInput = (e) => {
    console.log("input onChange")
  }

  const handleButtonClick = () => {
    console.log("button is click!")
  }

  const handleFormSubmittion = (e) => {
    e.preventDefault()
    console.log("form submit!")
  }

  return (
    <section>
      <form>
        <h2>event list</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => {
            console.log(e.target.value)
          }}
          style={{ margin: "1rem 0" }}
        />
        <button type="submit">submit</button>
      </form>
      <button
        onClick={() => {
          console.log("click the btn")
        }}
      >
        click !
      </button>
    </section>
  )
}

export default EnevtExamples
