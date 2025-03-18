export default function ParagraphsComponent() {
  const textArray = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus possimus dicta repudiandae...",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat vitae architecto mollitia...",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, saepe maxime alias...",
    
  ];

  return (
    <div style={{ maxWidth: "560px" }}>
      {textArray.map((text, index) => (
        <p key={index}> {text}</p>
      ))}
    </div>
  );
}
