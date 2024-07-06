import "./App.css";

function App() {
  var promise = new Promise((resolve, reject) => {
    let name = "Paul";

    if (name === "Paul") {
      resolve("Promise resolved successfully");
    } else {
      reject(Error("Promise rejected"));
    }
  });
  let obj = { newName: "" };

  promise.then(
    (result) => {
      obj["newName"] = result;
    },
    function (error) {
      obj["newName"] = error;
    }
  );
  console.log(obj.newName);

  return (
    <>
      <h1>Hello World</h1>
      <h2>{obj.newName}</h2>
    </>
  );
}

export default App;
