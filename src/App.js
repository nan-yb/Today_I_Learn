import React , {useRef , useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const [inputs , setInputs] = useState({
    username:'',
    email:''
  });

  const { username , email} = inputs;
  const onChange = e=>{
    const {name , value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    })
  }

  const [users,setUsers] = useState([
    {

        id : 1,
        username : 'yb',
        email : 'abso8787@naver.com',
        active : true

    },

    {
        id : 2,
        username : 'yb2',
        email : 'abso8@naver.com',
        active : false
    
    },
    {
        id : 3,
        username : 'yb3',
        email : 'abso87@naver.com',
        active : false

    
    }
]);



  const nextId = useRef(4);

  const onCreate = () =>{
    const user = {
      id : nextId.current,
      username,
      email,
    }

    // setUsers([...users , user]);
    setUsers(users.concat(user));

    setInputs({
      username : '',
      email: ''
    });
    console.log(nextId.current);
    nextId.current += 1; 
  }

  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id 
      ? { ...user , active : !user.active }
      : user 
    ));
  }

  return(
    <>
      <CreateUser 
      username ={username}
      email = {email}
      onChange = {onChange}
      onCreate = {onCreate}ß
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  )
}



export default App;