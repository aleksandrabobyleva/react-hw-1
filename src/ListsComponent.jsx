 
export default function ListsComponent() {
  return (
    <div>
      <p>Список 1</p>
      
      <ul>
        <li>Элемент 1</li>
        <li>
          Элемент 2
          <ul>
            <li>Вложенный элемент 2.1</li>
            <li>Вложенный элемент 2.2</li>
          </ul>
        </li>
        <li>Элемент 3</li>
      </ul>

      <p>Список 2</p>
      <ol>
        <li>Элемент A</li>
        <li>
          Элемент B
          <ol>
            <li>Вложенный элемент B.1</li>
            <li>Вложенный элемент B.2</li>
          </ol>
        </li>
        <li>Элемент C</li>
      </ol>
    </div>
  );
}
