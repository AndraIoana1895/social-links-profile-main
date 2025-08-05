import Button from "./components/Button";
import authorAvatar from "./assets/images/avatar-jessica.jpeg"


function App() {
  return (
    <div className="wrapper">
      <main className="card">
        <img src={authorAvatar} alt="Author Avatar" />
        <div className="author-details">
          <h1>Jessica Randall</h1>
          <p>London, United Kingdom</p>
        </div>
        <p className="author-passions">"Front-end developer and avid reader."</p>
        <div className="buttons">
          <Button buttonTitle="GitHub" />
          <Button buttonTitle="Frontend Mentor" />
          <Button buttonTitle="LinkedIn" />
          <Button buttonTitle="Twitter" />
          <Button buttonTitle="Instagram" />
        </div>
      </main>
    </div>
  );
}

export default App;
