import "./App.css";

//1.识别常规变量
//2.原生方法调用
//3.三元运算符
//4.react 完成列表渲染 map
const name = "小黑";
const getAge = () => {
  return 18;
};
const flag = true;
const persons = [
  {
    id: 1,
    name: "张三",
  },
  {
    id: 2,
    name: "李四",
  },
  {
    id: 3,
    name: "王五",
  },
];

function App() {
  return (
    <div className="App">
      {" "}
      {name} {getAge()} {flag ? "真棒" : "不行"}{" "}

      <ul> 
      {persons.map(person=>  <li key={person.id}>{person.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
