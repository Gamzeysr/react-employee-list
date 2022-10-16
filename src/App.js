import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import data from './assests/data';
import { useState } from 'react';


function App() {
  const [page, setPage] = useState(1);
  const userPerPage = 5;  //👈//her sayfada 5 adet resim olsun diye yaptık 

  const indexOffLastUser = page * userPerPage; //👈Buraya ben sayfadaki son kişinin index numarasını atıcam demek oluyor
  const indexOffFirstUser = indexOffLastUser - userPerPage;  //👈Burayada sayfadaki ilk kişinin index numarasını uraya atıcam demek oluyor.

  const currentUsers = data.slice(indexOffFirstUser, indexOffLastUser)

  return (
    <div className="App">
      <Header from={indexOffFirstUser + 1} to={indexOffFirstUser + currentUsers.length} />
      {currentUsers.map((item) => <Card key={item.id}{...item} />)}
      <Button total={Math.ceil(data.length / userPerPage)} page={page} setPage={setPage} />
    </div>
  );
}

export default App;
