import "./ZenPhilosophy.css";
export default function ZenPhilosophy() {
  return (
    <section className="zen-section">
      <h2 className="zen-heading zen-heading--green">Zen isn&apos;t a look.</h2>
      <h2 className="zen-heading zen-heading--dark">Wherever you are.</h2>
      <p className="zen-body">
        It&apos;s the feeling when everything in your home belongs.
        <br />
        We built Zenspaces because every misfit purchase, every returned sofa,
        every room that never quite came
        <br />
        together &mdash; was a solvable problem. Spatial intelligence already
        existed in the world&apos;s best design studios.
        <br />
        We put it in your pocket. Free.
      </p>
      <div className="zen-room-wrap">
        <img
          src="https://static.codia.ai/s/image_d8ca0b54-bf81-4517-8e2f-012b099624e7.png"
          alt="Room with AR measurements"
          className="zen-room-img"
        />
        <span className="zen-room__badge">D:45cm</span>
        <img
          src="https://static.codia.ai/s/image_d0a82a85-022d-4c53-8929-2eebaedf947f.png"
          alt="AR icon"
          className="zen-room__ar-icon"
        />
      </div>
    </section>
  );
}
